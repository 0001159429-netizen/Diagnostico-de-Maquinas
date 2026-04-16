import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { MachineData } from "@/lib/diagnostics";

const TYPES = [
  "Motor Industrial Trifásico",
  "Compressor de Ar Parafuso",
  "Bomba Centrífuga",
  "Ventilador Industrial",
  "Redutor de Velocidade",
];

const inputCls =
  "w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

export function ValidationStep({
  imageUrl, initial, onConfirm, onBack,
}: {
  imageUrl: string;
  initial: MachineData;
  onConfirm: (d: MachineData) => void;
  onBack: () => void;
}) {
  const [data, setData] = useState(initial);
  const set = <K extends keyof MachineData>(k: K, v: MachineData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
          Etapa 2 · Validação
        </div>
        <h2 className="text-3xl font-bold text-foreground">Revise os dados identificados pela IA</h2>
        <p className="text-muted-foreground mt-1">
          Ajuste qualquer campo se necessário antes de gerar o diagnóstico completo.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card">
            <img src={imageUrl} alt="Máquina" className="w-full aspect-square object-cover" />
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={2} />
                Imagem analisada com sucesso
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 bg-card rounded-2xl border border-border shadow-card p-6 space-y-5">
          <Field label="Tipo de máquina">
            <select className={inputCls} value={data.type} onChange={(e) => set("type", e.target.value)}>
              {TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Ano de fabricação">
              <input type="number" className={inputCls} value={data.year}
                onChange={(e) => set("year", +e.target.value)} />
            </Field>
            <Field label="Potência (kW)">
              <input type="number" className={inputCls} value={data.power}
                onChange={(e) => set("power", +e.target.value)} />
            </Field>
          </div>

          <Field label="Horas de uso por dia">
            <input type="number" className={inputCls} value={data.hours}
              onChange={(e) => set("hours", +e.target.value)} />
          </Field>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              Voltar
            </button>
            <button
              onClick={() => onConfirm(data)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2.5 rounded-lg transition-colors shadow-card"
            >
              Gerar diagnóstico completo
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
