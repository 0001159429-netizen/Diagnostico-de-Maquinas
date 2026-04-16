import { Zap, Leaf, BatteryCharging, Gauge, Activity } from "lucide-react";
import type { MachineData } from "@/lib/diagnostics";
import { computeDiagnosis, generateRecommendations, generateAlerts } from "@/lib/diagnostics";
import { MetricCard } from "./dashboard/MetricCard";
import { CircularGauge } from "./dashboard/CircularGauge";
import { RecommendationCard } from "./dashboard/RecommendationCard";
import { AlertList } from "./dashboard/AlertList";

function SectionHeader({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      {right}
    </div>
  );
}

export function DashboardStep({ data, onReset }: { data: MachineData; onReset: () => void }) {
  const diag = computeDiagnosis(data);
  const recs = generateRecommendations(data, diag);
  const alerts = generateAlerts();

  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
            Diagnóstico Completo
          </div>
          <h2 className="text-3xl font-bold text-foreground">{data.type}</h2>
          <p className="text-muted-foreground">{data.power} kW · {data.year} · {data.hours}h/dia</p>
        </div>
        <button
          onClick={onReset}
          className="border border-border hover:bg-muted text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Nova análise
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard Icon={Zap} label="Consumo anual"
          value={diag.consumption.toLocaleString("pt-BR")} unit="kWh"
          sub={`R$ ${diag.cost.toLocaleString("pt-BR")} / ano`} />
        <MetricCard Icon={Leaf} label="Emissões CO₂"
          value={diag.co2.toString()} unit="t/ano" sub="fator 0,1 kg CO₂/kWh" />
        <MetricCard Icon={BatteryCharging} label="Potência nominal"
          value={data.power.toString()} unit="kW" sub={`${data.hours}h diárias`} />
        <div className="bg-card rounded-2xl border border-border p-5 shadow-card flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" strokeWidth={2} />
              Eficiência
            </div>
            <div className="text-xl font-bold text-foreground mt-2">{diag.efficiencyLabel}</div>
            <div className="text-xs text-muted-foreground">Estimada pela IA</div>
          </div>
          <CircularGauge value={diag.efficiency} label="EFF" />
        </div>
      </div>

      <section>
        <SectionHeader
          title="Recomendações de Retrofit"
          right={<span className="text-xs text-muted-foreground">{recs.length} sugestões</span>}
        />
        <div className="grid md:grid-cols-2 gap-4">
          {recs.map((r) => <RecommendationCard key={r.title} r={r} />)}
        </div>
      </section>

      <section>
        <SectionHeader
          title="Monitoramento Inteligente"
          right={
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Activity className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
              Tempo real
            </div>
          }
        />
        <AlertList alerts={alerts} />
      </section>
    </div>
  );
}
