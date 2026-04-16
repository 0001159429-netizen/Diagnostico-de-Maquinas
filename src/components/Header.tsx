import { useState } from "react";
import { Activity, Bell, Search, Settings, CircleUser, ChevronDown, type LucideIcon } from "lucide-react";

const NAV = ["Diagnóstico", "Histórico", "Relatórios", "Suporte"];

function IconBtn({ Icon, label, dot }: { Icon: LucideIcon; label: string; dot?: boolean }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
    >
      <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
      {dot && <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary" />}
    </button>
  );
}

export function Header() {
  const [active, setActive] = useState("Diagnóstico");

  return (
    <header className="border-b border-border bg-background sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <button
          type="button"
          onClick={() => setActive("Diagnóstico")}
          className="flex items-center gap-3 group"
          aria-label="IndustrIA — Início"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-card group-hover:shadow-elevated transition-shadow">
            <Activity className="w-5 h-5" strokeWidth={2.25} />
          </div>
          <div className="text-left">
            <div className="font-semibold text-foreground leading-tight">IndustrIA</div>
            <div className="text-xs text-muted-foreground leading-tight">Diagnóstico Inteligente</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setActive(label)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                active === label
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <IconBtn Icon={Search} label="Buscar" />
          <IconBtn Icon={Bell} label="Notificações" dot />
          <IconBtn Icon={Settings} label="Configurações" />
          <div className="w-px h-6 bg-border mx-1" />
          <button
            type="button"
            className="flex items-center gap-2 pl-1.5 pr-2 py-1 rounded-md hover:bg-muted transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
              <CircleUser className="w-[18px] h-[18px]" strokeWidth={1.75} />
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
