import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FacebookPixelService {
  private initialized: Set<string> = new Set();

  init(pixelIds: string[]): void {
    if (!Array.isArray(pixelIds) || typeof window === 'undefined') return;

    this.injectScript(); // inject once

    pixelIds.forEach(id => {
      if (!this.initialized.has(id)) {
        (window as any).fbq('init', id);
        (window as any).fbq('track', 'PageView');
        this.initialized.add(id);
      }
    });
  }

  private injectScript(): void {
    if ((window as any).fbq) return;

    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src='https://connect.facebook.net/en_US/fbevents.js';
      s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script');
    `;
    document.head.appendChild(script);
  }

  track(event: string, params?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', event, params || {});
    }
  }
}
