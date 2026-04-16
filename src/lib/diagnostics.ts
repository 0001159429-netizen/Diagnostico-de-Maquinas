export type MachineData = {
  type: string;
  year: number;
  power: number;
  hours: number;
};

const MACHINE_TYPES = [
  "Motor Industrial Trifásico",
  "Compressor de Ar Parafuso",
  "Bomba Centrífuga",
  "Ventilador Industrial",
  "Redutor de Velocidade",
];

export function simulateAIAnalysis(): MachineData {
  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  return {
    type: MACHINE_TYPES[rand(0, MACHINE_TYPES.length - 1)],
    year: rand(1992, 2012),
    power: rand(15, 75),
    hours: [6, 8, 10, 12, 16][rand(0, 4)],
  };
}

export type Diagnosis = {
  consumption: number; // kWh/year
  co2: number; // tons/year
  efficiency: number; // %
  efficiencyLabel: string;
  cost: number; // R$/year
};

export function computeDiagnosis(d: MachineData): Diagnosis {
  const consumption = Math.round(d.power * d.hours * 365);
  const co2 = +(consumption * 0.0001).toFixed(2); // tons
  const ageFactor = Math.max(0, 2024 - d.year);
  const efficiency = Math.max(35, Math.min(95, 95 - ageFactor * 1.4));
  const efficiencyLabel =
    efficiency >= 80 ? "Excelente" : efficiency >= 65 ? "Boa" : efficiency >= 50 ? "Regular" : "Baixa";
  const cost = Math.round(consumption * 0.75);
  return { consumption, co2, efficiency: Math.round(efficiency), efficiencyLabel, cost };
}

export type RecommendationIcon = "settings" | "plug" | "radio" | "wrench";

export type Recommendation = {
  title: string;
  description: string;
  savings: number; // %
  co2Reduction: number; // %
  roi: number; // months
  icon: RecommendationIcon;
};

export function generateRecommendations(d: MachineData, diag: Diagnosis): Recommendation[] {
  const recs: Recommendation[] = [];
  if (d.year < 2005) {
    recs.push({
      title: "Substituição por Motor IE4",
      description: "Troca por motor de alta eficiência classe IE4 com tecnologia atualizada.",
      savings: 28,
      co2Reduction: 30,
      roi: 22,
      icon: "settings",
    });
  }
  if (diag.consumption > 60000) {
    recs.push({
      title: "Instalação de Inversor de Frequência (VFD)",
      description: "Controle preciso de velocidade reduz consumo em cargas variáveis.",
      savings: 22,
      co2Reduction: 24,
      roi: 14,
      icon: "plug",
    });
  }
  recs.push({
    title: "Sensores IoT de Monitoramento",
    description: "Sensores de vibração, temperatura e corrente para manutenção preditiva.",
    savings: 12,
    co2Reduction: 10,
    roi: 9,
    icon: "radio",
  });
  if (diag.efficiency < 70) {
    recs.push({
      title: "Otimização de Carga e Acoplamento",
      description: "Realinhamento mecânico e ajuste de carga para reduzir perdas.",
      savings: 8,
      co2Reduction: 7,
      roi: 4,
      icon: "wrench",
    });
  }
  return recs;
}

export type Alert = {
  level: "info" | "warning" | "critical";
  title: string;
  time: string;
};

export function generateAlerts(): Alert[] {
  return [
    { level: "warning", title: "Consumo 12% acima do esperado nas últimas 4h", time: "há 8 min" },
    { level: "info", title: "Operação em vazio detectada (15 min)", time: "há 32 min" },
    { level: "critical", title: "Vibração anormal no eixo principal — 4.2 mm/s", time: "há 1h" },
    { level: "info", title: "Temperatura do enrolamento estável (68°C)", time: "há 2h" },
    { level: "warning", title: "Fator de potência abaixo de 0,85", time: "há 3h" },
  ];
}
