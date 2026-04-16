import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { UploadStep } from "@/components/UploadStep";
import { AnalysisStep } from "@/components/AnalysisStep";
import { ValidationStep } from "@/components/ValidationStep";
import { DashboardStep } from "@/components/DashboardStep";
import { simulateAIAnalysis, type MachineData } from "@/lib/diagnostics";

export const Route = createFileRoute("/")({
  component: Index,
});

type Stage = "upload" | "analysis" | "validation" | "dashboard";

function Index() {
  const [stage, setStage] = useState<Stage>("upload");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [aiData, setAiData] = useState<MachineData | null>(null);
  const [confirmed, setConfirmed] = useState<MachineData | null>(null);

  const reset = () => {
    setStage("upload");
    setImageUrl("");
    setAiData(null);
    setConfirmed(null);
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="px-6 py-12">
        {stage === "upload" && (
          <UploadStep
            onUpload={(_, url) => {
              setImageUrl(url);
              setAiData(simulateAIAnalysis());
              setStage("analysis");
            }}
          />
        )}
        {stage === "analysis" && (
          <AnalysisStep imageUrl={imageUrl} onDone={() => setStage("validation")} />
        )}
        {stage === "validation" && aiData && (
          <ValidationStep
            imageUrl={imageUrl}
            initial={aiData}
            onBack={reset}
            onConfirm={(d) => {
              setConfirmed(d);
              setStage("dashboard");
            }}
          />
        )}
        {stage === "dashboard" && confirmed && (
          <DashboardStep data={confirmed} onReset={reset} />
        )}
      </main>
      <footer className="border-t border-border mt-16 py-6 text-center text-xs text-muted-foreground">
        Sistema Inteligente de Diagnóstico · Análises geradas por IA simulada
      </footer>
    </div>
  );
}
