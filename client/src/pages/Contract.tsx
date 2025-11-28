import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 合約查看頁面
 * 使用圖片方式顯示合約內容，採用品牌主題色設計
 */
export default function Contract() {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    // 返回上一頁
    window.history.back();
  };

  // 生成合約圖片陣列（共 29 頁）
  const contractPages = Array.from({ length: 29 }, (_, i) => {
    const pageNum = String(i + 1).padStart(2, '0');
    return `/contract-${pageNum}.png`;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary/10 via-background to-primary/10">
      {/* 頂部標題區 - 使用品牌主題色 */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white py-8 shadow-lg">
        <div className="container">
          <h1 className="text-4xl font-bold text-center animate-fade-in">
            合約閱讀與確認
          </h1>
        </div>
      </header>

      {/* 合約圖片顯示區域 */}
      <main className="flex-1 py-12">
        {/* 桌面版：使用 container 和 max-width */}
        <div className="hidden md:block container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in animate-delay-200">
              {contractPages.map((imagePath, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <img
                    src={imagePath}
                    alt={`合約第 ${index + 1} 頁`}
                    className="w-full h-auto rounded-lg shadow-md transition-transform hover:scale-[1.02]"
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                  {/* 頁碼標示 */}
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {index + 1} / {contractPages.length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 手機版：全寬度顯示 */}
        <div className="md:hidden space-y-4 animate-fade-in animate-delay-200">
          {contractPages.map((imagePath, index) => (
            <div 
              key={index}
              className="relative"
            >
              <img
                src={imagePath}
                alt={`合約第 ${index + 1} 頁`}
                className="w-full h-auto"
                loading={index > 2 ? "lazy" : "eager"}
              />
              {/* 頁碼標示 */}
              <div className="absolute top-2 right-2 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                {index + 1} / {contractPages.length}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 底部返回按鈕 - 固定在底部 */}
      <footer className="bg-white border-t py-6 shadow-lg sticky bottom-0">
        <div className="container flex justify-center">
          <Button
            size="lg"
            onClick={handleBack}
            className="text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all animate-fade-in animate-delay-400"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            返回
          </Button>
        </div>
      </footer>
    </div>
  );
}
