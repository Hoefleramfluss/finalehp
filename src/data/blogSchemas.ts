// Google Best Practice 2025: @graph-based Schema Bundle (Enhanced)
// Complete interconnected schema with Organization, WebSite, SoftwareApplication
export const blogJsonLdSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization
    {
      "@type": "Organization",
      "@id": "https://www.voxon.app/#organization",
      "name": "Voxon.ai",
      "url": "https://www.voxon.app/",
      "logo": { 
        "@type": "ImageObject", 
        "url": "https://www.voxon.app/voxon-logo.png" 
      },
      "sameAs": []
    },
    
    // 2. WebSite
    {
      "@type": "WebSite",
      "@id": "https://www.voxon.app/#website",
      "url": "https://www.voxon.app/",
      "name": "Voxon.ai",
      "publisher": { "@id": "https://www.voxon.app/#organization" },
      "inLanguage": "de"
    },
    
    // 3. SoftwareApplication (Voice Agent)
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.voxon.app/#voice-agent",
      "name": "Voxon Voice Agent",
      "operatingSystem": "Web",
      "applicationCategory": "BusinessApplication",
      "url": "https://www.voxon.app/",
      "inLanguage": "de",
      "featureList": [
        "Automatische Terminbuchung 24/7",
        "Inbound & Outbound Calls",
        "Mehrsprachigkeit/Dialekte",
        "Integrationen: Kalender, CRM, Reservierung",
        "DSGVO-konform, EU-Hosting",
        "Minutenbasierte Abrechnung"
      ]
    },
    
    // 4. WebPage (Speakable + isPartOf)
    {
      "@type": "WebPage",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#webpage",
      "url": "https://www.voxon.app/blog/voice-ai-trends-2025",
      "name": "Voice AI Trends 2025 – Warum Unternehmen jetzt umdenken müssen",
      "isPartOf": { "@id": "https://www.voxon.app/#website" },
      "breadcrumb": { "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#breadcrumb" },
      "inLanguage": "de",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1.page-title",
          "p.lead",
          "section.key-takeaway p:first-of-type"
        ]
      }
    },
    
    // 5. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.voxon.app/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.voxon.app/blog" },
        { "@type": "ListItem", "position": 3, "name": "Voice AI Trends 2025", "item": "https://www.voxon.app/blog/voice-ai-trends-2025" }
      ]
    },
    
    // 6. Article (Enhanced with keywords, wordCount, mentions)
    {
      "@type": "Article",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#article",
      "mainEntityOfPage": { "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#webpage" },
      "isPartOf": { "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#webpage" },
      "headline": "Voice AI Trends 2025 – Warum Unternehmen jetzt umdenken müssen",
      "description": "Mehrsprachige KI-Stimmen übernehmen 2025 das Telefon. Die wichtigsten Trends, Technologien und Chancen für Unternehmen im DACH-Raum.",
      "image": "https://www.voxon.app/og-image.png",
      "author": {
        "@type": "Person",
        "@id": "https://www.voxon.app/#author",
        "name": "Christopher Marik",
        "url": "https://www.voxon.app",
        "sameAs": []
      },
      "publisher": { "@id": "https://www.voxon.app/#organization" },
      "about": { "@id": "https://www.voxon.app/#voice-agent" },
      "mentions": [
        { "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#howto" },
        { "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#faq" }
      ],
      "keywords": ["voice ai", "voice agent", "ki telefonassistent", "automatische terminbuchung", "dsgvo", "mehrsprachig"],
      "articleSection": "Technology",
      "wordCount": 1500,
      "datePublished": "2025-10-08",
      "dateModified": "2025-10-08",
      "inLanguage": "de"
    },
    
    // 7. HowTo (Simplified, linked to SoftwareApplication)
    {
      "@type": "HowTo",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#howto",
      "name": "So startest du in 48 Stunden mit einem Voice-Agent",
      "description": "Schritt-für-Schritt-Anleitung für die schnelle, DSGVO-konforme Einführung eines KI-Voice-Agents mit Terminbuchung.",
      "totalTime": "P2D",
      "isPartOf": { "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#webpage" },
      "about": { "@id": "https://www.voxon.app/#voice-agent" },
      "inLanguage": "de",
      "supply": [
        { "@type": "HowToSupply", "name": "Kalender/CRM-Zugang" },
        { "@type": "HowToSupply", "name": "Rufnummern-Weiterleitung" },
        { "@type": "HowToSupply", "name": "Datenschutz-Freigaben (AV-Vertrag)" }
      ],
      "tool": [
        { "@type": "HowToTool", "name": "Voxon.ai Voice-Agent" },
        { "@type": "HowToTool", "name": "Telefonanlage / SIP-Weiterleitung" }
      ],
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Demo buchen & Ziele klären", "text": "Prioritäten definieren (Erreichbarkeit, No-Shows, Budget) und technische Voraussetzungen prüfen." },
        { "@type": "HowToStep", "position": 2, "name": "Integrationen verbinden", "text": "Kalender/Reservierung/CRM verknüpfen: Google/Outlook/ICS, Resmio, Doctolib, HubSpot, Pipedrive." },
        { "@type": "HowToStep", "position": 3, "name": "Dialog-Flows aktivieren", "text": "Standard-Flows für Buchen, Verschieben, Absagen, Rückrufbitten und Erinnerungen einschalten." },
        { "@type": "HowToStep", "position": 4, "name": "Regeln & Dialekte feinjustieren", "text": "Küchenzeiten, Praxis-Sonderfälle, Outbound-Kampagnen; Stimme und Tonalität festlegen." },
        { "@type": "HowToStep", "position": 5, "name": "Soft-Launch & Monitoring", "text": "Testanrufe, KPI-Checks (Minuten, Erfolgsquote, Übergaben) und wöchentliches Feintuning." }
      ],
      "publisher": { "@id": "https://www.voxon.app/#organization" }
    },
    
    // 8. FAQPage (Simplified)
    {
      "@type": "FAQPage",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#faq",
      "isPartOf": { "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#webpage" },
      "inLanguage": "de",
      "mainEntity": [
        { "@type": "Question", "name": "Was ist ein Voice Agent?", "acceptedAnswer": { "@type": "Answer", "text": "Ein Voice Agent ist eine KI-gestützte Telefonstimme, die natürliche Gespräche führt, Termine bucht und Informationen liefert." } },
        { "@type": "Question", "name": "Wie funktioniert Voxon.ai?", "acceptedAnswer": { "@type": "Answer", "text": "Der Voice-Agent verbindet sich mit Kalender- oder CRM-Systemen, versteht Sprache per KI und bucht freie Termine automatisch." } },
        { "@type": "Question", "name": "Ist Voice AI DSGVO-konform?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Voxon.ai verarbeitet alle Daten auf europäischen Servern und erfüllt die DSGVO vollständig." } },
        { "@type": "Question", "name": "Welche Sprachen unterstützt der Voice Agent?", "acceptedAnswer": { "@type": "Answer", "text": "Deutsch, Englisch, Italienisch und wahlweise Dialekte – automatisch erkennend." } },
        { "@type": "Question", "name": "Wie starte ich mit Voxon.ai?", "acceptedAnswer": { "@type": "Answer", "text": "Demo buchen, Integrationen wählen, Standard-Flows aktivieren – in der Regel in unter 48 Stunden live." } }
      ]
    }
  ]
};
