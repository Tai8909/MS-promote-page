# 平台介紹網站 - 供應商與經銷商招募

一個專為線上平台設計的介紹網站，用於招募供應商和經銷商。網站採用現代化設計，清晰展示平台的核心優勢、運作流程和加入條件。

![網站預覽](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38bdf8)

## 📋 目錄

- [專案簡介](#專案簡介)
- [功能特色](#功能特色)
- [技術棧](#技術棧)
- [快速開始](#快速開始)
- [專案結構](#專案結構)
- [開發指南](#開發指南)
- [部署](#部署)
- [Google Analytics 4 整合](#google-analytics-4-整合)
- [授權](#授權)

## 🎯 專案簡介

本網站旨在為線上平台提供專業的供應商和經銷商招募介面。網站包含三個主要頁面，分別介紹平台的核心價值、供應商方案和經銷商計畫。透過清晰的視覺設計和詳細的說明，幫助潛在合作夥伴快速了解平台優勢並做出加入決策。

### 設計理念

網站採用**活力年輕**的設計風格，使用粉紫色和橙色作為主色調，營造出現代、專業且充滿活力的品牌形象。所有視覺元素都經過精心設計，確保在各種裝置上都能提供最佳的使用體驗。

## ✨ 功能特色

### 首頁
- **雙入口設計**：清晰區分供應商和經銷商入口
- **核心價值展示**：透過圖示和文字展示平台的三大核心優勢
- **數據展示**：展示平台的規模和成就（供應商數量、經銷商數量、交易額等）
- **行動呼籲**：明確的 CTA 按鈕引導訪客採取行動

### 供應商專區
- **零成本上架說明**：詳細解釋無上架費、成交後 15% 手續費的商業模式
- **專屬品牌頁面介紹**：展示供應商可獲得的 Mini-Website 功能
- **EDM 行銷工具**：說明平台提供的行銷支援
- **消費者分潤機制**：透過視覺化範例說明分潤計算方式
- **完整運作流程**：五步驟流程圖，從申請到結算

### 經銷商專區
- **零門檻加入說明**：強調任何消費者都可申請
- **專屬工具介紹**：展示專屬網址、推薦碼和 QRCode 的使用方式
- **PV 點數機制**：詳細說明點數累積和現金轉換流程
- **團隊獎勵機制**：透過表格展示直屬和間接推薦的獎勵計算
- **升級機制**：說明不同等級經銷商的權益差異
- **團隊建立指南**：提供三種建立推薦團隊的方式

## 🛠 技術棧

### 前端框架
- **React 19.1.1** - 使用最新版本的 React，支援 Compiler 和 Server Components
- **TypeScript 5.7.3** - 提供完整的型別檢查和開發體驗
- **Vite 7.1.9** - 快速的建置工具和開發伺服器

### UI 框架與樣式
- **Tailwind CSS 4.0.0** - 使用最新版本的 Tailwind，支援 OKLCH 色彩空間
- **shadcn/ui** - 高品質的 React 元件庫
- **Lucide React** - 現代化的圖示庫

### 路由
- **Wouter** - 輕量級的 React 路由解決方案

### 字體
- **Noto Sans TC** - Google Fonts 提供的繁體中文字體

## 🚀 快速開始

### 系統需求

- **Node.js**: 18.0 或更高版本
- **pnpm**: 8.0 或更高版本（推薦）

### 安裝步驟

1. **克隆專案**

```bash
git clone https://github.com/YOUR_USERNAME/platform-intro-site.git
cd platform-intro-site
```

2. **安裝依賴**

```bash
pnpm install
```

3. **啟動開發伺服器**

```bash
pnpm dev
```

開發伺服器會在 `http://localhost:3000` 啟動。

4. **建置生產版本**

```bash
pnpm build
```

建置後的檔案會輸出到 `dist/public` 目錄。

5. **預覽生產版本**

```bash
pnpm preview
```

## 📁 專案結構

```
platform_intro_site/
├── client/                    # 前端程式碼
│   ├── public/               # 靜態資源
│   │   ├── _redirects        # SPA 路由重定向配置
│   │   ├── supplier-hero.jpg # 供應商主視覺圖
│   │   ├── distributor-hero.jpg # 經銷商主視覺圖
│   │   └── ...               # 其他圖片資源
│   ├── src/
│   │   ├── components/       # React 元件
│   │   │   ├── ui/          # shadcn/ui 元件
│   │   │   └── ErrorBoundary.tsx
│   │   ├── contexts/         # React Context
│   │   │   └── ThemeContext.tsx
│   │   ├── pages/           # 頁面元件
│   │   │   ├── Home.tsx     # 首頁
│   │   │   ├── Supplier.tsx # 供應商專區
│   │   │   ├── Distributor.tsx # 經銷商專區
│   │   │   └── NotFound.tsx # 404 頁面
│   │   ├── App.tsx          # 主應用元件
│   │   ├── main.tsx         # 應用入口
│   │   ├── index.css        # 全域樣式
│   │   └── const.ts         # 常數定義
│   └── index.html           # HTML 模板
├── shared/                   # 共用程式碼
├── server/                   # 伺服器程式碼（靜態專案為空）
├── dist/                     # 建置輸出目錄
├── package.json             # 專案配置
├── tsconfig.json            # TypeScript 配置
├── vite.config.ts           # Vite 配置
├── tailwind.config.ts       # Tailwind CSS 配置
└── README.md                # 專案說明文件
```

## 💻 開發指南

### 新增頁面

1. 在 `client/src/pages/` 目錄下建立新的頁面元件
2. 在 `client/src/App.tsx` 中添加路由配置

```tsx
import NewPage from "./pages/NewPage";

// 在 Router 元件中添加路由
<Route path={"/new-page"} component={NewPage} />
```

### 修改主題色彩

主題色彩定義在 `client/src/index.css` 中，使用 CSS 變數和 OKLCH 色彩空間：

```css
@theme {
  --color-primary: oklch(0.65 0.25 330);
  --color-secondary: oklch(0.70 0.20 25);
  /* ... 其他色彩定義 */
}
```

### 新增元件

使用 shadcn/ui CLI 新增元件：

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
```

### 程式碼格式化

專案使用 Prettier 進行程式碼格式化：

```bash
pnpm format
```

## 🚢 部署

### 部署到 Manus Space

1. 在專案根目錄執行建置：
```bash
pnpm build
```

2. 在管理介面中點擊「Publish」按鈕

3. 網站會自動部署到 `https://your-project.manus.space`

### 部署到 Vercel

1. 安裝 Vercel CLI：
```bash
npm i -g vercel
```

2. 部署專案：
```bash
vercel
```

### 部署到 Netlify

1. 在 Netlify 中連接 GitHub 倉庫

2. 設定建置配置：
   - Build command: `pnpm build`
   - Publish directory: `dist/public`

3. 點擊「Deploy」

### 部署到 GitHub Pages

1. 修改 `vite.config.ts`，添加 `base` 配置：
```ts
export default defineConfig({
  base: '/platform-intro-site/',
  // ... 其他配置
});
```

2. 建置並部署：
```bash
pnpm build
pnpm dlx gh-pages -d dist/public
```

## 📊 Google Analytics 4 整合

本專案已整合 Google Analytics 4 (GA4) 追蹤功能，可以追蹤頁面瀏覽、使用者行為和自訂事件。

### 設定步驟

1. **取得 GA4 Measurement ID**
   - 前往 [Google Analytics](https://analytics.google.com/)
   - 點擊「管理」→「資料串流」
   - 複製「評估 ID」（格式: `G-XXXXXXXXXX`）

2. **設定環境變數**
   - 開啟右側管理面板
   - 進入「Settings」→「Secrets」
   - 新增秘密：
     - Key: `VITE_GA_MEASUREMENT_ID`
     - Value: 您的 GA4 Measurement ID

3. **驗證設定**
   - 重新啟動開發伺服器
   - 開啟瀏覽器開發者工具（F12）
   - 查看 Network 標籤中是否有 `google-analytics.com` 的請求

### 追蹤功能

- ✅ **頁面瀏覽**：每次路由切換時自動追蹤
- ✅ **自訂事件**：支援按鈕點擊、表單提交等事件追蹤
- ✅ **使用者行為**：追蹤使用者互動和轉換

詳細說明請參考 [GA4_SETUP.md](./GA4_SETUP.md)。

## 🎨 自訂配置

### 修改網站標題和 Logo

在 `client/src/const.ts` 中修改：

```typescript
export const APP_TITLE = "您的平台名稱";
export const APP_LOGO = "您的 Logo URL";
```

### 修改圖片資源

將新的圖片放置在 `client/public/` 目錄下，並在相應的頁面元件中更新圖片路徑。

### 修改文案內容

所有文案都直接寫在頁面元件中，您可以根據需求修改：
- 首頁：`client/src/pages/Home.tsx`
- 供應商專區：`client/src/pages/Supplier.tsx`
- 經銷商專區：`client/src/pages/Distributor.tsx`

## 📝 授權

本專案採用 MIT 授權。

---

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request 來改進這個專案。

## 📧 聯絡方式

如有任何問題或建議，請透過以下方式聯絡：

- 網站：[https://www.888store.com.tw](https://www.888store.com.tw)
- Email：your-email@example.com

---

**由 Manus AI 協助開發** | 最後更新：2025-11-27
