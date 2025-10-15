import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

type LandCode = "AT" | "DE" | "CH" | "EU" | "OTHER";

type CompanyForm = {
  rechtsform: string;
  firmenname: string;
  firmenanschrift: string;
  plz: string;
  ort: string;
  land: LandCode;
  uid: string;
  branche: string;
  rechnungsMail: string;
};

export default function Registar() {
  const [name, setName] = useState("");
  const [vorname, setVorname] = useState("");
  const [adresse, setAdresse] = useState("");
  const [plz, setPlz] = useState("");
  const [ort, setOrt] = useState("");
  const [land, setLand] = useState<LandCode>("AT");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [unternehmen, setUnternehmen] = useState<"JA" | "NEIN">("NEIN");
  const [company, setCompany] = useState<CompanyForm>({
    rechtsform: "",
    firmenname: "",
    firmenanschrift: "",
    plz: "",
    ort: "",
    land: "AT",
    uid: "",
    branche: "",
    rechnungsMail: "",
  });
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptAGB, setAcceptAGB] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const personPlzPattern = useMemo(() => (land === "AT" ? /^\d{4}$/ : land === "DE" ? /^\d{5}$/ : /^.{3,10}$/), [land]);
  const companyPlzPattern = useMemo(() => (company.land === "AT" ? /^\d{4}$/ : company.land === "DE" ? /^\d{5}$/ : /^.{3,10}$/), [company.land]);

  const uidPattern = useMemo(() => {
    if (company.land === "AT") return /^ATU\d{8}$/i;
    if (company.land === "DE") return /^DE\d{9}$/i;
    return /^[A-Z]{2}[A-Z0-9]{6,12}$/i;
  }, [company.land]);

  function validate(): string[] {
    const errs: string[] = [];
    if (!vorname.trim()) errs.push("Vorname ist erforderlich.");
    if (!name.trim()) errs.push("Name ist erforderlich.");
    if (!adresse.trim()) errs.push("Adresse ist erforderlich.");
    if (!plz.trim() || !personPlzPattern.test(plz.trim())) errs.push(land === "AT" ? "PLZ muss 4 Ziffern haben (AT)." : land === "DE" ? "PLZ muss 5 Ziffern haben (DE)." : "PLZ ist ungültig.");
    if (!ort.trim()) errs.push("Ort ist erforderlich.");
    if (!telefon.trim() || !/^\+?[0-9 ()\-]{6,20}$/.test(telefon.trim())) errs.push("Telefonnummer ist ungültig.");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.push("E-Mail ist ungültig.");

    if (unternehmen === "JA") {
      if (!company.rechtsform) errs.push("Rechtsform ist erforderlich.");
      if (!company.firmenname.trim()) errs.push("Firmenname ist erforderlich.");
      if (!company.firmenanschrift.trim()) errs.push("Firmenanschrift ist erforderlich.");
      if (!company.plz.trim() || !companyPlzPattern.test(company.plz.trim())) errs.push(company.land === "AT" ? "Firmen-PLZ muss 4 Ziffern haben (AT)." : company.land === "DE" ? "Firmen-PLZ muss 5 Ziffern haben (DE)." : "Firmen-PLZ ist ungültig.");
      if (!company.ort.trim()) errs.push("Firmen-Ort ist erforderlich.");
      if (!company.uid.trim() || !uidPattern.test(company.uid.trim())) errs.push("UID ist ungültig.");
      if (!company.branche.trim()) errs.push("Branche ist erforderlich.");
      if (!company.rechnungsMail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(company.rechnungsMail.trim())) errs.push("Rechnungs-E-Mail ist ungültig.");
    }

    if (!acceptPrivacy) errs.push("Datenschutzerklärung muss akzeptiert werden.");
    if (!acceptAGB) errs.push("AGB müssen gelesen und akzeptiert werden.");

    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (v.length === 0) {
      setSubmitted(true);
      const payload = {
        person: { name, vorname, adresse, plz, ort, land, telefon, email },
        unternehmen,
        company: unternehmen === "JA" ? company : null,
        einwilligungen: { acceptPrivacy, acceptAGB, newsletter },
      };
      console.log("registar", payload);
    }
  }

  const rechtsformen = useMemo(
    () => [
      "Einzelunternehmen / e.U.",
      "GmbH",
      "UG (haftungsbeschränkt)",
      "AG",
      "OHG",
      "KG",
      "GmbH & Co. KG",
      "Verein",
      "Sonstige",
    ],
    []
  );

  return (
    <div className="relative min-h-screen bg-night-900 text-white overflow-hidden">
      <SEO
        title="Registrieren – Voxon Verwaltung"
        description="Erstelle deinen Zugang zur Voxon Voicebot-Verwaltung."
        canonical="https://www.voxon.app/registar"
        ogUrl="https://www.voxon.app/registar"
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-radial opacity-70" />
      <div className="pointer-events-none absolute -top-40 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-electric-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-aqua-500/20 blur-3xl" />

      <main className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-voxon backdrop-blur-sm">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Registrieren</h1>
            <p className="mt-2 text-sm text-white/70">Voxon Voicebot Verwaltung</p>
          </div>

          {errors.length > 0 && (
            <div className="mb-6 space-y-1 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {errors.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </div>
          )}

          {submitted && errors.length === 0 && (
            <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              Registrierung erfasst. Wir melden uns in Kürze.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="vorname" className="mb-1 block text-sm text-white/80">Vorname</label>
                <input id="vorname" value={vorname} onChange={(e) => setVorname(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
              </div>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-white/80">Name</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="adresse" className="mb-1 block text-sm text-white/80">Adresse</label>
                <input id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
              </div>
              <div>
                <label htmlFor="plz" className="mb-1 block text-sm text-white/80">PLZ</label>
                <input id="plz" value={plz} onChange={(e) => setPlz(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
              </div>
              <div>
                <label htmlFor="ort" className="mb-1 block text-sm text-white/80">Ort</label>
                <input id="ort" value={ort} onChange={(e) => setOrt(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
              </div>
              <div>
                <label htmlFor="land" className="mb-1 block text-sm text-white/80">Land</label>
                <select id="land" value={land} onChange={(e) => setLand(e.target.value as LandCode)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10">
                  <option value="AT">Österreich</option>
                  <option value="DE">Deutschland</option>
                  <option value="CH">Schweiz</option>
                  <option value="EU">EU</option>
                  <option value="OTHER">Anderes</option>
                </select>
              </div>
              <div>
                <label htmlFor="telefon" className="mb-1 block text-sm text-white/80">Telefonnummer</label>
                <input id="telefon" value={telefon} onChange={(e) => setTelefon(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" placeholder="+43 664 ..." required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1 block text-sm text-white/80">E-Mail</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" placeholder="name@firma.com" required />
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-white/80">Bist du ein Unternehmen?</div>
              <div className="flex gap-6 text-sm">
                <label className="inline-flex items-center gap-2"><input type="radio" name="unternehmen" value="NEIN" checked={unternehmen === "NEIN"} onChange={() => setUnternehmen("NEIN")} /> NEIN</label>
                <label className="inline-flex items-center gap-2"><input type="radio" name="unternehmen" value="JA" checked={unternehmen === "JA"} onChange={() => setUnternehmen("JA")} /> JA</label>
              </div>
            </div>

            {unternehmen === "JA" && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                <div className="mb-4 text-sm font-semibold text-white/80">Unternehmensdaten</div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="rechtsform" className="mb-1 block text-sm text-white/80">Rechtsform</label>
                    <select id="rechtsform" value={company.rechtsform} onChange={(e) => setCompany({ ...company, rechtsform: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required>
                      <option value="">Bitte wählen</option>
                      {rechtsformen.map(r => (<option key={r} value={r}>{r}</option>))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="firmenname" className="mb-1 block text-sm text-white/80">Firmenname</label>
                    <input id="firmenname" value={company.firmenname} onChange={(e) => setCompany({ ...company, firmenname: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="firmenanschrift" className="mb-1 block text-sm text-white/80">Firmenanschrift</label>
                    <input id="firmenanschrift" value={company.firmenanschrift} onChange={(e) => setCompany({ ...company, firmenanschrift: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
                  </div>
                  <div>
                    <label htmlFor="cplz" className="mb-1 block text-sm text-white/80">PLZ</label>
                    <input id="cplz" value={company.plz} onChange={(e) => setCompany({ ...company, plz: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
                  </div>
                  <div>
                    <label htmlFor="cort" className="mb-1 block text-sm text-white/80">Ort</label>
                    <input id="cort" value={company.ort} onChange={(e) => setCompany({ ...company, ort: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
                  </div>
                  <div>
                    <label htmlFor="cland" className="mb-1 block text-sm text-white/80">Land</label>
                    <select id="cland" value={company.land} onChange={(e) => setCompany({ ...company, land: e.target.value as LandCode })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10">
                      <option value="AT">Österreich</option>
                      <option value="DE">Deutschland</option>
                      <option value="CH">Schweiz</option>
                      <option value="EU">EU</option>
                      <option value="OTHER">Anderes</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="uid" className="mb-1 block text-sm text-white/80">UID</label>
                    <input id="uid" value={company.uid} onChange={(e) => setCompany({ ...company, uid: e.target.value.toUpperCase() })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 uppercase outline-none transition focus:border-electric-500/60 focus:bg-white/10" placeholder={company.land === "AT" ? "ATU########" : company.land === "DE" ? "DE#########" : "Ländercode + Nummer"} required />
                  </div>
                  <div>
                    <label htmlFor="branche" className="mb-1 block text-sm text-white/80">Branche</label>
                    <input id="branche" value={company.branche} onChange={(e) => setCompany({ ...company, branche: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" required />
                  </div>
                  <div>
                    <label htmlFor="rechnungsMail" className="mb-1 block text-sm text-white/80">Rechnungs-E-Mail</label>
                    <input id="rechnungsMail" type="email" value={company.rechnungsMail} onChange={(e) => setCompany({ ...company, rechnungsMail: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none transition focus:border-electric-500/60 focus:bg-white/10" placeholder="billing@firma.com" required />
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-sm text-white/90">
                <input type="checkbox" checked={acceptPrivacy} onChange={(e) => setAcceptPrivacy(e.target.checked)} />
                Datenschutzerklärung akzeptiert (erforderlich)
              </label>
              <label className="flex items-center gap-3 text-sm text-white/90">
                <input type="checkbox" checked={acceptAGB} onChange={(e) => setAcceptAGB(e.target.checked)} />
                AGB gelesen und akzeptiert (erforderlich)
              </label>
              <label className="flex items-center gap-3 text-sm text-white/90">
                <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} />
                Newsletter, Infos, Angebote (freiwillig)
              </label>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link to="/login" className="text-sm text-electric-400 hover:text-electric-300">Bereits Konto? Anmelden</Link>
              <button type="submit" className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-electric-500 px-5 py-2.5 font-semibold text-night-900 transition hover:bg-electric-400 focus:outline-none focus:ring-2 focus:ring-electric-500/50">
                <span className="absolute inset-0 -translate-x-full bg-white/30 blur-xl transition group-hover:translate-x-0" />
                Registrieren
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
