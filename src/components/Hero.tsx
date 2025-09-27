import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import nexdoHero from "@/assets/nexdo-dashboard.png";
import nexdoLogo from "@/assets/nexdo-logo-real.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-nexdo-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-nexdo-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src={nexdoLogo} 
              alt="Nexdo Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
          
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient">Tu tiempo</span>
              <br />
              <span className="text-foreground">bajo control</span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg font-medium">Con inteligencia artificial</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            Nexdo es una app de productividad diseñada para la gestión de tu vida que organiza 
            <span className="text-primary font-semibold"> tareas, hábitos y notas</span> con 
            inteligencia artificial, estadísticas y modo enfoque.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              asChild
              className="btn-hero text-lg px-8 py-6 group"
            >
              <a 
                href="https://nexdo.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Probar ahora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/50 text-primary hover:bg-primary/10"
            >
              Ver demo
            </Button>
          </div>
          
          {/* Price highlight */}
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
            <span className="text-sm font-medium">Solo $5.000 COP</span>
            <span className="text-xs bg-success/20 px-2 py-1 rounded-full">¡Precio accesible!</span>
          </div>
          
          {/* Maintenance info */}
          <div className="inline-flex items-center gap-2 bg-nexdo-blue/10 text-nexdo-blue px-4 py-2 rounded-full mt-3">
            <span className="text-sm font-medium">Actualizaciones cada 6 meses incluidas</span>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative animate-slide-in-right">
          <div className="relative z-10 float">
            <img 
              src={nexdoHero} 
              alt="Nexdo App Dashboard Preview" 
              className="w-full max-w-lg mx-auto rounded-2xl shadow-card pulse-glow border border-primary/20"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-nexdo-cyan/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-nexdo-green/20 rounded-full blur-xl"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;