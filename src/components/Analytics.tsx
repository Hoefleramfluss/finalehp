import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.log('Google Analytics: Measurement ID nicht konfiguriert');
      return;
    }

    // Google Analytics Script laden
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // GA4 initialisieren
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', '${measurementId}', {
        'send_page_view': true,
        'cookie_flags': 'SameSite=None;Secure',
        'anonymize_ip': true
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
}

// Event-Tracking Helper-Funktion
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};
