# Google Cloud DNS - Konfigurationsstatus für voxon.app

**Datum:** 2025-10-08, 22:18 Uhr  
**Status:** ✅ DNS-Zone erfolgreich erstellt und konfiguriert

---

## ✅ Durchgeführte Schritte

### 1. DNS-Zone erstellt
```bash
Zone-Name: voxon-app-zone
DNS-Name: voxon.app
Sichtbarkeit: public
Projekt: voxonhomepage
```

### 2. DNS-Records konfiguriert

| Name | Typ | TTL | Daten |
|------|-----|-----|-------|
| `voxon.app.` | **A** | 300 | `151.101.1.195`, `151.101.65.195` |
| `www.voxon.app.` | **CNAME** | 300 | `project-8303929158390693167.web.app.` |
| `voxon.app.` | **NS** | 21600 | Google Cloud Nameserver (automatisch) |
| `voxon.app.` | **SOA** | 21600 | Google Cloud SOA (automatisch) |

---

## 🌐 Google Cloud Nameserver

Diese Nameserver müssen bei deinem Domain-Registrar (z.B. Namecheap, GoDaddy) eingetragen werden:

```
ns-cloud-d1.googledomains.com
ns-cloud-d2.googledomains.com
ns-cloud-d3.googledomains.com
ns-cloud-d4.googledomains.com
```

---

## 📋 Nächste Schritte (WICHTIG!)

### **Schritt 1: Nameserver bei Domain-Registrar aktualisieren**

1. **Logge dich bei deinem Domain-Registrar ein** (wo du voxon.app gekauft hast)
   - Namecheap: https://namecheap.com → Dashboard → Domain List
   - GoDaddy: https://godaddy.com → My Products → Domains
   - Andere: Suche nach "DNS Management" oder "Nameservers"

2. **Wähle die Domain:** `voxon.app`

3. **Ändere die Nameserver auf "Custom" oder "Custom DNS"**

4. **Trage die 4 Google Cloud Nameserver ein:**
   ```
   ns-cloud-d1.googledomains.com
   ns-cloud-d2.googledomains.com
   ns-cloud-d3.googledomains.com
   ns-cloud-d4.googledomains.com
   ```

5. **Speichern**

**⏱️ Wichtig:** DNS-Änderungen können **24-48 Stunden** dauern, bis sie weltweit verfügbar sind.

---

### **Schritt 2: Firebase Custom Domain hinzufügen (Optional)**

Für automatisches SSL-Zertifikat:

1. Öffne Firebase Console:
   ```
   https://console.firebase.google.com/project/project-8303929158390693167/hosting
   ```

2. Klicke auf **"Domain hinzufügen"**

3. Gib ein: **`voxon.app`**

4. Firebase wird die DNS-Einträge prüfen und automatisch ein **SSL-Zertifikat** erstellen

---

## 🧪 DNS-Konfiguration testen

### **1. Nameserver-Propagation prüfen:**

```bash
# Prüfe, ob die Nameserver aktiv sind
dig voxon.app NS +short
# Sollte zeigen: ns-cloud-d1.googledomains.com, etc.
```

**Online-Tool:** https://dnschecker.org/ → Gib `voxon.app` ein → Wähle "NS"

### **2. A-Records prüfen:**

```bash
# Prüfe A-Records
dig voxon.app +short
# Sollte zeigen: 151.101.1.195 und 151.101.65.195
```

### **3. CNAME prüfen:**

```bash
# Prüfe www-Subdomain
dig www.voxon.app +short
# Sollte zeigen: project-8303929158390693167.web.app
```

### **4. Website testen:**

Nach erfolgreicher DNS-Propagation (24-48h):
- ✅ https://voxon.app
- ✅ https://www.voxon.app

Beide sollten auf deine Firebase-Homepage umleiten.

---

## 📊 Aktuelle DNS-Records (Google Cloud)

```
NAME            TYPE   TTL    DATA
voxon.app.      A      300    151.101.1.195,151.101.65.195
voxon.app.      NS     21600  ns-cloud-d1.googledomains.com.,
                              ns-cloud-d2.googledomains.com.,
                              ns-cloud-d3.googledomains.com.,
                              ns-cloud-d4.googledomains.com.
voxon.app.      SOA    21600  ns-cloud-d1.googledomains.com. 
                              cloud-dns-hostmaster.google.com. 
                              2 21600 3600 259200 300
www.voxon.app.  CNAME  300    project-8303929158390693167.web.app.
```

---

## 🛠️ Verwaltung

### **DNS-Records anzeigen:**
```bash
gcloud dns record-sets list --zone=voxon-app-zone
```

### **Neuen Record hinzufügen:**
```bash
# Transaction starten
gcloud dns record-sets transaction start --zone=voxon-app-zone

# Record hinzufügen (Beispiel: TXT-Record)
gcloud dns record-sets transaction add "google-site-verification=XXXXX" \
  --name=voxon.app. --ttl=300 --type=TXT --zone=voxon-app-zone

# Transaction ausführen
gcloud dns record-sets transaction execute --zone=voxon-app-zone
```

### **Record löschen:**
```bash
# Transaction starten
gcloud dns record-sets transaction start --zone=voxon-app-zone

# Record löschen
gcloud dns record-sets transaction remove "alter-wert" \
  --name=subdomain.voxon.app. --ttl=300 --type=A --zone=voxon-app-zone

# Transaction ausführen
gcloud dns record-sets transaction execute --zone=voxon-app-zone
```

---

## 🔒 SSL-Zertifikat

**Status:** Noch nicht aktiv  
**Aktion erforderlich:** Firebase Custom Domain hinzufügen (siehe Schritt 2 oben)

Firebase erstellt automatisch ein kostenloses **Let's Encrypt SSL-Zertifikat** für:
- `https://voxon.app`
- `https://www.voxon.app`

**Dauer:** Bis zu 24 Stunden nach Domain-Verifizierung

---

## 📚 Hilfreiche Links

- **Google Cloud DNS Console:** https://console.cloud.google.com/net-services/dns/zones/voxon-app-zone/details?project=voxonhomepage
- **Firebase Hosting:** https://console.firebase.google.com/project/project-8303929158390693167/hosting
- **DNS Checker:** https://dnschecker.org/
- **Nameserver bei Registrar ändern (Namecheap):** https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/

---

## ✅ Checkliste

- [x] DNS-Zone in Google Cloud erstellt
- [x] A-Records für `voxon.app` konfiguriert
- [x] CNAME für `www.voxon.app` konfiguriert
- [ ] Nameserver bei Domain-Registrar aktualisiert ⚠️ **WICHTIG**
- [ ] DNS-Propagation abwarten (24-48h)
- [ ] Firebase Custom Domain hinzufügen (für SSL)
- [ ] SSL-Zertifikat von Firebase erstellen lassen
- [ ] Website über `https://voxon.app` testen
- [ ] Website über `https://www.voxon.app` testen

---

## 🚀 Status-Zusammenfassung

✅ **Google Cloud DNS:** Vollständig konfiguriert  
⚠️ **Domain-Registrar:** Nameserver müssen noch aktualisiert werden  
⏳ **DNS-Propagation:** Startet nach Nameserver-Änderung  
⏳ **SSL-Zertifikat:** Wird nach Firebase-Setup erstellt

**Nächster kritischer Schritt:** Nameserver bei deinem Domain-Registrar auf die Google Cloud Nameserver ändern!

---

**Erstellt:** 2025-10-08, 22:18 Uhr  
**Google Cloud Projekt:** voxonhomepage  
**DNS-Zone:** voxon-app-zone  
**Firebase Projekt:** project-8303929158390693167
