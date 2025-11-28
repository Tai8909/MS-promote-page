import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Loader2 } from "lucide-react";

// 驗證函數
const validateTaiwanID = (id: string): boolean => {
  id = id.toUpperCase();
  if (!/^[A-Z][12]\d{8}$/.test(id)) return false;

  const letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
  const letterIndex = letters.indexOf(id[0]);
  if (letterIndex === -1) return false;

  const letterCode = letterIndex + 10;
  const n1 = Math.floor(letterCode / 10);
  const n2 = letterCode % 10;

  const numbers = id.slice(1).split('').map(Number);

  const sum =
    n1 * 1 +
    n2 * 9 +
    numbers[0] * 8 +
    numbers[1] * 7 +
    numbers[2] * 6 +
    numbers[3] * 5 +
    numbers[4] * 4 +
    numbers[5] * 3 +
    numbers[6] * 2 +
    numbers[7] * 1 +
    numbers[8] * 1;

  return sum % 10 === 0;
};

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateTaiwanPhone = (phone: string): boolean => {
  return /^09\d{8}$/.test(phone);
};

const validateBankAccount = (account: string): boolean => {
  return /^\d{3,4}-\d{10,20}$/.test(account);
};

const validateAddress = (addr: string): boolean => {
  const patterns = [
    /^.{2,3}[縣市].{2,4}[區鄉鎮市].+[路街巷弄]\d+號/,
    /^.{2,3}[縣市].{2,4}[區鄉鎮市].+[路街].+段\d+號/,
    /^.{2,3}[縣市].{2,4}[區鄉鎮市].{2,3}[村里].+[路街巷弄]\d+號/,
    /^.{2,3}[縣市].{2,4}[區鄉鎮市].+[路街]\d+巷(\d+弄)?\d+號/,
    /^.{2,3}[縣市].{2,4}[區鄉鎮市].+工業區.+路\d+號/,
    /^.{2,3}[縣市].{2,4}[區鄉鎮市].+[路街巷弄]\d+號\d+樓/
  ];
  
  return patterns.some(pattern => pattern.test(addr)) && addr.length >= 8;
};

const validateInvoiceCode = (code: string): boolean => {
  return /^[A-Z]{2}\d{8}$/.test(code);
};

const validateName = (name: string): boolean => {
  return /^[\u4e00-\u9fa5a-zA-Z\s]{2,20}$/.test(name);
};

export default function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem('myStoreFormData');
    return savedFormData ? JSON.parse(savedFormData) : {
      name: '',
      phone: '',
      mail: '',
      ID: '',
      addr: '',
      bank_account: '',
      Rcode: '',
      recName: '',
      recPhone: '',
      birthday: '',
      gender: ''
    };
  });

  const [errors, setErrors] = useState({
    name: '',
    mail: '',
    ID: '',
    phone: '',
    bank_account: '',
    birthday: '',
    recName: '',
    recPhone: '',
    Rcode: '',
    addr: '',
  });

  const [agreeContract, setAgreeContract] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;
    let newErrors = { ...errors };

    if (name === 'Rcode') {
      newValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (newValue && !validateInvoiceCode(newValue)) {
        newErrors.Rcode = '發票號碼格式：兩碼英文+八碼數字，例如 AB12345678';
      } else {
        newErrors.Rcode = '';
      }
    }

    if (name === 'name') {
      if (value.length > 20) {
        newErrors.name = '姓名不得超過 20 字元';
      } else if (value.trim() !== '' && !validateName(value)) {
        newErrors.name = '姓名格式錯誤，請輸入2-20個中文或英文字元';
      } else {
        newErrors.name = '';
      }
    }

    if (name === 'mail') {
      newErrors.mail = validateEmail(value) ? '' : '電子郵件格式錯誤';
    }

    if (name === 'ID') {
      newErrors.ID = validateTaiwanID(value) ? '' : '身分證字號不正確';
    }

    if (name === 'phone') {
      newErrors.phone = validateTaiwanPhone(value) ? '' : '電話號碼格式錯誤';
    }

    if (name === 'bank_account') {
      newErrors.bank_account = validateBankAccount(value)
        ? ''
        : '銀行帳戶格式錯誤，請輸入 3~4碼-10~20碼數字，例如 013-123456789012';
    }

    if (name === 'birthday') {
      if (!value) {
        newErrors.birthday = '請選擇生日';
      } else {
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        const d = today.getDate() - birthDate.getDate();
        if (age < 20 || (age === 20 && (m < 0 || (m === 0 && d < 0)))) {
          newErrors.birthday = '申請人須年滿20歲';
        } else {
          newErrors.birthday = '';
        }
      }
    }

    if (name === 'addr') {
      // 保持原始輸入值，不要即時移除空格以避免干擾輸入法
      const trimmedValue = value.replace(/\s/g, '');
      if (trimmedValue.length > 0 && trimmedValue.length < 8) {
        newErrors.addr = '地址長度至少需要8個字';
      } else if (trimmedValue.length >= 8 && !validateAddress(trimmedValue)) {
        newErrors.addr = '請輸入完整台灣地址格式，例如：台北市大安區忠孝東路123號';
      } else {
        newErrors.addr = '';
      }
    }

    const updatedFormData = { ...formData, [name]: newValue };
    setFormData(updatedFormData);
    localStorage.setItem('myStoreFormData', JSON.stringify(updatedFormData));

    if (name === 'recName') {
      if (newValue.trim() !== '') {
        if (!validateName(newValue)) {
          newErrors.recName = '推薦人姓名格式錯誤，請輸入2-20個中文或英文字元';
        } else {
          newErrors.recName = '';
          if (updatedFormData.recPhone.trim() === '') {
            newErrors.recPhone = '請填寫推薦人電話';
          } else {
            newErrors.recPhone = validateTaiwanPhone(updatedFormData.recPhone) ? '' : '推薦人電話格式錯誤';
          }
        }
      } else {
        newErrors.recName = '';
        if (updatedFormData.recPhone.trim() === '') {
          newErrors.recPhone = '';
        }
      }
    }

    if (name === 'recPhone') {
      if (newValue.trim() !== '') {
        if (!validateTaiwanPhone(newValue)) {
          newErrors.recPhone = '推薦人電話格式錯誤';
        } else {
          newErrors.recPhone = '';
          if (updatedFormData.recName.trim() === '') {
            newErrors.recName = '請填寫推薦人姓名';
          } else {
            newErrors.recName = validateName(updatedFormData.recName) ? '' : '推薦人姓名格式錯誤，請輸入2-20個中文或英文字元';
          }
        }
      } else {
        newErrors.recPhone = '';
        if (updatedFormData.recName.trim() === '') {
          newErrors.recName = '';
        }
      }
    }

    if ((name === 'phone' || name === 'recPhone') &&
      formData.phone.trim() !== '' && updatedFormData.recPhone.trim() !== '') {
      const isSamePhone = formData.phone.trim() === updatedFormData.recPhone.trim();
      if (isSamePhone) {
        newErrors.recPhone = '推薦人電話不能與申請人電話相同';
      } else {
        if (newErrors.recPhone === '推薦人電話不能與申請人電話相同') {
          newErrors.recPhone = '';
        }
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const hasRecName = formData.recName.trim() !== '';
    const hasRecPhone = formData.recPhone.trim() !== '';
    
    if (hasRecName && !hasRecPhone) {
      const element = document.getElementById('recPhone') as HTMLInputElement;
      if (element) {
        element.setCustomValidity('請填寫推薦人電話');
        element.reportValidity();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
        element.addEventListener('input', () => element.setCustomValidity(''), { once: true });
      }
      return;
    }
    
    if (hasRecPhone && !hasRecName) {
      const element = document.getElementById('recName') as HTMLInputElement;
      if (element) {
        element.setCustomValidity('請填寫推薦人姓名');
        element.reportValidity();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
        element.addEventListener('input', () => element.setCustomValidity(''), { once: true });
      }
      return;
    }

    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      const errorField = Object.keys(errors).find(key => errors[key as keyof typeof errors] !== '');
      if (errorField) {
        const element = document.getElementById(errorField) as HTMLInputElement;
        if (element) {
          const errorMessage = errors[errorField as keyof typeof errors];
          element.setCustomValidity(errorMessage);
          element.reportValidity();
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
          element.addEventListener('input', () => element.setCustomValidity(''), { once: true });
        }
      }
      return;
    }

    const requiredFields = [
      { field: 'name', element: 'name', name: '姓名' },
      { field: 'gender', element: 'gender', name: '性別' },
      { field: 'birthday', element: 'birthday', name: '生日' },
      { field: 'phone', element: 'phone', name: '電話' },
      { field: 'mail', element: 'mail', name: '電子郵件' },
      { field: 'ID', element: 'ID', name: '身分證字號' },
      { field: 'addr', element: 'addr', name: '通訊地址' },
      { field: 'bank_account', element: 'bank_account', name: '銀行帳戶' },
    ];

    for (const { field, element, name: fieldName } of requiredFields) {
      if (!formData[field as keyof typeof formData] || formData[field as keyof typeof formData].trim() === '') {
        const domElement = document.getElementById(element) as HTMLInputElement;
        if (domElement) {
          domElement.setCustomValidity(`請填寫${fieldName}`);
          domElement.reportValidity();
          domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          domElement.focus();
          domElement.addEventListener('input', () => domElement.setCustomValidity(''), { once: true });
        }
        return;
      }
    }

    if (!agreeContract) {
      const element = document.getElementById('agreeContract') as HTMLInputElement;
      if (element) {
        element.setCustomValidity('請勾選同意經銷商合約條款');
        element.reportValidity();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
        element.addEventListener('change', () => element.setCustomValidity(''), { once: true });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== '') {
          formPayload.append(key, value as any);
        }
      });

      console.log('提交資料:', Object.fromEntries(formPayload.entries()));

      const response = await fetch('https://wdweb-1.onrender.com/api/submit', {
        method: 'POST',
        body: formPayload,
        headers: {
          // 移除 Content-Type，讓瀏覽器自動設置 multipart/form-data
        }
      });

      console.log('伺服器回應狀態:', response.status);
      
      if (response.ok) {
        const responseData = await response.text();
        console.log('伺服器回應內容:', responseData);
        
        localStorage.removeItem('myStoreFormData');
        setFormData({
          name: '',
          phone: '',
          mail: '',
          ID: '',
          addr: '',
          bank_account: '',
          Rcode: '',
          recName: '',
          recPhone: '',
          birthday: '',
          gender: ''
        });
        setShowSuccess(true);
      } else {
        const errorText = await response.text();
        console.error('錯誤詳情:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        alert(`上傳失敗 (${response.status}): ${errorText || response.statusText}`);
      }
    } catch (error: any) {
      console.error('提交錯誤:', error);
      alert(`發生錯誤: ${error.message || '網路連線問題'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold gradient-text">MY STORE</a>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/supplier">
                <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">供應商專區</a>
              </Link>
              <Link href="/distributor">
                <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">經銷商專區</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <section className="py-12 bg-white md:bg-transparent">
        <div className="container max-w-4xl">
          <Card className="border-0 shadow-none md:border md:shadow-xl">
            <CardContent className="p-0 md:p-8">
              <div className="mb-8 p-2 md:p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                <h1 className="text-3xl font-bold mb-3 gradient-text text-center">
                  My Store 經銷商申請表單
                </h1>
                <p className="text-base font-medium mb-3">
                  My Store｜生活，就是你的創業舞台！
                </p>
                <p className="text-sm mb-3">
                  還以為購物只能花錢？My Store 打造全新「分享式創業平台」，讓你 0 元就能輕鬆經營副業人生。
                </p>
                <ul className="space-y-2 text-sm">
                  <li>無需囤貨、無加盟費、無業績壓力，只要加入會員，即可獲得：</li>
                  <li>🔔 <strong>專屬分潤碼</strong>，分享連結立即賺回饋</li>
                  <li>🔔 <strong>個人推薦頁</strong>，打造自己的選品清單</li>
                  <li>🔔 <strong>完整客服、物流、行銷與教育支援</strong></li>
                </ul>
                <p className="text-sm mt-4">
                  無論你是上班族、無加盟費、無業績壓力，只要覺得平台上有哪些產品不錯的話，皆可以分享到群組讓自己的會員購買。
                </p>
                <p className="text-sm mt-3 font-medium">
                  My Store 合法透明，依據《多層次傳銷管理法》規範，保障每位參與者權益。分潤計畫限 20 歲以上開放，未滿者亦可先加入會員。
                </p>
                <p className="text-sm mt-3 text-primary font-bold">
                  🏠 立即加入，從分享開始，把生活收入化入袋！
                </p>

                <div className="mt-6 p-4 bg-white/80 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">申請流程說明</h3>
                  <ol className="space-y-2 text-sm">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</span>
                      <span>完整填寫下方經銷商申請表單</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</span>
                      <span>等待 1~3 個工作天審核通過</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">3</span>
                      <span>我們將寄出「專屬推薦碼」、「個人 QR Code」至您的信箱，收到信後即可開始使用，輕鬆展開您的分潤之旅！</span>
                    </li>
                  </ol>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      姓名(必填):
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="請填寫真實姓名"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.name && <div className="text-destructive text-sm mt-1">{errors.name}</div>}
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-semibold mb-2">
                      性別(必填):
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">請選擇</option>
                      <option value="男">男</option>
                      <option value="女">女</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="birthday" className="block text-sm font-semibold mb-2">
                      生日(必填):
                    </label>
                    <input
                      id="birthday"
                      name="birthday"
                      type="date"
                      value={formData.birthday}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.birthday && <div className="text-destructive text-sm mt-1">{errors.birthday}</div>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      電話(必填):
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="09XXXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.phone && <div className="text-destructive text-sm mt-1">{errors.phone}</div>}
                  </div>
                </div>

                <div>
                  <label htmlFor="mail" className="block text-sm font-semibold mb-2">
                    電子郵件(需與My Store會員相同)(必填):
                  </label>
                  <input
                    id="mail"
                    name="mail"
                    type="text"
                    placeholder="a@mail.com"
                    value={formData.mail}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.mail && <div className="text-destructive text-sm mt-1">{errors.mail}</div>}
                </div>

                <div>
                  <label htmlFor="ID" className="block text-sm font-semibold mb-2">
                    身份證字號(必填):
                  </label>
                  <input
                    id="ID"
                    name="ID"
                    type="text"
                    placeholder="A123456789"
                    value={formData.ID}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.ID && <div className="text-destructive text-sm mt-1">{errors.ID}</div>}
                </div>

                <div>
                  <label htmlFor="addr" className="block text-sm font-semibold mb-2">
                    通訊地址(必填):
                  </label>
                  <input
                    id="addr"
                    name="addr"
                    type="text"
                    placeholder="台北市大安區忠孝東路123號"
                    value={formData.addr}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.addr && <div className="text-destructive text-sm mt-1">{errors.addr}</div>}
                </div>

                <div>
                  <label htmlFor="bank_account" className="block text-sm font-semibold mb-2">
                    銀行帳戶(必填):
                  </label>
                  <input
                    id="bank_account"
                    name="bank_account"
                    type="text"
                    placeholder="01X(銀行代碼)-123xxxxxxxxxxx(銀行帳號)"
                    value={formData.bank_account}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.bank_account && <div className="text-destructive text-sm mt-1">{errors.bank_account}</div>}
                </div>

                <div>
                  <label htmlFor="Rcode" className="block text-sm font-semibold mb-2">
                    補登發票號碼(南興百貨首次購物發票):
                  </label>
                  <input
                    id="Rcode"
                    name="Rcode"
                    type="text"
                    placeholder="AB12345678"
                    maxLength={10}
                    value={formData.Rcode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.Rcode && <div className="text-destructive text-sm mt-1">{errors.Rcode}</div>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="recName" className="block text-sm font-semibold mb-2">
                      推薦人姓名(推薦人須為My Store經銷會員身分):
                    </label>
                    <input
                      id="recName"
                      name="recName"
                      type="text"
                      placeholder="請填寫真實姓名"
                      value={formData.recName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.recName && <div className="text-destructive text-sm mt-1">{errors.recName}</div>}
                  </div>

                  <div>
                    <label htmlFor="recPhone" className="block text-sm font-semibold mb-2">
                      推薦人電話:
                    </label>
                    <input
                      id="recPhone"
                      name="recPhone"
                      type="text"
                      placeholder="09XXXXXXXX"
                      value={formData.recPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.recPhone && <div className="text-destructive text-sm mt-1">{errors.recPhone}</div>}
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                  <input
                    type="checkbox"
                    id="agreeContract"
                    checked={agreeContract}
                    onChange={e => setAgreeContract(e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="agreeContract" className="text-sm">
                    我已詳讀並同意
                    <Link href="/contract">
                      <a className="text-primary font-semibold underline mx-1">
                        經銷商合約
                      </a>
                    </Link>
                    內容
                  </label>
                </div>

                {isSubmitting && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <Card className="p-8">
                      <div className="flex flex-col items-center gap-4">
                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                        <p className="text-lg font-medium">資料送出中，請稍候...</p>
                      </div>
                    </Card>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full text-lg">
                  提交資料
                </Button>
              </form>

              {showSuccess && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <Card className="p-8 max-w-md mx-4">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold gradient-text mb-4">上傳成功！</h2>
                      <p className="mb-6">感謝您的申請，請加入 Line 官方帳號以獲得最新通知。</p>
                      <div className="flex flex-col gap-3">
                        <Button size="lg" className="bg-[#00c300] hover:bg-[#00a300]" asChild>
                          <a href="https://lin.ee/wzgZHpE" target="_blank" rel="noopener noreferrer">
                            加入 Line 官方
                          </a>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={() => window.location.href = 'https://www.888store.com.tw'}
                        >
                          關閉
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 MY STORE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/supplier">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">供應商專區</a>
              </Link>
              <Link href="/distributor">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">經銷商專區</a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
