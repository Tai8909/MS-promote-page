import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp, Globe, Mail, Users, DollarSign, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Supplier() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold gradient-text">MY STORE</a>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/supplier">
                <a className="text-sm font-medium text-primary">供應商專區</a>
              </Link>
              <Link href="/distributor">
                <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">經銷商專區</a>
              </Link>
              <Button size="sm">立即加入</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight animate-fade-in">
                品牌成長的<span className="gradient-text">加速器</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-200">
                零風險、高彈性的銷售與品牌宣傳管道，讓您的產品直達目標客群
              </p>
              <div className="flex gap-4 animate-fade-in animate-delay-400">
                <Button size="lg" className="text-lg px-8">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  開始銷售
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  了解更多
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in animate-delay-300">
              <img 
                src="/supplier-hero.jpg" 
                alt="供應商成長" 
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">核心優勢</h2>
            <p className="text-xl text-muted-foreground">為什麼選擇我們的平台？</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">零成本上架</h3>
                <p className="text-muted-foreground mb-6">
                  完全免費上架，無前期投入成本。僅在商品成功售出後，收取 15% 手續費。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>沒有上架費</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>沒有月費</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>沒有庫存費</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">專屬品牌頁面</h3>
                <p className="text-muted-foreground mb-6">
                  獲得一個完全屬於您的專屬頁面，自由打造品牌形象。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>上傳圖片、文字、影片</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>品牌故事與價值展示</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>新創品牌最佳選擇</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">EDM 行銷工具</h3>
                <p className="text-muted-foreground mb-6">
                  透過平台向消費者發送 EDM，進行新品或活動宣傳。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>精準觸達目標客群</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>成本低廉</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>可追蹤行銷效果</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revenue Sharing */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/zero-risk-illustration.jpg" 
                alt="零風險機制" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">消費者分潤機制</h2>
              <p className="text-lg text-muted-foreground mb-8">
                鼓勵消費者主動分享和推薦您的產品，形成口碑行銷。您可以自行決定分潤比例，靈活調整行銷策略。
              </p>

              <div className="bg-accent/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">分潤計算範例</h3>
                <p className="text-sm text-muted-foreground mb-4">商品售價：100 元 | 供應商決定分潤：40%</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium">平台手續費 (15%)</span>
                    <span className="text-lg font-bold text-primary">15 元</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium">消費者回饋 (25%)</span>
                    <span className="text-lg font-bold text-primary">25 元</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border-2 border-primary">
                    <span className="font-bold">供應商實收 (60%)</span>
                    <span className="text-2xl font-bold text-primary">60 元</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">社群裂變</h4>
                    <p className="text-sm text-muted-foreground">消費者主動分享，形成口碑行銷</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">銷量提升</h4>
                    <p className="text-sm text-muted-foreground">透過分潤激勵，大幅增加商品銷量</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">品牌傳播</h4>
                    <p className="text-sm text-muted-foreground">消費者分享等同於免費廣告</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">完整運作流程</h2>
            <p className="text-xl text-muted-foreground">從申請到結算，五個簡單步驟</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "申請與審核",
                description: "填寫供應商申請表，提交品牌資訊、營業執照等相關文件。平台審核通常需要 3-5 個工作天。",
                icon: Shield
              },
              {
                step: "02",
                title: "建設品牌頁面",
                description: "登入供應商後台，編輯專屬品牌頁面，上傳品牌故事、圖片、視頻等內容。",
                icon: Globe
              },
              {
                step: "03",
                title: "上架商品",
                description: "在後台上傳商品資訊（名稱、描述、圖片、價格等），設定每件商品的分潤比例。",
                icon: TrendingUp
              },
              {
                step: "04",
                title: "行銷與推廣",
                description: "利用 EDM 工具向消費者發送新品或活動資訊，鼓勵消費者透過分潤機制分享產品。",
                icon: Mail
              },
              {
                step: "05",
                title: "銷售與結算",
                description: "實時查看銷售數據。平台每月進行結算，將收入（扣除手續費和分潤後）匯入指定銀行帳戶。",
                icon: DollarSign
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">準備好開始了嗎？</h2>
            <p className="text-xl text-muted-foreground mb-8">
              加入我們的平台，開始您的品牌成長之旅。零風險、高回報，讓您的產品觸及更多消費者。
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                立即申請成為供應商
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                查看詳細說明書
              </Button>
            </div>
          </div>
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
