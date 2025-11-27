import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface GoogleAnalyticsProps {
  measurementId: string;
}

/**
 * Google Analytics 4 元件
 * 
 * 使用方式：
 * 1. 在 App.tsx 中引入此元件
 * 2. 傳入您的 GA4 Measurement ID (格式: G-XXXXXXXXXX)
 * 
 * 範例：
 * <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const [location] = useLocation();

  useEffect(() => {
    // 載入 Google Analytics 腳本
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics: 請設定有效的 Measurement ID');
      return;
    }

    // 檢查是否已載入
    if (typeof window.gtag !== 'undefined') {
      return;
    }

    // 載入 gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // 初始化 gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: location,
    });
  }, [measurementId]);

  // 追蹤頁面瀏覽
  useEffect(() => {
    if (window.gtag && measurementId && measurementId !== 'G-XXXXXXXXXX') {
      window.gtag('config', measurementId, {
        page_path: location,
      });
    }
  }, [location, measurementId]);

  return null;
}

// TypeScript 類型定義
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * 自訂事件追蹤函數
 * 
 * 使用方式：
 * import { trackEvent } from '@/components/GoogleAnalytics';
 * 
 * trackEvent('button_click', {
 *   button_name: '立即加入',
 *   page: '首頁'
 * });
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * 追蹤按鈕點擊
 */
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    page: location || window.location.pathname,
  });
}

/**
 * 追蹤表單提交
 */
export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
}

/**
 * 追蹤外部連結點擊
 */
export function trackOutboundLink(url: string, linkText?: string) {
  trackEvent('outbound_link_click', {
    url: url,
    link_text: linkText,
  });
}
