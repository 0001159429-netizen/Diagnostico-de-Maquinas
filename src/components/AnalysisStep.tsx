import { useEffect, useState } from "react";
import { Check, Cpu } from "lucide-react";

const STEPS = [
  "Analisando imagens enviadas...",
  "Identificando componentes e geometria...",
  "Estimando idade e nível de eficiência...",
  "Calculando consumo energético e emissões...",
  "Gerando recomendações de retrofit...",
];

export function AnalysisStep({ imageUrl, onDone }: { imageUrl: string; onDone: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= STEPS.length) {
      const t = setTimeout(onDone, 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 600);
    return () => clearTimeout(t);
  }, [step, onDone]);

  const progress = Math.min(100, (step / STEPS.length) * 100);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative rounded-2xl overflow-hidden bg-muted shadow-elevated aspect-square">
          <img src={imageUrl} alt="Máquina" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-medium text-foreground flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
            Processando IA
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute left-0 right-0 h-px bg-primary/70 shadow-[0_0_12px_rgba(61,205,88,0.8)]"
              style={{
                top: `${(step / STEPS.length) * 100}%`,
                transition: "top 0.6s ease",
              }}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">Análise em andamento</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Nossa IA está processando a imagem da máquina industrial.
          </p>

          <div className="h-2 rounded-full bg-muted overflow-hidden mb-6">
            <div
              className="h-full bg-gradient-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ul className="space-y-3">
            {STEPS.map((label, i) => {
              const done = i < step;
              const active = i === step;
              return (
                <li key={label} className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      done
                        ? "bg-primary text-primary-foreground"
                        : active
                          ? "bg-accent text-primary border-2 border-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {done ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : i + 1}
                  </div>
                  <span
                    className={`text-sm ${
                      done
                        ? "text-foreground"
                        : active
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
