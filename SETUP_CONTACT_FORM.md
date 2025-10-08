# Kontaktformular Setup

Das Kontaktformular nutzt **Web3Forms** für den sicheren E-Mail-Versand ohne eigenes Backend.

## Setup-Schritte:

### 1. Web3Forms Access Key erhalten

1. Besuchen Sie: https://web3forms.com/
2. Geben Sie Ihre E-Mail-Adresse ein (HOEFLER@AMFLUSS.INFO)
3. Sie erhalten einen kostenlosen **Access Key** per E-Mail
4. Bestätigen Sie Ihre E-Mail-Adresse

### 2. Umgebungsvariablen konfigurieren

1. Kopieren Sie `.env.example` zu `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Tragen Sie Ihren Web3Forms Access Key in `.env.local` ein:
   ```
   VITE_CONTACT_EMAIL=HOEFLER@AMFLUSS.INFO
   VITE_WEB3FORMS_KEY=ihr-access-key-hier
   ```

### 3. Anwendung neu starten

```bash
npm run dev
```

## Funktionsweise:

- Kontaktformular-Daten werden sicher an Web3Forms gesendet
- Web3Forms leitet die E-Mail an HOEFLER@AMFLUSS.INFO weiter
- Die E-Mail-Adresse ist NICHT im öffentlichen Code sichtbar
- Alle Daten sind in `.env.local` gespeichert (nicht in Git)

## Sicherheit:

✅ E-Mail-Adresse in Umgebungsvariablen (nicht im Code)  
✅ `.env.local` wird von Git ignoriert  
✅ Web3Forms ist DSGVO-konform  
✅ Keine Speicherung sensibler Daten im Frontend

## Support:

Bei Problemen: https://web3forms.com/support
