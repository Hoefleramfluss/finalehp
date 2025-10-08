# Google Cloud DNS Einrichtung für voxon.app

Diese Anleitung zeigt, wie du die DNS-Einträge bei Google Cloud DNS konfigurierst, damit **voxon.app** auf deine Firebase Hosting-Homepage zeigt.

---

## 📋 Voraussetzungen

1. **Domain registriert:** voxon.app (bei einem Domain-Registrar wie Namecheap, GoDaddy, etc.)
2. **Firebase Hosting aktiv:** https://project-8303929158390693167.web.app
3. **Google Cloud Projekt:** Zugriff auf Google Cloud Console

---

## 🚀 Option 1: Google Cloud DNS (Empfohlen)

### **Schritt 1: DNS-Zone in Google Cloud erstellen**

1. Öffne: **https://console.cloud.google.com/net-services/dns/zones**
2. Klicke auf **"DNS-Zone erstellen"**
3. Konfiguration:
   - **Zonentyp:** `Öffentlich`
   - **Zonenname:** `voxon-app-zone`
   - **DNS-Name:** `voxon.app`
   - **DNSSEC:** `Ein` (empfohlen für Sicherheit)
4. Klicke **"Erstellen"**

### **Schritt 2: DNS-Einträge hinzufügen**

Nach dem Erstellen der Zone fügst du folgende DNS-Einträge hinzu:

#### **A-Records (IPv4) für voxon.app:**

| Name | Typ | TTL | Daten |
|------|-----|-----|-------|
| `@` (Root) | A | 300 | `151.101.1.195` |
| `@` (Root) | A | 300 | `151.101.65.195` |

**So hinzufügen:**
1. Klicke auf **"Datensatzgruppe hinzufügen"**
2. DNS-Name: `@` (oder leer lassen)
3. Ressourcentyp: `A`
4. TTL: `5` Minuten (`300` Sekunden)
5. IPv4-Adressen: 
   ```
   151.101.1.195
   151.101.65.195
   ```
6. Klicke **"Erstellen"**

#### **CNAME-Record für www.voxon.app:**

| Name | Typ | TTL | Daten |
|------|-----|-----|-------|
| `www` | CNAME | 300 | `project-8303929158390693167.web.app.` |

**So hinzufügen:**
1. Klicke auf **"Datensatzgruppe hinzufügen"**
2. DNS-Name: `www`
3. Ressourcentyp: `CNAME`
4. TTL: `5` Minuten (`300` Sekunden)
5. Kanonischer Name: `project-8303929158390693167.web.app.` (mit Punkt am Ende!)
6. Klicke **"Erstellen"**

#### **TXT-Record (für Domain-Verifizierung):**

| Name | Typ | TTL | Daten |
|------|-----|-----|-------|
| `@` | TXT | 300 | `"google-site-verification=DEIN_CODE_VON_FIREBASE"` |

**Firebase Verification Code erhalten:**
1. Gehe zu Firebase Console: https://console.firebase.google.com/
2. Hosting → Domain hinzufügen → `voxon.app`
3. Kopiere den TXT-Record, den Firebase dir zeigt
4. Füge ihn in Google Cloud DNS ein

### **Schritt 3: Nameserver bei Domain-Registrar aktualisieren**

Nach dem Erstellen der DNS-Zone zeigt Google Cloud die **Nameserver** an:

**Beispiel Nameserver:**
```
ns-cloud-a1.googledomains.com
ns-cloud-a2.googledomains.com
ns-cloud-a3.googledomains.com
ns-cloud-a4.googledomains.com
```

**Bei deinem Domain-Registrar (z.B. Namecheap, GoDaddy):**

1. Logge dich ein
2. Gehe zu Domain-Verwaltung für `voxon.app`
3. Suche nach **"Nameserver"** oder **"DNS-Einstellungen"**
4. Wähle **"Custom Nameservers"** (Benutzerdefinierte Nameserver)
5. Trage die 4 Nameserver von Google Cloud ein
6. Speichern

**⏱️ Propagation:** DNS-Änderungen können **24-48 Stunden** dauern, bis sie weltweit verfügbar sind.

---

## 🚀 Option 2: Firebase Hosting Custom Domain (Einfacher)

### **Schritt 1: Custom Domain in Firebase hinzufügen**

1. Öffne Firebase Console: **https://console.firebase.google.com/project/project-8303929158390693167/hosting**
2. Klicke auf **"Domain hinzufügen"**
3. Gib ein: `voxon.app`
4. Klicke **"Weiter"**

### **Schritt 2: DNS-Einträge kopieren**

Firebase zeigt dir die DNS-Einträge an, die du bei deinem Domain-Registrar eintragen musst:

**A-Records:**
```
Name: @
Type: A
Value: 151.101.1.195
       151.101.65.195
```

**TXT-Record (Verifizierung):**
```
Name: @
Type: TXT
Value: google-site-verification=XXXXXXXXXXXXXX
```

### **Schritt 3: DNS-Einträge bei Domain-Registrar eintragen**

1. Logge dich bei deinem Domain-Registrar ein (z.B. Namecheap, GoDaddy)
2. Gehe zu **DNS-Verwaltung** für `voxon.app`
3. Füge die DNS-Einträge hinzu:

**Bei Namecheap:**
- Host: `@` → Record Type: `A Record` → Value: `151.101.1.195`
- Host: `@` → Record Type: `A Record` → Value: `151.101.65.195`
- Host: `@` → Record Type: `TXT Record` → Value: `google-site-verification=...`
- Host: `www` → Record Type: `CNAME Record` → Value: `project-8303929158390693167.web.app`

**Bei GoDaddy:**
- Type: `A` → Name: `@` → Value: `151.101.1.195`
- Type: `A` → Name: `@` → Value: `151.101.65.195`
- Type: `TXT` → Name: `@` → Value: `google-site-verification=...`
- Type: `CNAME` → Name: `www` → Value: `project-8303929158390693167.web.app`

### **Schritt 4: Verifizierung in Firebase**

1. Gehe zurück zur Firebase Console
2. Klicke auf **"Verifizieren"**
3. Firebase prüft die DNS-Einträge
4. Nach erfolgreicher Verifizierung wird automatisch ein **SSL-Zertifikat** erstellt (kann bis zu 24h dauern)

---

## 🔒 SSL-Zertifikat (automatisch)

Firebase erstellt automatisch ein kostenloses **SSL-Zertifikat** (Let's Encrypt) für:
- `https://voxon.app`
- `https://www.voxon.app`

**Status prüfen:**
- Firebase Console → Hosting → Domains
- Status: "Verbunden" (grüner Haken)

---

## ✅ DNS-Einträge Zusammenfassung

### **Finale DNS-Konfiguration:**

```
# Root-Domain (voxon.app)
@               A       300     151.101.1.195
@               A       300     151.101.65.195
@               TXT     300     "google-site-verification=DEIN_CODE"

# WWW-Subdomain (www.voxon.app)
www             CNAME   300     project-8303929158390693167.web.app.

# Optional: Mail-Server (falls vorhanden)
@               MX      300     10 mail.your-provider.com.
```

---

## 🧪 Testen

### **1. DNS-Propagation prüfen:**

```bash
# A-Records prüfen
dig voxon.app +short
# Sollte zeigen: 151.101.1.195 und 151.101.65.195

# CNAME prüfen
dig www.voxon.app +short
# Sollte zeigen: project-8303929158390693167.web.app
```

**Online-Tool:** https://dnschecker.org/ (gibt `voxon.app` ein)

### **2. Website testen:**

Nach DNS-Propagation sollten beide URLs funktionieren:
- ✅ `https://voxon.app`
- ✅ `https://www.voxon.app`

Beide sollten auf deine Firebase-Homepage umleiten.

---

## 🛠️ Troubleshooting

### **Problem: Domain zeigt "Not Found" oder "404"**

**Lösung:**
1. Prüfe DNS-Einträge mit `dig voxon.app`
2. Warte 24-48h für DNS-Propagation
3. Lösche Browser-Cache (`Cmd+Shift+R` auf Mac)

### **Problem: "Your connection is not private" (SSL-Fehler)**

**Lösung:**
1. Warte bis zu 24h, bis Firebase das SSL-Zertifikat erstellt hat
2. Prüfe in Firebase Console → Hosting → Domains
3. Status sollte "Verbunden" sein (grüner Haken)

### **Problem: "DNS_PROBE_FINISHED_NXDOMAIN"**

**Lösung:**
1. DNS-Einträge wurden noch nicht propagiert → warten
2. Nameserver falsch konfiguriert → bei Registrar prüfen
3. DNS-Cache leeren: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` (Mac)

---

## 📊 Checkliste

- [ ] DNS-Zone in Google Cloud erstellt (Option 1) ODER
- [ ] Custom Domain in Firebase hinzugefügt (Option 2)
- [ ] A-Records für `voxon.app` konfiguriert
- [ ] CNAME für `www.voxon.app` konfiguriert
- [ ] TXT-Record für Verifizierung hinzugefügt
- [ ] Nameserver bei Domain-Registrar aktualisiert (falls Google Cloud DNS)
- [ ] Domain in Firebase verifiziert
- [ ] SSL-Zertifikat von Firebase erstellt
- [ ] Website über `https://voxon.app` erreichbar
- [ ] Website über `https://www.voxon.app` erreichbar

---

## 📚 Hilfreiche Links

- **Google Cloud DNS:** https://console.cloud.google.com/net-services/dns/zones
- **Firebase Hosting:** https://console.firebase.google.com/project/project-8303929158390693167/hosting
- **DNS-Checker:** https://dnschecker.org/
- **Firebase Custom Domain Docs:** https://firebase.google.com/docs/hosting/custom-domain

---

## 🚀 Quick Start (Zusammenfassung)

### **Empfohlener Weg: Firebase Custom Domain**

```bash
# 1. Firebase Console öffnen
https://console.firebase.google.com/project/project-8303929158390693167/hosting

# 2. Domain hinzufügen: voxon.app

# 3. DNS-Einträge bei Domain-Registrar:
@       A       151.101.1.195
@       A       151.101.65.195
@       TXT     google-site-verification=XXXXX
www     CNAME   project-8303929158390693167.web.app

# 4. In Firebase verifizieren

# 5. Warten auf SSL-Zertifikat (bis 24h)

# 6. Fertig! → https://voxon.app
```

---

**Letzte Aktualisierung:** 2025-10-08  
**Version:** 1.0  
**Firebase Projekt ID:** project-8303929158390693167
