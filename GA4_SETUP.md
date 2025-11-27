# Google Analytics 4 整合說明

本專案已整合 Google Analytics 4 (GA4) 追蹤功能，可以追蹤頁面瀏覽、使用者行為和自訂事件。

## 📋 設定步驟

### 1. 取得 GA4 Measurement ID

1. 前往 [Google Analytics](https://analytics.google.com/)
2. 登入您的 Google 帳號
3. 點擊左下角的「管理」(齒輪圖示)
4. 在「資源」欄位中，點擊「資料串流」
5. 選擇您的網站串流（或建立新的串流）
6. 複製「評估 ID」(格式: `G-XXXXXXXXXX`)

### 2. 設定環境變數

**方法一：透過管理介面設定（推薦）**

1. 開啟右側管理面板
2. 進入「Settings」→「Secrets」
3. 點擊「Add Secret」
4. 輸入以下資訊：
   - Key: `VITE_GA_MEASUREMENT_ID`
   - Value: 您的 GA4 Measurement ID (例如: `G-ABC123XYZ`)
5. 儲存後重新啟動開發伺服器

**方法二：本地開發設定**

在專案根目錄建立 `.env` 檔案：

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**注意**：`.env` 檔案不會被提交到 Git，請確保在部署時也設定此環境變數。

### 3. 驗證設定

1. 啟動開發伺服器：`pnpm dev`
2. 開啟瀏覽器的開發者工具 (F12)
3. 切換到「Network」(網路) 標籤
4. 重新載入頁面
5. 搜尋 `google-analytics.com` 或 `gtag`
6. 如果看到相關請求，表示 GA4 已成功載入

或者使用 [Google Tag Assistant](https://tagassistant.google.com/) 擴充功能驗證。

## 📊 追蹤功能

### 自動追蹤

- ✅ **頁面瀏覽**：每次路由切換時自動追蹤
- ✅ **頁面標題**：自動記錄頁面標題
- ✅ **來源/媒介**：自動追蹤流量來源

### 自訂事件追蹤

您可以在程式碼中使用以下函數追蹤自訂事件：

```typescript
import { trackEvent, trackButtonClick, trackFormSubmit } from '@/components/GoogleAnalytics';

// 追蹤按鈕點擊
trackButtonClick('立即加入', '首頁');

// 追蹤表單提交
trackFormSubmit('供應商申請表', true);

// 追蹤自訂事件
trackEvent('video_play', {
  video_title: '平台介紹影片',
  video_duration: 120
});
```

### 建議追蹤的事件

**供應商專區：**
- 點擊「開始銷售」按鈕
- 點擊「了解更多」按鈕
- 查看分潤計算範例
- 下載詳細說明書

**經銷商專區：**
- 點擊「成為經銷商」按鈕
- 查看團隊獎勵機制
- 查看升級條件
- 下載申請表單

**首頁：**
- 點擊「我是供應商」
- 點擊「我是經銷商」
- 滾動到特定區域

## 🔍 在 GA4 中查看數據

1. 前往 [Google Analytics](https://analytics.google.com/)
2. 選擇您的資源
3. 查看以下報表：
   - **即時**：查看當前訪客活動
   - **生命週期** → **參與**：查看頁面瀏覽和事件
   - **生命週期** → **流量開發**：查看流量來源
   - **使用者** → **技術**：查看裝置和瀏覽器資訊

## 📈 進階設定

### 設定轉換事件

1. 在 GA4 中，前往「管理」→「事件」
2. 點擊「建立事件」
3. 設定條件（例如：`event_name` = `form_submit` 且 `success` = `true`）
4. 標記為「轉換」

### 設定目標對象

1. 前往「管理」→「目標對象」
2. 建立新目標對象
3. 設定條件（例如：瀏覽過供應商頁面的使用者）
4. 用於再行銷或分析

## ⚠️ 注意事項

- GA4 數據可能需要 24-48 小時才會完整顯示
- 即時報表通常在 5-10 分鐘內更新
- 請確保遵守 GDPR 和其他隱私法規
- 建議在網站上加入隱私權政策和 Cookie 同意橫幅

## 🔒 隱私權考量

如果您的網站面向歐盟用戶，建議：

1. 加入 Cookie 同意橫幅
2. 提供選擇退出 GA 追蹤的選項
3. 在隱私權政策中說明數據收集方式
4. 考慮使用 IP 匿名化功能

## 📚 相關資源

- [GA4 官方文件](https://support.google.com/analytics/answer/10089681)
- [gtag.js 開發者指南](https://developers.google.com/analytics/devguides/collection/gtagjs)
- [GA4 事件參考](https://developers.google.com/analytics/devguides/collection/ga4/events)
