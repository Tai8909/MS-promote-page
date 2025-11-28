import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Link2, QrCode, DollarSign, Users, TrendingUp, Award, Smartphone, Crown, Share, Share2Icon, Group, GroupIcon } from "lucide-react";
import { Link } from "wouter";

export default function Distributor() {
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
                <a className="text-sm font-medium text-primary">經銷商專區</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight animate-fade-in">
                輕鬆賺取<span className="gradient-text">被動收入</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-200">
                無論您是想兼職增加收入、組建團購社群，或是單純想省錢的消費者，我們的經銷商計畫都為您敞開大門
              </p>
              <div className="flex gap-4 animate-fade-in animate-delay-400">
                <Link href="/apply">
                  <Button size="lg" className="text-lg px-8">
                    <Users className="mr-2 h-5 w-5" />
                    成為經銷商
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="https://lin.ee/MGIhWu2g" target="_blank" rel="noopener noreferrer">
                    了解更多
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in animate-delay-300">
              <img 
                src="/distributor-hero.jpg" 
                alt="經銷商收入" 
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Requirements */}
      <section className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">零門檻加入</h2>
            <p className="text-xl text-muted-foreground">任何消費者都可以申請成為經銷商</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">加入資格</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>任何消費者都可申請</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>年滿20歲，無職業、地域限制</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>申請流程簡單快速</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>審核通常 1-3 個工作天</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6">獲得專屬工具</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                        <Link2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold mb-1">專屬網址</h4>
                          <p className="text-sm text-muted-foreground">一鍵分享，自動追蹤</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                        <Smartphone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold mb-1">專屬推薦碼</h4>
                          <p className="text-sm text-muted-foreground">口頭推薦，輕鬆記憶</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                        <QrCode className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold mb-1">專屬 QRCode</h4>
                          <p className="text-sm text-muted-foreground">掃碼即達，線上線下通用</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PV Points System */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">PV 點數與現金回饋</h2>
              <p className="text-lg text-muted-foreground mb-8">
                所有透過您的專屬網址或專屬推薦碼完成的購物，無論是自購或分享給他人購買，您都能獲得 PV 點數。點數每月結算轉換成現金，次月 20 日匯入您的銀行帳戶。
              </p>

              <div className="space-y-6">
                <div className="bg-accent/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">累積方式</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">自己購買</h4>
                        <p className="text-sm text-muted-foreground">透過專屬工具購物，累積 PV 點數</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">他人購買</h4>
                        <p className="text-sm text-muted-foreground">分享給朋友，他們購買時您也獲得點數</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">結算流程</h3>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">全月</div>
                      <div className="text-xs text-muted-foreground">累積點數</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">月底</div>
                      <div className="text-xs text-muted-foreground">統計結算</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">轉換</div>
                      <div className="text-xs text-muted-foreground">點數→現金</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">20日</div>
                      <div className="text-xs text-muted-foreground">匯款入帳</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/zero-risk-illustration.jpg" 
                alt="PV點數機制" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Rewards */}
      <section className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">團隊獎勵機制</h2>
            <p className="text-xl text-muted-foreground">建立您的推薦網絡，獲得被動收入</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/team-network-illustration.jpg" 
                alt="團隊網絡" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">直屬推薦獎勵</h3>
              <p className="text-lg text-muted-foreground mb-8">
                當您推薦他人成為經銷商時，被推薦人會成為您的「直屬推薦」。只要他們進行銷售，您就能獲得一定百分比的PV點數。
              </p>

              <div className="space-y-4">
                <Card className="border-2 border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold">第一層：直屬推薦</span>
                      <span className="text-2xl font-bold text-primary">50%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">您直接推薦的人銷售時，您獲得 50% 回饋</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold">第二層：間接推薦</span>
                      <span className="text-2xl font-bold text-primary">10%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">您的推薦人再推薦的人銷售時，您獲得 10% 回饋</p>
                  </CardContent>
                </Card>
                <p className="text-sm text-muted-foreground text-center">※以上回饋百分比僅供參考詳情請見合約書※</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">團隊獎勵計算範例</h3>
                <p className="text-center text-muted-foreground mb-8">
                  假設您推薦了 B，B 推薦了 C 和 D，以下是您的收入計算
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2">
                        <th className="text-left py-3 px-4">來源</th>
                        <th className="text-left py-3 px-4">關係</th>
                        <th className="text-right py-3 px-4">獲得PV值</th>
                        <th className="text-right py-3 px-4">獎勵比例</th>
                        <th className="text-right py-3 px-4">您獲得</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">B 的分潤點數</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">直屬</span></td>
                        <td className="text-right py-3 px-4">2,000 點</td>
                        <td className="text-right py-3 px-4">50%</td>
                        <td className="text-right py-3 px-4 font-bold text-primary">1000 點</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">C 的分潤點數</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">間接</span></td>
                        <td className="text-right py-3 px-4">1,500 點</td>
                        <td className="text-right py-3 px-4">10%</td>
                        <td className="text-right py-3 px-4 font-bold text-primary">150 點</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">D 的分潤點數</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">間接</span></td>
                        <td className="text-right py-3 px-4">1,000 點</td>
                        <td className="text-right py-3 px-4">10%</td>
                        <td className="text-right py-3 px-4 font-bold text-primary">100 點</td>
                      </tr>
                      <tr className="bg-primary/5 font-bold">
                        <td colSpan={4} className="py-3 px-4 text-right">總計</td>
                        <td className="text-right py-3 px-4 text-xl text-primary">1,250 點</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground text-center">※以上回饋百分比僅供參考詳情請見合約書※</p>
          </div>
        </div>
      </section>

      {/* Upgrade System */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">經銷商升級機制</h2>
            <p className="text-xl text-muted-foreground">達成條件，解鎖更高回饋</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#B87333' + '20' }}>
                  <Award className="h-8 w-8" style={{ color: '#B87333' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4">經銷商</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">直屬推薦獎勵</span>
                    <span className="font-bold">50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">間接推薦獎勵</span>
                    <span className="font-bold">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">區經銷商</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">直屬推薦獎勵</span>
                    <span className="font-bold text-primary">55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">間接推薦獎勵</span>
                    <span className="font-bold text-primary">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                <div className="text-6xl font-bold text-muted-foreground/30 mb-4">...</div>
                <p className="text-sm text-muted-foreground">更多等級</p>
                <p className="text-xs text-muted-foreground mt-2">持續升級解鎖</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">總代理</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">直屬推薦獎勵</span>
                    <span className="font-bold text-primary">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">間接推薦獎勵</span>
                    <span className="font-bold text-primary">30%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Build Team */}
      <section className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">您還可以</h2>
            <p className="text-xl text-muted-foreground">三種方式，輕鬆組建您的收入網絡</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">主動推薦</h3>
                <p className="text-muted-foreground mb-4">
                  邀請朋友、家人、同事等成為經銷商，分享您的推薦連結或邀請碼。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>複製推薦連結</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>分享給想邀請的人</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>自動成為直屬推薦</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">建立社群</h3>
                <p className="text-muted-foreground mb-4">
                  在 Facebook、Line 等平台建立團購群組，邀請成員加入推薦團隊。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>建立團購優惠群</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>分享優質商品</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>獲得 PV 點數和團隊獎勵</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">被動推薦</h3>
                <p className="text-muted-foreground mb-4">
                  分享商品或推廣資訊，讓他人自行決定成為經銷商並加入您的團隊。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>分享優質內容</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>他人主動加入</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>自動建立推薦關係</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/success-background.jpg" 
            alt="成功背景" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">開始您的收入之旅</h2>
            <p className="text-xl text-muted-foreground mb-8">
              無須投資、無須庫存、無須物流。只需分享，就能賺取被動收入。立即加入，開啟您的經銷商生涯！
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="text-lg px-8">
                  立即申請成為經銷商
                </Button>
              </Link>
              <Link href="/contract">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  查看詳細說明書
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
