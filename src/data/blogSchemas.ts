export const blogJsonLdSchemas = [
  // Article Schema
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Voice AI Trends 2025 – Warum Unternehmen jetzt umdenken müssen",
    "description": "Mehrsprachige KI-Stimmen übernehmen 2025 das Telefon. Die wichtigsten Trends, Technologien und Chancen für Unternehmen im DACH-Raum.",
    "image": "https://www.voxon.app/og-image.png",
    "author": {
      "@type": "Person",
      "name": "Christopher Marik",
      "url": "https://www.voxon.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Voxon.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.voxon.app/voxon-logo.png"
      }
    },
    "datePublished": "2025-10-08",
    "dateModified": "2025-10-08",
    "mainEntityOfPage": "https://www.voxon.app/blog/voice-ai-trends-2025"
  },
  // Speakable Schema
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#webpage",
    "name": "Voice AI Trends 2025 – Warum Unternehmen jetzt umdenken müssen",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1.page-title",
        "p.lead",
        "section.key-takeaway p"
      ]
    },
    "url": "https://www.voxon.app/blog/voice-ai-trends-2025",
    "inLanguage": "de"
  },
  // HowTo Schema
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#howto",
    "name": "So startest du in 48 Stunden mit einem Voice-Agent",
    "description": "Schritt-für-Schritt-Anleitung für die schnelle, DSGVO-konforme Einführung eines KI-Voice-Agents mit Terminbuchung.",
    "totalTime": "P2D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "variabel"
    },
    "supply": [
      {"@type": "HowToSupply", "name": "Kalender/CRM-Zugang"},
      {"@type": "HowToSupply", "name": "Rufnummern-Weiterleitung"},
      {"@type": "HowToSupply", "name": "Datenschutz-Freigaben (AV-Vertrag)"}
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Demo buchen & Ziele klären",
        "text": "Prioritäten definieren (Erreichbarkeit, No-Shows, Budget) und technische Voraussetzungen prüfen."
      },
      {
        "@type": "HowToStep",
        "name": "Integrationen verbinden",
        "text": "Kalender/Reservierung/CRM verknüpfen: Google/Outlook/ICS, Resmio, Doctolib, HubSpot, Pipedrive."
      },
      {
        "@type": "HowToStep",
        "name": "Dialog-Flows aktivieren",
        "text": "Standard-Flows für Buchen, Verschieben, Absagen, Rückrufbitten und Erinnerungen einschalten."
      },
      {
        "@type": "HowToStep",
        "name": "Regeln & Dialekte feinjustieren",
        "text": "Küchenzeiten, Praxis-Sonderfälle, Outbound-Kampagnen; Stimme und Tonalität festlegen."
      },
      {
        "@type": "HowToStep",
        "name": "Soft-Launch & Monitoring",
        "text": "Testanrufe, KPI-Checks (Minuten, Erfolgsquote, Übergaben) und wöchentliches Feintuning."
      }
    ],
    "tool": [
      {"@type": "HowToTool", "name": "Voxon.ai Voice-Agent"},
      {"@type": "HowToTool", "name": "Telefonanlage / SIP-Weiterleitung"}
    ],
    "inLanguage": "de",
    "publisher": {
      "@type": "Organization",
      "name": "Voxon.ai",
      "url": "https://www.voxon.app/"
    },
    "mainEntityOfPage": "https://www.voxon.app/blog/voice-ai-trends-2025"
  },
  // FAQPage Schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Was ist ein Voice Agent?", "acceptedAnswer": {"@type": "Answer", "text": "Ein Voice Agent ist eine KI-gestützte Telefonstimme, die natürliche Gespräche führt, Termine bucht und Informationen liefert."}},
      {"@type": "Question", "name": "Wie funktioniert Voxon.ai?", "acceptedAnswer": {"@type": "Answer", "text": "Der Voice-Agent verbindet sich mit Kalender- oder CRM-Systemen, versteht Sprache per KI und bucht freie Termine automatisch."}},
      {"@type": "Question", "name": "Ist Voice AI DSGVO-konform?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Voxon.ai verarbeitet alle Daten auf europäischen Servern und erfüllt die DSGVO vollständig."}},
      {"@type": "Question", "name": "Welche Sprachen unterstützt der Voice Agent?", "acceptedAnswer": {"@type": "Answer", "text": "Deutsch, Englisch, Italienisch und wahlweise Dialekte – automatisch erkennend."}},
      {"@type": "Question", "name": "Wie starte ich mit Voxon.ai?", "acceptedAnswer": {"@type": "Answer", "text": "Einfach Demo buchen – innerhalb von 48 Stunden ist dein Voice-Agent betriebsbereit."}},
      {"@type": "Question", "name": "Wie starte ich schnell mit Voice AI?", "acceptedAnswer": {"@type": "Answer", "text": "Buche eine Demo, verbinde Kalender/CRM, aktiviere Standard-Flows und teste mit Soft-Launch. In der Regel bist du in unter 48 Stunden live – DSGVO-konform und mit messbarer Entlastung im Telefonalltag."}},
      {"@type": "Question", "name": "Kann der Voice-Agent mehrere Sprachen?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Der Agent erkennt die Sprache des Anrufers und wechselt auf Wunsch automatisch – z. B. Deutsch/Englisch/Italienisch. Dialektoptionen sind verfügbar."}}
    ]
  },
  // Breadcrumb
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.voxon.app/"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.voxon.app/blog"},
      {"@type": "ListItem", "position": 3, "name": "Voice AI Trends 2025", "item": "https://www.voxon.app/blog/voice-ai-trends-2025"}
    ]
  }
];
