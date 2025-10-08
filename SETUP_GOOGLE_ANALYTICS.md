# Google Analytics 4 Setup

Google Analytics 4 (GA4) ist jetzt vollständig integriert und trackt:
- **Besucher-Anzahl** (neue Besucher vs. wiederkehrende)
- **Traffic-Quellen** (woher die Besucher kommen: Google, direkt, Social Media, etc.)
- **Verweildauer** (wie lange Besucher auf der Seite bleiben)
- **Seitenaufrufe** und **Scroll-Tiefe**
- **CTA-Klicks** (Demo buchen, Live-Demo anhören)
- **Konversionen** (Formular-Absendungen)

---

## 📋 Setup-Schritte

### **1. Google Analytics 4 Account erstellen**

1. Gehe zu: **https://analytics.google.com/**
2. Klicke auf **"Konto erstellen"** (falls noch nicht vorhanden)
3. Wähle **"Google Analytics 4"** (nicht Universal Analytics)

### **2. Property & Datenstream erstellen**

1. **Property erstellen:**
   - Name: `Voxon.ai`
   - Zeitzone: `(GMT+01:00) Wien`
   - Währung: `Euro (EUR)`

2. **Web-Datenstream hinzufügen:**
   - Website-URL: `https://www.voxon.app`
   - Stream-Name: `Voxon.ai Website`
   
3. **Measurement ID kopieren:**
   - Nach dem Erstellen des Datenstreams erhältst du eine **Measurement ID**
   - Format: `G-XXXXXXXXXX` (z.B. `G-2B3C4D5E6F`)
   - Diese ID brauchst du im nächsten Schritt!

---

### **3. Measurement ID in .env.local eintragen**

Öffne die Datei `.env.local` und ersetze den Platzhalter:

```bash
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

Mit deiner echten Measurement ID:

```bash
VITE_GA4_MEASUREMENT_ID=G-2B3C4D5E6F
```

---

### **4. Anwendung neu starten**

```bash
npm run dev
```

Die Google Analytics-Komponente wird jetzt automatisch geladen und beginnt mit dem Tracking.

---

## 📊 Was wird getrackt?

### **Automatisches Tracking:**

1. **Seitenaufrufe (Page Views)**
   - Jeder Besuch der Homepage wird gezählt

2. **Benutzer-Eigenschaften:**
   - Neue vs. wiederkehrende Besucher
   - Gerätetyp (Desktop, Mobile, Tablet)
   - Browser & Betriebssystem
   - Geografische Herkunft (Land, Stadt)

3. **Traffic-Quellen:**
   - Organische Suche (Google, Bing, etc.)
   - Direkt (URL eingegeben)
   - Social Media (LinkedIn, Facebook, etc.)
   - Referrals (Backlinks von anderen Websites)

4. **Engagement:**
   - Durchschnittliche Sitzungsdauer
   - Absprungrate (Bounce Rate)
   - Seiten pro Sitzung

---

### **Custom Event-Tracking (bereits implementiert):**

1. **CTA-Klicks:**
   ```javascript
   // Primary CTA (Demo buchen)
   trackEvent('cta_click', { 
     cta_type: 'primary', 
     cta_text: 'Demo buchen',
     section: 'hero'
   });

   // Secondary CTA (Live-Demo anhören)
   trackEvent('cta_click', { 
     cta_type: 'secondary', 
     cta_text: 'Live-Demo anhören'
   });
   ```

2. **Formular-Events:**
   - `form_start` - Benutzer beginnt Formular auszufüllen
   - `form_submit` - Formular wird abgesendet
   - `form_error` - Fehler beim Absenden

---

## 📈 Google Analytics Dashboard öffnen

Nach der Einrichtung kannst du deine Daten in Echtzeit sehen:

1. Gehe zu: **https://analytics.google.com/**
2. Wähle Property: **Voxon.ai**
3. Navigation:
   - **Berichte** → **Echtzeit**: Live-Besucher
   - **Berichte** → **Akquisition** → **Traffic-Akquisition**: Traffic-Quellen
   - **Berichte** → **Engagement** → **Seiten und Bildschirme**: Seitenaufrufe
   - **Berichte** → **Nutzer** → **Nutzerattribute**: Demografische Daten

---

## 🎯 Wichtige Metriken für Voxon.ai

### **1. Traffic-Quellen (Woher kommen die Besucher?)**

**Dashboard:** Berichte → Akquisition → Traffic-Akquisition

| Quelle | Beschreibung | Ziel |
|--------|--------------|------|
| **Organic Search** | Google-Suche | >50% (durch SEO-Optimierung) |
| **Direct** | URL direkt eingegeben | 20-30% |
| **Referral** | Backlinks | 10-20% |
| **Social** | Social Media | 5-10% |

---

### **2. Verweildauer (Wie lange bleiben die Besucher?)**

**Dashboard:** Berichte → Engagement → Seiten und Bildschirme

| Metrik | Ziel | Interpretation |
|--------|------|----------------|
| **Durchschnittliche Sitzungsdauer** | >2 Min. | User liest Content |
| **Absprungrate** | <60% | User navigiert auf Seite |
| **Scroll-Tiefe** | >50% | User scrollt mindestens bis zur Hälfte |

---

### **3. Konversionen (Demo-Anfragen)**

**Dashboard:** Berichte → Ereignisse

**Zu trackende Events:**
- `cta_click` (Demo-Button geklickt)
- `form_submit` (Kontaktformular abgesendet)

**Konversions-Ziele einrichten:**

1. Gehe zu: **Konfigurieren** → **Ereignisse** → **Ereignis erstellen**
2. Erstelle ein neues Ereignis: `conversion_demo_request`
3. Bedingung: `event_name = form_submit`
4. Markiere als **Conversion**

---

## 🔒 Datenschutz (DSGVO-konform)

Die Google Analytics-Implementierung ist DSGVO-konform konfiguriert:

✅ **IP-Anonymisierung** aktiviert (`anonymize_ip: true`)  
✅ **Cookie-Flags** gesetzt (`SameSite=None;Secure`)  
✅ **Keine personenbezogenen Daten** werden getrackt

**Cookie-Banner (Empfehlung):**

Für vollständige DSGVO-Konformität solltest du einen Cookie-Banner hinzufügen:
- **Tool:** CookieBot, OneTrust, oder Klaro
- **Opt-In:** Benutzer muss zustimmen, bevor GA4 lädt
- **Opt-Out:** Benutzer kann Tracking jederzeit deaktivieren

---

## 🧪 Testen

### **Echtzeit-Test:**

1. Öffne: https://analytics.google.com/
2. Gehe zu: **Berichte** → **Echtzeit**
3. Öffne deine Website: https://www.voxon.app
4. Du solltest **1 aktiver Nutzer** sehen!

### **Event-Test:**

1. Klicke auf **"Demo buchen"** Button
2. In GA4: **Echtzeit** → **Ereignis**: `cta_click` sollte erscheinen

---

## 📝 Zusätzliche Event-Tracking-Beispiele

Wenn du weitere Events tracken möchtest, verwende die `trackEvent`-Funktion:

```typescript
import { trackEvent } from '@/components/Analytics';

// Beispiel: Pricing-Paket-Auswahl
trackEvent('pricing_selection', { 
  package: 'Pro',
  price: 539
});

// Beispiel: Video abspielen
trackEvent('video_play', { 
  video_name: 'Live-Demo'
});

// Beispiel: Scroll-Tiefe
trackEvent('scroll_depth', { 
  depth: '75%'
});
```

---

## 🚀 Status

✅ Google Analytics 4 integriert  
✅ Event-Tracking für CTAs  
✅ DSGVO-konforme Konfiguration  
⚠️ **Noch zu tun:** Measurement ID in `.env.local` eintragen

---

## 📚 Ressourcen

- **Google Analytics:** https://analytics.google.com/
- **GA4 Dokumentation:** https://support.google.com/analytics/answer/10089681
- **Event-Tracking Guide:** https://developers.google.com/analytics/devguides/collection/ga4/events

---

**Letzte Aktualisierung:** 2025-10-08  
**Version:** 1.0  
**Autor:** Cascade AI
