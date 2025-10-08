// Google Best Practice 2025: @graph-based Schema Bundle
// All schemas interconnected via @id for maximum SEO impact
export const blogJsonLdSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. WebPage (Speakable + isPartOf)
    {
      "@type": "WebPage",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#webpage",
      "url": "https://www.voxon.app/blog/voice-ai-trends-2025",
      "name": "Voice AI Trends 2025 – Warum Unternehmen jetzt umdenken müssen",
      "inLanguage": "de",
      "isPartOf": {
        "@id": "https://www.voxon.app/blog#website"
      },
      "about": {
        "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#article"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1.page-title",
          "p.lead",
          "section.key-takeaway p:first-of-type"
        ]
      },
      "breadcrumb": {
        "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#breadcrumb"
      }
    },
    
    // 2. Article (mainEntity)
    {
      "@type": "Article",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#article",
      "headline": "Voice AI Trends 2025 – Warum Unternehmen jetzt umdenken müssen",
      "description": "Mehrsprachige KI-Stimmen übernehmen 2025 das Telefon. Die wichtigsten Trends, Technologien und Chancen für Unternehmen im DACH-Raum.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.voxon.app/og-image.png",
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Person",
        "@id": "https://www.voxon.app/#person",
        "name": "Christopher Marik",
        "url": "https://www.voxon.app"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.voxon.app/#organization",
        "name": "Voxon.ai",
        "url": "https://www.voxon.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.voxon.app/voxon-logo.png"
        }
      },
      "datePublished": "2025-10-08T21:00:00+02:00",
      "dateModified": "2025-10-08T23:42:00+02:00",
      "mainEntityOfPage": {
        "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#webpage"
      },
      "inLanguage": "de",
      "about": [
        {
          "@type": "Thing",
          "name": "Voice AI",
          "sameAs": "https://en.wikipedia.org/wiki/Voice_user_interface"
        },
        {
          "@type": "Thing",
          "name": "Künstliche Intelligenz",
          "sameAs": "https://de.wikipedia.org/wiki/K%C3%BCnstliche_Intelligenz"
        }
      ],
      "mentions": [
        {
          "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#howto"
        },
        {
          "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#faqpage"
        }
      ],
      "keywords": "voice ai, voice agent, ki terminbuchung, mehrsprachige ki, voice search, sprachassistent, ki telefonbot, dsgvo voice ai, voice automation",
      "articleSection": "Technology",
      "wordCount": 1500
    },
    
    // 3. HowTo (connected via about)
    {
      "@type": "HowTo",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#howto",
      "name": "So startest du in 48 Stunden mit einem Voice-Agent",
      "description": "Schritt-für-Schritt-Anleitung für die schnelle, DSGVO-konforme Einführung eines KI-Voice-Agents mit Terminbuchung.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.voxon.app/og-image.png"
      },
      "totalTime": "P2D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": "variabel"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Kalender/CRM-Zugang"
        },
        {
          "@type": "HowToSupply",
          "name": "Rufnummern-Weiterleitung"
        },
        {
          "@type": "HowToSupply",
          "name": "Datenschutz-Freigaben (AV-Vertrag)"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Voxon.ai Voice-Agent",
          "url": "https://www.voxon.app/"
        },
        {
          "@type": "HowToTool",
          "name": "Telefonanlage / SIP-Weiterleitung"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Demo buchen & Ziele klären",
          "text": "Prioritäten definieren (Erreichbarkeit, No-Shows, Budget) und technische Voraussetzungen prüfen.",
          "url": "https://www.voxon.app/#contact"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Integrationen verbinden",
          "text": "Kalender/Reservierung/CRM verknüpfen: Google/Outlook/ICS, Resmio, Doctolib, HubSpot, Pipedrive.",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "text": "Google Calendar, Outlook/Exchange oder iCal/ICS verbinden"
            },
            {
              "@type": "HowToDirection",
              "text": "CRM-System (HubSpot, Pipedrive) oder Reservierungstool (Resmio, Doctolib) verknüpfen"
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Dialog-Flows aktivieren",
          "text": "Standard-Flows für Buchen, Verschieben, Absagen, Rückrufbitten und Erinnerungen einschalten."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Regeln & Dialekte feinjustieren",
          "text": "Küchenzeiten, Praxis-Sonderfälle, Outbound-Kampagnen; Stimme und Tonalität festlegen."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Soft-Launch & Monitoring",
          "text": "Testanrufe, KPI-Checks (Minuten, Erfolgsquote, Übergaben) und wöchentliches Feintuning."
        }
      ],
      "inLanguage": "de",
      "about": {
        "@type": "SoftwareApplication",
        "name": "Voxon.ai Voice-Agent",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud"
      }
    },
    
    // 4. FAQPage
    {
      "@type": "FAQPage",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was ist ein Voice Agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ein Voice Agent ist eine KI-gestützte Telefonstimme, die natürliche Gespräche führt, Termine bucht und Informationen liefert. Er nutzt Natural Language Processing (NLP) und Text-to-Speech (TTS) für menschenähnliche Interaktionen."
          }
        },
        {
          "@type": "Question",
          "name": "Wie funktioniert Voxon.ai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der Voice-Agent verbindet sich mit Kalender- oder CRM-Systemen, versteht Sprache per KI und bucht freie Termine automatisch. Er prüft Verfügbarkeiten in Echtzeit und verschickt Bestätigungen per SMS/E-Mail."
          }
        },
        {
          "@type": "Question",
          "name": "Ist Voice AI DSGVO-konform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja. Voxon.ai verarbeitet alle Daten auf europäischen Servern und erfüllt die DSGVO vollständig. Auftragsverarbeitung, Datensparsamkeit und Löschfristen sind dokumentiert."
          }
        },
        {
          "@type": "Question",
          "name": "Welche Sprachen unterstützt der Voice Agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deutsch, Englisch, Italienisch und wahlweise Dialekte – automatisch erkennend. Der Agent wechselt die Sprache basierend auf der Eingabe des Anrufers."
          }
        },
        {
          "@type": "Question",
          "name": "Wie starte ich mit Voxon.ai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Einfach Demo buchen – innerhalb von 48 Stunden ist dein Voice-Agent betriebsbereit. Integrationen werden verbunden, Flows aktiviert und Testanrufe durchgeführt."
          }
        },
        {
          "@type": "Question",
          "name": "Wie starte ich schnell mit Voice AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buche eine Demo, verbinde Kalender/CRM, aktiviere Standard-Flows und teste mit Soft-Launch. In der Regel bist du in unter 48 Stunden live – DSGVO-konform und mit messbarer Entlastung im Telefonalltag."
          }
        },
        {
          "@type": "Question",
          "name": "Kann der Voice-Agent mehrere Sprachen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja. Der Agent erkennt die Sprache des Anrufers und wechselt auf Wunsch automatisch – z. B. Deutsch/Englisch/Italienisch. Dialektoptionen (Wienerisch, Hochdeutsch) sind verfügbar."
          }
        }
      ]
    },
    
    // 5. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.voxon.app/blog/voice-ai-trends-2025#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.voxon.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.voxon.app/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Voice AI Trends 2025",
          "item": "https://www.voxon.app/blog/voice-ai-trends-2025"
        }
      ]
    }
  ]
};
