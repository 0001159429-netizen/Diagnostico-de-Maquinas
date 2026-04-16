import { AlertCircle, AlertTriangle, Info } from "lucide-react";
import type { Alert } from "@/lib/diagnostics";

const STYLES: Record<Alert["level"], string> = {
  critical: "bg-destructive/10 text-destructive border-destructive/20",
  warning: "bg-warning/10 text-amber-700 border-warning/30",
  info: "bg-accent text-accent-foreground border-primary/20",
};
const ICONS = { critical: AlertCircle, warning: AlertTriangle, info: Info } as const;

export function AlertList({ alerts }: { alerts: Alert[] }) {
  return (
    <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
      {alerts.map((a, i) => {
        const Icon = ICONS[a.level];
        return (
          <div key={i} className={`flex items-center gap-4 p-4 ${i !== alerts.length - 1 ? "border-b border-border" : ""}`}>
            <div className={`w-9 h-9 rounded-full border flex items-center justify-center ${STYLES[a.level]}`}>
              <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">{a.title}</div>
              <div className="text-xs text-muted-foreground capitalize">{a.level}</div>
            </div>
            <div className="text-xs text-muted-foreground shrink-0">{a.time}</div>
          </div>
        );
      })}
    </div>
  );
}
