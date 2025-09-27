import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import nexdoDevices from "@/assets/nexdo-devices.jpg";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumenta tu productividad",
    description: "Mejora tu rendimiento hasta un 300% con nuestro sistema de gestión inteligente",
    color: "text-success",
    gradient: "from-success/20 to-success/5"
  },
  {
    icon: Clock,
    title: "Organiza tu tiempo sin estrés",
    description: "Elimina la ansiedad y el caos con planificación automática e inteligente",
    color: "text-nexdo-blue",
    gradient: "from-nexdo-blue/20 to-nexdo-blue/5"
  },
  {
    icon: Users,
    title: "Perfecta para cualquier persona",
    description: "Estudiantes, profesionales, emprendedores - todos pueden beneficiarse",
    color: "text-nexdo-purple",
    gradient: "from-nexdo-purple/20 to-nexdo-purple/5"
  },
  {
    icon: DollarSign,
    title: "Precio súper accesible",
    description: "Solo $5.000 COP - menos que un café al día para transformar tu vida",
    color: "text-nexdo-cyan",
    gradient: "from-nexdo-cyan/20 to-nexdo-cyan/5"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Cards */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                ¿Por qué elegir <span className="text-gradient">Nexdo</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Descubre los beneficios que te esperan al unirte a miles de usuarios que ya transformaron su productividad.
              </p>
            </div>
            
            <div className="grid gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className={`card-glass bg-gradient-to-r ${benefit.gradient} border-l-4 border-l-${benefit.color.replace('text-', '')}`}
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-card rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <img 
                src={nexdoDevices} 
                alt="Nexdo en múltiples dispositivos" 
                className="w-full rounded-3xl shadow-card"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-nexdo-blue/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-nexdo-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Stats overlay */}
            <div className="absolute top-8 left-8 card-glass max-w-xs">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">+10k</div>
                <div className="text-sm text-muted-foreground">Usuarios activos</div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 card-glass max-w-xs">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-nexdo-green/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Benefits;