import type { LucideIcon } from "lucide-react";

export function MetricCard({
  Icon, label, value, unit, sub,
}: { Icon: LucideIcon; label: string; value: string; unit: string; sub?: string }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 shadow-card hover:shadow-elevated transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="w-9 h-9 rounded-lg bg-accent text-primary flex items-center justify-center">
          <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
        </div>
      </div>
      <div className="flex items-baseline gap-1.5">
        <div className="text-3xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{unit}</div>
      </div>
      {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
    </div>
  );
}
