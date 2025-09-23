import { ArrowRight, Download, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-nexdo-blue/10 via-nexdo-purple/10 to-nexdo-green/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-nexdo-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-nexdo-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nexdo-green/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-8 h-8 text-nexdo-cyan" />
            <span className="text-lg font-semibold text-nexdo-cyan">¡Es momento de actuar!</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            No pierdas más tiempo,<br />
            <span className="text-gradient">empieza a organizarte</span><br />
            hoy mismo con Nexdo
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Únete a miles de usuarios que ya transformaron su productividad. 
            Tu futuro organizado está a un clic de distancia.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <Button 
            asChild
            className="btn-hero text-xl px-12 py-8 group text-white"
          >
            <a 
              href="https://nexdo.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Download className="w-6 h-6" />
              Descargar ahora
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">
              Solo $3.500 COP
            </div>
            <div className="text-sm text-muted-foreground">
              Precio de lanzamiento
            </div>
          </div>
        </div>
        
        {/* Benefits highlight */}
        <div className="grid sm:grid-cols-3 gap-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
          <div className="card-glass text-center p-6">
            <Sparkles className="w-8 h-8 text-nexdo-blue mx-auto mb-3" />
            <div className="font-semibold text-foreground mb-1">IA Avanzada</div>
            <div className="text-sm text-muted-foreground">Sugerencias inteligentes</div>
          </div>
          
          <div className="card-glass text-center p-6">
            <Zap className="w-8 h-8 text-nexdo-purple mx-auto mb-3" />
            <div className="font-semibold text-foreground mb-1">Resultados Inmediatos</div>
            <div className="text-sm text-muted-foreground">Desde el primer día</div>
          </div>
          
          <div className="card-glass text-center p-6">
            <Download className="w-8 h-8 text-nexdo-green mx-auto mb-3" />
            <div className="font-semibold text-foreground mb-1">Fácil de Usar</div>
            <div className="text-sm text-muted-foreground">Interfaz intuitiva</div>
          </div>
        </div>
        
        {/* Urgency message */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 bg-nexdo-cyan/10 text-nexdo-cyan px-6 py-3 rounded-full border border-nexdo-cyan/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexdo-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-nexdo-cyan"></span>
            </span>
            <span className="font-medium">¡Oferta por tiempo limitado!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;