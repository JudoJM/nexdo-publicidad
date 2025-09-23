import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import nexdoDashboard from "@/assets/nexdo-dashboard.png";
import nexdoDark from "@/assets/nexdo-dark.png";
import nexdoFocus from "@/assets/nexdo-focus.png";
import nexdoStats from "@/assets/nexdo-stats.png";

const screenshots = [
  {
    id: 1,
    title: "Dashboard Principal",
    description: "Vista completa de tus tareas y hábitos diarios",
    image: nexdoDashboard,
    features: ["Tareas de hoy", "Hábitos diarios", "Progreso visual"]
  },
  {
    id: 2,
    title: "Modo Oscuro",
    description: "Interfaz elegante para trabajar sin fatiga visual",
    image: nexdoDark,
    features: ["Tema oscuro", "Mejor para la vista", "Trabajo nocturno"]
  },
  {
    id: 3,
    title: "Modo Enfoque Pomodoro",
    description: "Timer configurable para sesiones de concentración",
    image: nexdoFocus,
    features: ["Timer 25:00", "Tareas activas", "Configuración flexible"]
  },
  {
    id: 4,
    title: "Estadísticas Avanzadas",
    description: "Análisis detallado de tu productividad",
    image: nexdoStats,
    features: ["Gráficos interactivos", "Exportar PDF", "Comparación mensual"]
  }
];

const AppScreenshots = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Mira Nexdo</span> en acción
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo Nexdo transforma tu productividad con una interfaz 
            intuitiva y funciones potentes
          </p>
        </div>

        {/* Screenshot Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Screenshots Navigation */}
          <div className="space-y-4">
            {screenshots.map((screenshot, index) => (
              <Card
                key={screenshot.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedScreenshot === index 
                    ? "bg-primary/5 border-primary/50 shadow-glow" 
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedScreenshot(index)}
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{screenshot.title}</h3>
                  <p className="text-muted-foreground">{screenshot.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {screenshot.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Selected Screenshot Display */}
          <div className="relative">
            <div className="relative z-10 animate-fade-in-up">
              <img
                src={screenshots[selectedScreenshot].image}
                alt={screenshots[selectedScreenshot].title}
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-card border border-primary/20 transition-all duration-500"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-nexdo-cyan/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-nexdo-purple/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;