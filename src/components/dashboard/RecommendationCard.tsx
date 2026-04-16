import { Settings2, PlugZap, RadioTower, Wrench, type LucideIcon } from "lucide-react";
import type { Recommendation, RecommendationIcon } from "@/lib/diagnostics";

const ICONS: Record<RecommendationIcon, LucideIcon> = {
  settings: Settings2, plug: PlugZap, radio: RadioTower, wrench: Wrench,
};

export function RecommendationCard({ r }: { r: Recommendation }) {
  const Icon = ICONS[r.icon];
  const Stat = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
    <div>
      <div className="text-[10px] text-muted-foreground uppercase">{label}</div>
      <div className={`text-lg font-bold ${accent ? "text-primary" : "text-foreground"}`}>{value}</div>
    </div>
  );
  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-card hover:shadow-elevated hover:border-primary/40 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <div>
          <div className="font-semibold text-foreground">{r.title}</div>
          <div className="text-sm text-muted-foreground">{r.description}</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
        <Stat label="Economia" value={`${r.savings}%`} accent />
        <Stat label="CO₂" value={`-${r.co2Reduction}%`} />
        <Stat label="ROI" value={`${r.roi}m`} />
      </div>
    </div>
  );
}
