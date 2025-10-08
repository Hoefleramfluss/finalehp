import { useMemo, useState, type ChangeEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import { computeROI, roiDefaults, type RoiInputs } from "@/lib/costs";
import { formatCurrency, formatNumber, formatPercent, formatPaybackMonths } from "@/lib/format";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { InfoIcon } from "@/components/icons";

type SliderConfig = {
  key: keyof RoiInputs;
  label: string;
  min: number;
  max: number;
  step: number;
};

type CostConfig = {
  key: keyof RoiInputs;
  label: string;
  step: number;
};

const sliderConfig: SliderConfig[] = [
  {
    key: "callsPerDay",
    label: "Anrufe pro Tag",
    min: 5,
    max: 60,
    step: 1,
  },
  {
    key: "avgMinutesPerCall",
    label: "Ø Minuten pro Anruf",
    min: 1,
    max: 12,
    step: 0.5,
  },
  {
    key: "workDaysPerMonth",
    label: "Arbeitstage pro Monat",
    min: 10,
    max: 26,
    step: 1,
  },
  {
    key: "conversionRate",
    label: "Terminquote",
    min: 0.1,
    max: 0.65,
    step: 0.01,
  },
  {
    key: "valuePerAppointment",
    label: "Wert pro Termin (€)",
    min: 60,
    max: 400,
    step: 5,
  },
];

const costInputs: CostConfig[] = [
  {
    key: "costPerMinuteTwilio",
    label: "Telco-Kosten / Min",
    step: 0.005,
  },
  {
    key: "costPerMinuteSTT_TTS",
    label: "AI (STT+TTS) / Min",
    step: 0.003,
  },
  {
    key: "hostingFixedPerMonth",
    label: "Hosting Fixkosten",
    step: 5,
  },
  {
    key: "subscriptionFee",
    label: "Workflow AI Subscription",
    step: 10,
  },
];

export default function ROI() {
  const [inputs, setInputs] = useState<RoiInputs>(roiDefaults);
  const result = useMemo(() => computeROI(inputs), [inputs]);

  const handleSliderChange = (key: keyof RoiInputs) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseFloat(event.target.value);
      setInputs((prev) => ({ ...prev, [key]: value }));
    };

  const handleInputChange = (key: keyof RoiInputs) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseFloat(event.target.value.replace(",", "."));
      if (Number.isNaN(value)) return;
      setInputs((prev) => ({ ...prev, [key]: value }));
    };

  return (
    <section
      id="roi"
      className="relative isolate mx-auto mt-12 w-full max-w-6xl px-6"
      aria-labelledby="roi-heading"
    >
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-electric-500/10 via-transparent to-electric-500/10 blur-3xl" />
      <div className="rounded-[34px] border border-white/10 bg-night-900/80 p-10 shadow-[0_30px_120px_-60px_rgba(0,188,212,0.55)] backdrop-blur-xl">
        <header className="flex flex-col gap-4">
          <h2 id="roi-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ROI in Minuten – mit realistischen Defaults
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Passen Sie Volumen, Conversion und Kosten live an. Der Rechner zeigt sofort, wie sich Profit,
            ROI und Payback verändern. Alle Werte vollständig editierbar.
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-10">
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white/80">Volumen & Performance</h3>
              <div className="space-y-6">
                {sliderConfig.map((config) => (
                  <div key={config.key} className="space-y-3">
                    <div className="flex items-center justify-between gap-4 text-sm text-white/60">
                      <label htmlFor={config.key}>{config.label}</label>
                      <input
                        type="number"
                        inputMode="decimal"
                        id={config.key}
                        value={inputs[config.key]}
                        step={config.step}
                        min={config.min}
                        max={config.max}
                        aria-label={config.label}
                        onChange={handleInputChange(config.key)}
                        className="w-24 rounded-xl border border-white/10 bg-night-900/80 px-3 py-1 text-right text-sm text-white"
                      />
                    </div>
                    <input
                      type="range"
                      min={config.min}
                      max={config.max}
                      step={config.step}
                      value={inputs[config.key]}
                      onChange={handleSliderChange(config.key)}
                      className="w-full accent-electric-500"
                      aria-describedby={`${config.key}-value`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white/80">Kostenannahmen</h3>
                <button
                  type="button"
                  onClick={() => setInputs(roiDefaults)}
                  className="text-sm font-medium text-electric-400 hover:text-electric-500"
                >
                  Defaults laden
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {costInputs.map((config) => (
                  <label key={config.key} className="flex flex-col gap-2 text-sm text-white/60">
                    <span className="inline-flex items-center gap-2">
                      {config.label}
                      <button
                        type="button"
                        className="group relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 text-white/50"
                        aria-label={`${config.label} Info`}
                      >
                        <InfoIcon className="h-3.5 w-3.5" />
                        <span className="pointer-events-none absolute -top-2 left-1/2 z-20 hidden w-40 -translate-x-1/2 -translate-y-full rounded-xl border border-white/10 bg-night-900/90 px-3 py-2 text-xs text-white group-hover:block">
                          Wert editierbar – enthält alle variablen Kosten.
                        </span>
                      </button>
                    </span>
                    <input
                      type="number"
                      step={config.step}
                      value={inputs[config.key]}
                      onChange={handleInputChange(config.key)}
                      className="rounded-xl border border-white/10 bg-night-900/80 px-3 py-2 text-right text-sm text-white"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-night-900/70 p-6">
            <div className="absolute inset-x-6 top-0 h-32 rounded-[30px] bg-gradient-to-br from-electric-500/20 via-white/5 to-electric-400/20 blur-lg" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Ergebnis</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Ihr monatlicher Impact</h3>
            </div>

            <div className="grid gap-4">
              <ResultCard
                label="Monatliche Minuten"
                value={formatNumber(result.monthlyMinutes)}
                tone="neutral"
              />
              <ResultCard
                label="Erlöse durch Termine"
                value={formatCurrency(result.incrementalRevenue)}
                tone="positive"
              />
              <ResultCard
                label="Gesamtkosten"
                value={formatCurrency(result.totalCosts)}
                tone="neutral"
              />
              <ResultCard
                label="Gewinn"
                value={formatCurrency(result.profit)}
                tone={result.profit >= 0 ? "positive" : "negative"}
              />
            </div>

            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>ROI</span>
                <span>{formatPercent(result.roiPct / 100)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Payback</span>
                <span>{formatPaybackMonths(result.paybackMonths)}</span>
              </div>
            </div>

            <AnimatePresence>
              {result.profit >= 0 ? (
                <motion.div
                  key="profit"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="rounded-2xl border border-electric-500/30 bg-electric-500/10 p-5 text-sm text-electric-100"
                >
                  Ihr Agent amortisiert sich in {formatPaybackMonths(result.paybackMonths)}. Jeder weitere Monat
                  erzeugt zusätzlichen Gewinn.
                </motion.div>
              ) : (
                <motion.div
                  key="loss"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="rounded-2xl border border-white/10 bg-red-500/10 p-5 text-sm text-red-200"
                >
                  Optimieren Sie Volumen oder Terminwert, um in die Profitzone zu gelangen. Unser Team unterstützt
                  bei Szenarioanalysen.
                </motion.div>
              )}
            </AnimatePresence>

            <ShimmerButton asLink href="#contact" className="justify-center text-base">
              ROI-Report erhalten
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
}

type ResultCardProps = {
  label: string;
  value: string;
  tone: "positive" | "negative" | "neutral";
};

function ResultCard({ label, value, tone }: ResultCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-night-900/70 p-5",
        {
          "border-electric-500/40 bg-electric-500/10": tone === "positive",
          "border-red-500/30 bg-red-500/10": tone === "negative",
        }
      )}
    >
      <p className="text-sm text-white/60">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
