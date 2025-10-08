# Nameserver Update - Schritt-für-Schritt Anleitung

## 🎯 Ziel
Domain `voxon.app` auf Google Cloud DNS Nameserver umstellen

## 🌐 Nameserver (zum Kopieren)

```
ns-cloud-d1.googledomains.com
ns-cloud-d2.googledomains.com
ns-cloud-d3.googledomains.com
ns-cloud-d4.googledomains.com
```

---

## 📋 Anleitung nach Registrar

### **1. Namecheap**

1. **Einloggen:** https://namecheap.com → "Sign In"
2. **Domain List:** Dashboard → "Domain List"
3. **Domain wählen:** Klicke auf `voxon.app` → "Manage"
4. **Nameservers ändern:**
   - Scrolle zu "NAMESERVERS"
   - Wähle: **"Custom DNS"** (statt "Namecheap BasicDNS")
   - Trage ein:
     ```
     Nameserver 1: ns-cloud-d1.googledomains.com
     Nameserver 2: ns-cloud-d2.googledomains.com
     Nameserver 3: ns-cloud-d3.googledomains.com
     Nameserver 4: ns-cloud-d4.googledomains.com
     ```
5. **Speichern:** Klicke auf grünen Haken ✓
6. **Bestätigung:** Du siehst "Nameservers were successfully updated"

**Screenshot-Pfad:** Nameservers → Custom DNS → 4 Felder ausfüllen → ✓

---

### **2. GoDaddy**

1. **Einloggen:** https://godaddy.com → "Sign In"
2. **My Products:** Klicke auf "Domains" → "My Domains"
3. **Domain wählen:** Klicke auf `voxon.app` → "DNS"
4. **Nameservers ändern:**
   - Scrolle zu "Nameservers"
   - Klicke auf **"Change"**
   - Wähle: **"I'll use my own nameservers"**
   - Trage ein:
     ```
     ns-cloud-d1.googledomains.com
     ns-cloud-d2.googledomains.com
     ns-cloud-d3.googledomains.com
     ns-cloud-d4.googledomains.com
     ```
5. **Speichern:** Klicke "Save"
6. **Bestätigung:** "Your nameservers have been updated"

---

### **3. Google Domains**

1. **Einloggen:** https://domains.google.com → "Sign In"
2. **Domain wählen:** Klicke auf `voxon.app`
3. **DNS-Einstellungen:** Linke Seitenleiste → "DNS"
4. **Nameservers ändern:**
   - Scrolle zu "Custom name servers"
   - Klicke auf **"Switch to custom name servers"**
   - Trage ein:
     ```
     ns-cloud-d1.googledomains.com
     ns-cloud-d2.googledomains.com
     ns-cloud-d3.googledomains.com
     ns-cloud-d4.googledomains.com
     ```
5. **Speichern:** Klicke "Save"

---

### **4. Cloudflare**

1. **Einloggen:** https://dash.cloudflare.com/ → "Log In"
2. **Domain wählen:** Klicke auf `voxon.app`
3. **DNS-Einstellungen:** Klicke auf "DNS" Tab
4. **Nameservers ändern:**
   - Scrolle zu "Cloudflare Nameservers"
   - **Wichtig:** Bei Cloudflare musst du die DNS-Records manuell eintragen (siehe unten)
   - **Alternative:** Domain von Cloudflare entfernen und bei anderem Registrar Nameserver ändern

**Cloudflare DNS-Records (falls Cloudflare bleiben soll):**
- A-Record: `voxon.app` → `151.101.1.195`
- A-Record: `voxon.app` → `151.101.65.195`
- CNAME: `www` → `project-8303929158390693167.web.app`

---

### **5. Andere Registrars (Allgemein)**

**Typische Schritte:**

1. **Einloggen** bei deinem Registrar
2. **Domain verwalten:** Suche nach "Manage Domain" oder "Domain Settings"
3. **DNS/Nameserver finden:** Suche nach:
   - "Nameservers"
   - "DNS Management"
   - "Name Server Settings"
   - "Custom Nameservers"
4. **Wechsel zu Custom:** 
   - Von "Default" oder "Parking" zu "Custom"
5. **4 Nameserver eintragen:**
   ```
   ns-cloud-d1.googledomains.com
   ns-cloud-d2.googledomains.com
   ns-cloud-d3.googledomains.com
   ns-cloud-d4.googledomains.com
   ```
6. **Speichern**

---

## ⏱️ Propagation-Zeit

**Wichtig:** Nach dem Ändern der Nameserver dauert es **24-48 Stunden**, bis die Änderungen weltweit aktiv sind.

**Während dieser Zeit:**
- ✅ Alte DNS-Einträge funktionieren noch (falls vorhanden)
- ⏳ Neue Google Cloud DNS-Einträge werden langsam aktiv
- 🌍 Verschiedene Regionen sehen unterschiedliche DNS-Daten

---

## 🧪 Status prüfen

### **Nameserver-Propagation testen:**

```bash
# Aktuelle Nameserver prüfen
dig voxon.app NS +short

# Sollte nach 24-48h zeigen:
# ns-cloud-d1.googledomains.com
# ns-cloud-d2.googledomains.com
# ns-cloud-d3.googledomains.com
# ns-cloud-d4.googledomains.com
```

**Online-Tool:** https://dnschecker.org/
1. Gib ein: `voxon.app`
2. Wähle Typ: **"NS"** (Nameserver)
3. Klicke "Search"
4. Sieh dir die weltweite Verteilung an

**Grüne Haken = Nameserver aktiv**  
**Rote X = Noch alte Nameserver**

---

## ✅ Erfolgsbestätigung

**Nach erfolgreicher Nameserver-Änderung siehst du:**

```bash
$ dig voxon.app NS +short
ns-cloud-d1.googledomains.com.
ns-cloud-d2.googledomains.com.
ns-cloud-d3.googledomains.com.
ns-cloud-d4.googledomains.com.
```

**Dann funktionieren auch die A-Records:**

```bash
$ dig voxon.app +short
151.101.1.195
151.101.65.195
```

**Und www-Subdomain:**

```bash
$ dig www.voxon.app +short
project-8303929158390693167.web.app.
151.101.1.195
151.101.65.195
```

---

## 🚨 Häufige Probleme

### **Problem 1: "Invalid Nameserver" Fehler**

**Ursache:** Tippfehler oder fehlendes `.com` am Ende

**Lösung:** Prüfe exakte Schreibweise:
```
✅ ns-cloud-d1.googledomains.com (richtig)
❌ ns-cloud-d1.googledomains (falsch - kein .com)
❌ ns-cloud-1d.googledomains.com (falsch - d1, nicht 1d)
```

---

### **Problem 2: "Nameserver not responding"**

**Ursache:** DNS-Zone in Google Cloud noch nicht aktiv

**Lösung:** Warte 5-10 Minuten und versuche erneut

---

### **Problem 3: Änderung nicht möglich (Domain gesperrt)**

**Ursache:** Domain-Transfer-Lock aktiv

**Lösung:**
1. Bei Registrar: "Unlock Domain" oder "Disable Transfer Lock"
2. Nameserver ändern
3. Danach wieder sperren (optional)

---

## 📞 Support

**Falls du Probleme hast, kontaktiere deinen Domain-Registrar:**

- **Namecheap Support:** https://www.namecheap.com/support/
- **GoDaddy Support:** https://www.godaddy.com/help
- **Google Domains:** https://support.google.com/domains/

**Sage dem Support:**
> "Ich möchte die Nameserver für voxon.app auf Google Cloud DNS ändern. Die Nameserver sind: ns-cloud-d1.googledomains.com, ns-cloud-d2.googledomains.com, ns-cloud-d3.googledomains.com, ns-cloud-d4.googledomains.com"

---

## 🎯 Zusammenfassung

1. ✅ **Nameserver kopieren:**
   ```
   ns-cloud-d1.googledomains.com
   ns-cloud-d2.googledomains.com
   ns-cloud-d3.googledomains.com
   ns-cloud-d4.googledomains.com
   ```

2. ✅ **Bei Registrar einloggen** (Namecheap, GoDaddy, etc.)

3. ✅ **Domain-Verwaltung** für `voxon.app` öffnen

4. ✅ **Nameserver auf "Custom" umstellen**

5. ✅ **4 Google Cloud Nameserver eintragen**

6. ✅ **Speichern**

7. ⏳ **Warten 24-48h** für DNS-Propagation

8. ✅ **Testen** mit `dig voxon.app NS +short`

---

**Nach erfolgreicher Nameserver-Änderung:**
- ✅ `voxon.app` zeigt auf deine Firebase-Homepage
- ✅ `www.voxon.app` zeigt auf deine Firebase-Homepage
- ✅ SSL-Zertifikat kann in Firebase erstellt werden

---

**Erstellt:** 2025-10-08  
**Domain:** voxon.app  
**Google Cloud Nameserver:** ns-cloud-d1-4.googledomains.com
