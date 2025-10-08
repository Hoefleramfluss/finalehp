# Custom Domain Setup für voxon.app

## Problem:
SSL-Zertifikat-Fehler bei www.voxon.app (NET::ERR_CERT_COMMON_NAME_INVALID)

## Lösung:

### 1. Firebase Custom Domain hinzufügen

1. Öffnen Sie die Firebase Console:
   ```
   https://console.firebase.google.com/project/project-8303929158390693167/hosting
   ```

2. Klicken Sie auf **"Custom domain hinzufügen"**

3. Geben Sie Ihre Domain ein: **voxon.app**

4. Firebase wird DNS-Einträge anzeigen, die Sie bei Ihrem Domain-Anbieter eintragen müssen

### 2. DNS-Einträge konfigurieren

Bei Ihrem Domain-Anbieter (z.B. Namecheap, GoDaddy, Cloudflare):

**Für voxon.app (Root-Domain):**
```
Type: A
Name: @
Value: 151.101.1.195
Value: 151.101.65.195
```

**Für www.voxon.app:**
```
Type: CNAME
Name: www
Value: project-8303929158390693167.web.app
```

**Alternative (empfohlen) - Beide mit CNAME:**
```
Type: CNAME
Name: @
Value: project-8303929158390693167.web.app

Type: CNAME
Name: www
Value: project-8303929158390693167.web.app
```

### 3. SSL-Zertifikat warten

- Nach DNS-Konfiguration: **Warten Sie 24-48 Stunden**
- Firebase erstellt automatisch ein kostenloses SSL-Zertifikat
- Status in Firebase Console überprüfen

### 4. Verification

Firebase zeigt einen TXT-Eintrag zur Domain-Verifizierung:
```
Type: TXT
Name: @ (oder wie von Firebase angegeben)
Value: [Firebase-Verification-Code]
```

## Schnellstart (CLI):

```bash
# Custom Domain über Firebase CLI hinzufügen
firebase hosting:channel:deploy live --only hosting

# Domain-Status prüfen
firebase hosting:sites:get project-8303929158390693167
```

## Wichtige Hinweise:

✅ DNS-Propagation kann 24-48h dauern  
✅ SSL-Zertifikat wird automatisch von Firebase erstellt  
✅ Beide Domains (mit und ohne www) sollten funktionieren  
✅ HTTP wird automatisch auf HTTPS umgeleitet  

## Support:

Firebase Hosting Docs: https://firebase.google.com/docs/hosting/custom-domain
