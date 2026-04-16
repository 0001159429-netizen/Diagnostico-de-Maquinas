export function CircularGauge({ value, label }: { value: number; label: string }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative w-24 h-24">
      <svg viewBox="0 0 100 100" className="-rotate-90 w-full h-full">
        <circle cx="50" cy="50" r={r} stroke="var(--muted)" strokeWidth="8" fill="none" />
        <circle
          cx="50" cy="50" r={r}
          stroke="var(--primary)" strokeWidth="8" fill="none" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c - (value / 100) * c}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-xl font-bold text-foreground">{value}%</div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
}
