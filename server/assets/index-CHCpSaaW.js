import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-Dp-_Du1P.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$q = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$q);
const __iconNode$p = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$p);
const __iconNode$o = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$o);
const __iconNode$n = [
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935", key: "lre1cr" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936", key: "13q5k0" }]
];
const BatteryCharging = createLucideIcon("battery-charging", __iconNode$n);
const __iconNode$m = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$m);
const __iconNode$l = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$l);
const __iconNode$k = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$k);
const __iconNode$j = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$j);
const __iconNode$i = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$i);
const __iconNode$h = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$h);
const __iconNode$g = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
];
const CircleUser = createLucideIcon("circle-user", __iconNode$g);
const __iconNode$f = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
];
const CloudUpload = createLucideIcon("cloud-upload", __iconNode$f);
const __iconNode$e = [
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }]
];
const Cog = createLucideIcon("cog", __iconNode$e);
const __iconNode$d = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
];
const Cpu = createLucideIcon("cpu", __iconNode$d);
const __iconNode$c = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
];
const Gauge = createLucideIcon("gauge", __iconNode$c);
const __iconNode$b = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }]
];
const PlugZap = createLucideIcon("plug-zap", __iconNode$9);
const __iconNode$8 = [
  ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
  ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
  ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
  ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
  ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
  ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]
];
const RadioTower = createLucideIcon("radio-tower", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
];
const Settings2 = createLucideIcon("settings-2", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const NAV = ["Diagnóstico", "Histórico", "Relatórios", "Suporte"];
function IconBtn({ Icon: Icon2, label, dot }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "aria-label": label,
      className: "relative w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-[18px] h-[18px]", strokeWidth: 1.75 }),
        dot && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary" })
      ]
    }
  );
}
function Header() {
  const [active, setActive] = reactExports.useState("Diagnóstico");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border bg-background sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setActive("Diagnóstico"),
        className: "flex items-center gap-3 group",
        "aria-label": "IndustrIA — Início",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-card group-hover:shadow-elevated transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5", strokeWidth: 2.25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground leading-tight", children: "IndustrIA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground leading-tight", children: "Diagnóstico Inteligente" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1 text-sm", children: NAV.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActive(label),
        className: `px-3 py-1.5 rounded-md transition-colors ${active === label ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
        children: label
      },
      label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { Icon: Search, label: "Buscar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { Icon: Bell, label: "Notificações", dot: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { Icon: Settings, label: "Configurações" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-6 bg-border mx-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "flex items-center gap-2 pl-1.5 pr-2 py-1 rounded-md hover:bg-muted transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUser, { className: "w-[18px] h-[18px]", strokeWidth: 1.75 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-muted-foreground", strokeWidth: 2 })
          ]
        }
      )
    ] })
  ] }) });
}
const TIPS = [
  { Icon: Camera, title: "Visão geral", desc: "Foto ampla da máquina completa" },
  { Icon: Tag, title: "Placa de identificação", desc: "Dados técnicos do equipamento" },
  { Icon: Cog, title: "Componentes internos", desc: "Detalhes mecânicos (opcional)" }
];
function UploadStep({ onUpload }) {
  const inputRef = reactExports.useRef(null);
  const [drag, setDrag] = reactExports.useState(false);
  const handle = (file) => {
    if (!file) return;
    onUpload(file, URL.createObjectURL(file));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto animate-fade-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5", strokeWidth: 2 }),
        "Análise por Inteligência Artificial"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3", children: [
        "Diagnóstico de máquinas ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "em ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "segundos" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Envie imagens da sua máquina e nossa IA analisa o consumo, emissões e oportunidades de retrofit automaticamente." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onDragOver: (e) => {
          e.preventDefault();
          setDrag(true);
        },
        onDragLeave: () => setDrag(false),
        onDrop: (e) => {
          e.preventDefault();
          setDrag(false);
          handle(e.dataTransfer.files?.[0]);
        },
        onClick: () => inputRef.current?.click(),
        className: `relative cursor-pointer rounded-2xl border-2 border-dashed bg-card p-12 text-center transition-all shadow-card hover:shadow-elevated ${drag ? "border-primary bg-accent/40 scale-[1.01]" : "border-border hover:border-primary/50"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: inputRef,
              type: "file",
              accept: "image/*,video/*",
              className: "hidden",
              onChange: (e) => handle(e.target.files?.[0])
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-elevated animate-pulse-ring", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { className: "w-9 h-9", strokeWidth: 1.75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: "Envie imagens da máquina para análise automática com IA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Arraste e solte ou clique para selecionar — JPG, PNG, MP4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2.5 rounded-lg transition-colors shadow-card", children: "Selecionar arquivo" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4 mt-8", children: TIPS.map(({ Icon: Icon2, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 shadow-card hover:shadow-elevated transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-accent text-primary flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-[18px] h-[18px]", strokeWidth: 1.75 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: desc })
    ] }, title)) })
  ] });
}
const STEPS = [
  "Analisando imagens enviadas...",
  "Identificando componentes e geometria...",
  "Estimando idade e nível de eficiência...",
  "Calculando consumo energético e emissões...",
  "Gerando recomendações de retrofit..."
];
function AnalysisStep({ imageUrl, onDone }) {
  const [step, setStep] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (step >= STEPS.length) {
      const t2 = setTimeout(onDone, 400);
      return () => clearTimeout(t2);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 600);
    return () => clearTimeout(t);
  }, [step, onDone]);
  const progress = Math.min(100, step / STEPS.length * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-muted shadow-elevated aspect-square", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, alt: "Máquina", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-medium text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-3.5 h-3.5 text-primary", strokeWidth: 2 }),
        "Processando IA"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-0 right-0 h-px bg-primary/70 shadow-[0_0_12px_rgba(61,205,88,0.8)]",
          style: {
            top: `${step / STEPS.length * 100}%`,
            transition: "top 0.6s ease"
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground mb-1", children: "Análise em andamento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Nossa IA está processando a imagem da máquina industrial." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full bg-gradient-primary transition-all duration-500",
          style: { width: `${progress}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: STEPS.map((label, i) => {
        const done = i < step;
        const active = i === step;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${done ? "bg-primary text-primary-foreground" : active ? "bg-accent text-primary border-2 border-primary" : "bg-muted text-muted-foreground"}`,
              children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5", strokeWidth: 3 }) : i + 1
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-sm ${done ? "text-foreground" : active ? "text-foreground font-medium" : "text-muted-foreground"}`,
              children: label
            }
          )
        ] }, label);
      }) })
    ] })
  ] }) });
}
const TYPES = [
  "Motor Industrial Trifásico",
  "Compressor de Ar Parafuso",
  "Bomba Centrífuga",
  "Ventilador Industrial",
  "Redutor de Velocidade"
];
const inputCls = "w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5", children })
  ] });
}
function ValidationStep({
  imageUrl,
  initial,
  onConfirm,
  onBack
}) {
  const [data, setData] = reactExports.useState(initial);
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto animate-fade-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-1", children: "Etapa 2 · Validação" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Revise os dados identificados pela IA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Ajuste qualquer campo se necessário antes de gerar o diagnóstico completo." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden shadow-card border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, alt: "Máquina", className: "w-full aspect-square object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary", strokeWidth: 2 }),
          "Imagem analisada com sucesso"
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 bg-card rounded-2xl border border-border shadow-card p-6 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tipo de máquina", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputCls, value: data.type, onChange: (e) => set("type", e.target.value), children: TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: t }, t)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Ano de fabricação", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              className: inputCls,
              value: data.year,
              onChange: (e) => set("year", +e.target.value)
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Potência (kW)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              className: inputCls,
              value: data.power,
              onChange: (e) => set("power", +e.target.value)
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Horas de uso por dia", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            className: inputCls,
            value: data.hours,
            onChange: (e) => set("hours", +e.target.value)
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onBack,
              className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4", strokeWidth: 2 }),
                "Voltar"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => onConfirm(data),
              className: "inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2.5 rounded-lg transition-colors shadow-card",
              children: [
                "Gerar diagnóstico completo",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4", strokeWidth: 2 })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const MACHINE_TYPES = [
  "Motor Industrial Trifásico",
  "Compressor de Ar Parafuso",
  "Bomba Centrífuga",
  "Ventilador Industrial",
  "Redutor de Velocidade"
];
function simulateAIAnalysis() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return {
    type: MACHINE_TYPES[rand(0, MACHINE_TYPES.length - 1)],
    year: rand(1992, 2012),
    power: rand(15, 75),
    hours: [6, 8, 10, 12, 16][rand(0, 4)]
  };
}
function computeDiagnosis(d) {
  const consumption = Math.round(d.power * d.hours * 365);
  const co2 = +(consumption * 1e-4).toFixed(2);
  const ageFactor = Math.max(0, 2024 - d.year);
  const efficiency = Math.max(35, Math.min(95, 95 - ageFactor * 1.4));
  const efficiencyLabel = efficiency >= 80 ? "Excelente" : efficiency >= 65 ? "Boa" : efficiency >= 50 ? "Regular" : "Baixa";
  const cost = Math.round(consumption * 0.75);
  return { consumption, co2, efficiency: Math.round(efficiency), efficiencyLabel, cost };
}
function generateRecommendations(d, diag) {
  const recs = [];
  if (d.year < 2005) {
    recs.push({
      title: "Substituição por Motor IE4",
      description: "Troca por motor de alta eficiência classe IE4 com tecnologia atualizada.",
      savings: 28,
      co2Reduction: 30,
      roi: 22,
      icon: "settings"
    });
  }
  if (diag.consumption > 6e4) {
    recs.push({
      title: "Instalação de Inversor de Frequência (VFD)",
      description: "Controle preciso de velocidade reduz consumo em cargas variáveis.",
      savings: 22,
      co2Reduction: 24,
      roi: 14,
      icon: "plug"
    });
  }
  recs.push({
    title: "Sensores IoT de Monitoramento",
    description: "Sensores de vibração, temperatura e corrente para manutenção preditiva.",
    savings: 12,
    co2Reduction: 10,
    roi: 9,
    icon: "radio"
  });
  if (diag.efficiency < 70) {
    recs.push({
      title: "Otimização de Carga e Acoplamento",
      description: "Realinhamento mecânico e ajuste de carga para reduzir perdas.",
      savings: 8,
      co2Reduction: 7,
      roi: 4,
      icon: "wrench"
    });
  }
  return recs;
}
function generateAlerts() {
  return [
    { level: "warning", title: "Consumo 12% acima do esperado nas últimas 4h", time: "há 8 min" },
    { level: "info", title: "Operação em vazio detectada (15 min)", time: "há 32 min" },
    { level: "critical", title: "Vibração anormal no eixo principal — 4.2 mm/s", time: "há 1h" },
    { level: "info", title: "Temperatura do enrolamento estável (68°C)", time: "há 2h" },
    { level: "warning", title: "Fator de potência abaixo de 0,85", time: "há 3h" }
  ];
}
function MetricCard({
  Icon: Icon2,
  label,
  value,
  unit,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-5 shadow-card hover:shadow-elevated transition-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-accent text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-[18px] h-[18px]", strokeWidth: 1.75 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-foreground", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: unit })
    ] }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: sub })
  ] });
}
function CircularGauge({ value, label }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "-rotate-90 w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r, stroke: "var(--muted)", strokeWidth: "8", fill: "none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "50",
          cy: "50",
          r,
          stroke: "var(--primary)",
          strokeWidth: "8",
          fill: "none",
          strokeLinecap: "round",
          strokeDasharray: c,
          strokeDashoffset: c - value / 100 * c,
          style: { transition: "stroke-dashoffset 1s ease" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold text-foreground", children: [
        value,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: label })
    ] })
  ] });
}
const ICONS$1 = {
  settings: Settings2,
  plug: PlugZap,
  radio: RadioTower,
  wrench: Wrench
};
function RecommendationCard({ r }) {
  const Icon2 = ICONS$1[r.icon];
  const Stat = ({ label, value, accent }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-lg font-bold ${accent ? "text-primary" : "text-foreground"}`, children: value })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 shadow-card hover:shadow-elevated hover:border-primary/40 transition-all", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-5 h-5", strokeWidth: 1.75 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: r.description })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 pt-3 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Economia", value: `${r.savings}%`, accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "CO₂", value: `-${r.co2Reduction}%` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "ROI", value: `${r.roi}m` })
    ] })
  ] });
}
const STYLES = {
  critical: "bg-destructive/10 text-destructive border-destructive/20",
  warning: "bg-warning/10 text-amber-700 border-warning/30",
  info: "bg-accent text-accent-foreground border-primary/20"
};
const ICONS = { critical: CircleAlert, warning: TriangleAlert, info: Info };
function AlertList({ alerts }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden", children: alerts.map((a, i) => {
    const Icon2 = ICONS[a.level];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-4 p-4 ${i !== alerts.length - 1 ? "border-b border-border" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 rounded-full border flex items-center justify-center ${STYLES[a.level]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-[18px] h-[18px]", strokeWidth: 1.75 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground truncate", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground capitalize", children: a.level })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground shrink-0", children: a.time })
    ] }, i);
  }) });
}
function SectionHeader({ title, right }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: title }),
    right
  ] });
}
function DashboardStep({ data, onReset }) {
  const diag = computeDiagnosis(data);
  const recs = generateRecommendations(data, diag);
  const alerts = generateAlerts();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto animate-fade-in space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-1", children: "Diagnóstico Completo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-foreground", children: data.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          data.power,
          " kW · ",
          data.year,
          " · ",
          data.hours,
          "h/dia"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onReset,
          className: "border border-border hover:bg-muted text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors",
          children: "Nova análise"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MetricCard,
        {
          Icon: Zap,
          label: "Consumo anual",
          value: diag.consumption.toLocaleString("pt-BR"),
          unit: "kWh",
          sub: `R$ ${diag.cost.toLocaleString("pt-BR")} / ano`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MetricCard,
        {
          Icon: Leaf,
          label: "Emissões CO₂",
          value: diag.co2.toString(),
          unit: "t/ano",
          sub: "fator 0,1 kg CO₂/kWh"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MetricCard,
        {
          Icon: BatteryCharging,
          label: "Potência nominal",
          value: data.power.toString(),
          unit: "kW",
          sub: `${data.hours}h diárias`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-5 shadow-card flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-3.5 h-3.5", strokeWidth: 2 }),
            "Eficiência"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-foreground mt-2", children: diag.efficiencyLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Estimada pela IA" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircularGauge, { value: diag.efficiency, label: "EFF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          title: "Recomendações de Retrofit",
          right: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            recs.length,
            " sugestões"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: recs.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationCard, { r }, r.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          title: "Monitoramento Inteligente",
          right: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5 text-primary", strokeWidth: 2 }),
            "Tempo real"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertList, { alerts })
    ] })
  ] });
}
function Index() {
  const [stage, setStage] = reactExports.useState("upload");
  const [imageUrl, setImageUrl] = reactExports.useState("");
  const [aiData, setAiData] = reactExports.useState(null);
  const [confirmed, setConfirmed] = reactExports.useState(null);
  const reset = () => {
    setStage("upload");
    setImageUrl("");
    setAiData(null);
    setConfirmed(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "px-6 py-12", children: [
      stage === "upload" && /* @__PURE__ */ jsxRuntimeExports.jsx(UploadStep, { onUpload: (_, url) => {
        setImageUrl(url);
        setAiData(simulateAIAnalysis());
        setStage("analysis");
      } }),
      stage === "analysis" && /* @__PURE__ */ jsxRuntimeExports.jsx(AnalysisStep, { imageUrl, onDone: () => setStage("validation") }),
      stage === "validation" && aiData && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationStep, { imageUrl, initial: aiData, onBack: reset, onConfirm: (d) => {
        setConfirmed(d);
        setStage("dashboard");
      } }),
      stage === "dashboard" && confirmed && /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardStep, { data: confirmed, onReset: reset })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border mt-16 py-6 text-center text-xs text-muted-foreground", children: "Sistema Inteligente de Diagnóstico · Análises geradas por IA simulada" })
  ] });
}
export {
  Index as component
};
