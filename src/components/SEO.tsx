import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  jsonLd?: object | object[];
  hreflang?: Array<{ lang: string; url: string }>;
}

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.png',
  ogUrl,
  twitterTitle,
  twitterDescription,
  jsonLd,
  hreflang,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);

    // Open Graph
    updateMeta('og:type', 'website', true);
    updateMeta('og:title', ogTitle || title, true);
    updateMeta('og:description', ogDescription || description, true);
    updateMeta('og:image', ogImage, true);
    if (ogUrl) updateMeta('og:url', ogUrl, true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', twitterTitle || ogTitle || title);
    updateMeta('twitter:description', twitterDescription || ogDescription || description);
    updateMeta('twitter:image', ogImage);

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Hreflang links
    if (hreflang) {
      // Remove existing hreflang links
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
      
      // Add new hreflang links
      hreflang.forEach(({ lang, url }) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        link.setAttribute('href', url);
        document.head.appendChild(link);
      });
    }

    // JSON-LD (@graph-based or array)
    if (jsonLd) {
      // Remove old JSON-LD scripts (except Organization and WebSite from index.html)
      document.querySelectorAll('script[type="application/ld+json"][data-dynamic="true"]').forEach(el => el.remove());
      
      // Support both @graph-based bundles and arrays
      const isGraphBased = jsonLd && typeof jsonLd === 'object' && '@graph' in jsonLd;
      
      if (isGraphBased) {
        // Single @graph bundle (Best Practice 2025)
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-dynamic', 'true');
        script.text = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      } else {
        // Legacy: multiple separate schemas
        const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
        schemas.forEach((schema) => {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.setAttribute('data-dynamic', 'true');
          script.text = JSON.stringify(schema);
          document.head.appendChild(script);
        });
      }
    }

    // Cleanup function
    return () => {
      // Remove dynamic JSON-LD on unmount
      if (jsonLd) {
        document.querySelectorAll('script[type="application/ld+json"][data-dynamic="true"]').forEach(el => el.remove());
      }
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, jsonLd, hreflang]);

  return null; // This component doesn't render anything
}
