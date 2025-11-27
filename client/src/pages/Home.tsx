import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Store, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
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
                <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">供應商專區</a>
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
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              打造您的<span className="gradient-text">商業未來</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 animate-fade-in animate-delay-200">
              無論您是品牌供應商還是想賺取被動收入的經銷商,我們都為您提供最佳的平台和工具
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
              <Link href="/supplier">
                <Button size="lg" className="text-lg px-8 w-full sm:w-auto">
                  <Store className="mr-2 h-5 w-5" />
                  我是供應商
                </Button>
              </Link>
              <Link href="/distributor">
                <Button size="lg" variant="outline" className="text-lg px-8 w-full sm:w-auto">
                  <Users className="mr-2 h-5 w-5" />
                  我是經銷商
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">選擇您的成功之路</h2>
            <p className="text-xl text-muted-foreground">兩種身份，無限可能</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Supplier Card */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-2xl group hover-lift animate-scale-in">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src="/supplier-hero.jpg" 
                    alt="供應商" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white mb-2">供應商專區</h3>
                    <p className="text-white/90">品牌成長的加速器</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">零成本上架</h4>
                        <p className="text-sm text-muted-foreground">成交後才收取 15% 手續費</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">專屬品牌頁面</h4>
                        <p className="text-sm text-muted-foreground">打造您的線上品牌形象館</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">消費者分潤</h4>
                        <p className="text-sm text-muted-foreground">激勵消費者主動分享推廣</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/supplier">
                    <Button className="w-full" size="lg">
                      了解供應商方案
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Distributor Card */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-2xl group hover-lift animate-scale-in animate-delay-200">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src="/distributor-hero.jpg" 
                    alt="經銷商" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white mb-2">經銷商專區</h3>
                    <p className="text-white/90">輕鬆賺取被動收入</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">零門檻加入</h4>
                        <p className="text-sm text-muted-foreground">任何消費者都可申請</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">團隊獎勵機制</h4>
                        <p className="text-sm text-muted-foreground">建立推薦網絡，獲得被動收入</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">升級機制</h4>
                        <p className="text-sm text-muted-foreground">達成條件，解鎖更高回饋</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/distributor">
                    <Button className="w-full" size="lg" variant="secondary">
                      了解經銷商方案
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">為什麼選擇我們？</h2>
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">我們提供最完善的平台和支持</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in-up animate-delay-200">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">零風險</h3>
              <p className="text-muted-foreground">
                無論是供應商還是經銷商，都無需前期投資。成交後才收費，確保您的每一分支出都與實際收益掛鉤。
              </p>
            </div>

            <div className="text-center animate-fade-in-up animate-delay-300">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">高回報</h3>
              <p className="text-muted-foreground">
                透過分潤機制和團隊獎勵，您可以獲得遠超傳統模式的收益。銷量越高，收入越多。
              </p>
            </div>

            <div className="text-center animate-fade-in-up animate-delay-400">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">易操作</h3>
              <p className="text-muted-foreground">
                簡單的申請流程、直觀的後台介面、完善的工具支持。無需專業知識，輕鬆上手。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-white/80">活躍供應商</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-white/80">經銷商會員</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10萬+</div>
              <div className="text-white/80">月度交易</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80">滿意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">準備好開始了嗎？</h2>
            <p className="text-xl text-muted-foreground mb-8">
              選擇最適合您的身份，立即加入我們的平台，開啟您的成功之旅
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/supplier">
                <Button size="lg" className="text-lg px-8 w-full sm:w-auto">
                  成為供應商
                </Button>
              </Link>
              <Link href="/distributor">
                <Button size="lg" variant="outline" className="text-lg px-8 w-full sm:w-auto">
                  成為經銷商
                </Button>
              </Link>
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
