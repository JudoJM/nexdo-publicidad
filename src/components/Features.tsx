import { 
  CheckSquare, 
  Target, 
  StickyNote, 
  Brain, 
  Timer, 
  Calendar, 
  BarChart3, 
  FileText,
  Zap,
  RefreshCw
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Gestión de Tareas",
    description: "Organiza y prioriza todas tus tareas de manera inteligente",
    color: "text-nexdo-blue",
    bgColor: "bg-nexdo-blue/10",
  },
  {
    icon: Target,
    title: "Seguimiento de Hábitos",
    description: "Construye rutinas positivas con recordatorios automáticos",
    color: "text-nexdo-purple",
    bgColor: "bg-nexdo-purple/10",
  },
  {
    icon: StickyNote,
    title: "Notas Inteligentes",
    description: "Captura ideas y organízalas con IA para máxima productividad",
    color: "text-nexdo-green",
    bgColor: "bg-nexdo-green/10",
  },
  {
    icon: Brain,
    title: "Asistente de IA",
    description: "Analiza tus datos y recibe sugerencias personalizadas",
    color: "text-nexdo-cyan",
    bgColor: "bg-nexdo-cyan/10",
  },
  {
    icon: Timer,
    title: "Modo Enfoque (Pomodoro)",
    description: "Concentración máxima con temporizador configurable",
    color: "text-nexdo-blue",
    bgColor: "bg-nexdo-blue/10",
  },
  {
    icon: Calendar,
    title: "Calendario Inteligente",
    description: "Planifica tu tiempo de forma eficiente y automática",
    color: "text-nexdo-purple",
    bgColor: "bg-nexdo-purple/10",
  },
  {
    icon: BarChart3,
    title: "Estadísticas Avanzadas",
    description: "Análisis detallado con comparaciones mensuales",
    color: "text-nexdo-green",
    bgColor: "bg-nexdo-green/10",
  },
  {
    icon: FileText,
    title: "Reportes PDF",
    description: "Exporta tu progreso en reportes profesionales",
    color: "text-nexdo-cyan",
    bgColor: "bg-nexdo-cyan/10",
  },
  {
    icon: Zap,
    title: "Progreso al 100%",
    description: "Completa actividades diarias y alcanza tus metas",
    color: "text-nexdo-blue",
    bgColor: "bg-nexdo-blue/10",
  },
  {
    icon: RefreshCw,
    title: "Sincronización Real",
    description: "Accede desde cualquier dispositivo, siempre actualizado",
    color: "text-nexdo-purple",
    bgColor: "bg-nexdo-purple/10",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Características</span> que transforman
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre todas las herramientas que Nexdo pone a tu disposición para 
            maximizar tu productividad y organizar tu vida.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-glass group hover:scale-105 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-nexdo-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-nexdo-purple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;