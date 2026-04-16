import { useRef, useState } from "react";
import { UploadCloud, Camera, Tag, Cog, Sparkles, type LucideIcon } from "lucide-react";

const TIPS: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Camera, title: "Visão geral", desc: "Foto ampla da máquina completa" },
  { Icon: Tag, title: "Placa de identificação", desc: "Dados técnicos do equipamento" },
  { Icon: Cog, title: "Componentes internos", desc: "Detalhes mecânicos (opcional)" },
];

export function UploadStep({ onUpload }: { onUpload: (file: File, url: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);

  const handle = (file?: File | null) => {
    if (!file) return;
    onUpload(file, URL.createObjectURL(file));
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
          Análise por Inteligência Artificial
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
          Diagnóstico de máquinas <br />
          em <span className="text-primary">segundos</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Envie imagens da sua máquina e nossa IA analisa o consumo, emissões e oportunidades de
          retrofit automaticamente.
        </p>
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); handle(e.dataTransfer.files?.[0]); }}
        onClick={() => inputRef.current?.click()}
        className={`relative cursor-pointer rounded-2xl border-2 border-dashed bg-card p-12 text-center transition-all shadow-card hover:shadow-elevated ${
          drag ? "border-primary bg-accent/40 scale-[1.01]" : "border-border hover:border-primary/50"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={(e) => handle(e.target.files?.[0])}
        />
        <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-elevated animate-pulse-ring">
          <UploadCloud className="w-9 h-9" strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Envie imagens da máquina para análise automática com IA
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Arraste e solte ou clique para selecionar — JPG, PNG, MP4
        </p>
        <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2.5 rounded-lg transition-colors shadow-card">
          Selecionar arquivo
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {TIPS.map(({ Icon, title, desc }) => (
          <div key={title} className="bg-card border border-border rounded-xl p-4 shadow-card hover:shadow-elevated transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-accent text-primary flex items-center justify-center mb-2">
              <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
            </div>
            <div className="font-medium text-foreground text-sm">{title}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
