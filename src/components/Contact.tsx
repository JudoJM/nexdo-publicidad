import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phoneNumber = "+57 318 5349006";
  const whatsappUrl = `https://wa.me/573185349006?text=¡Hola! Me interesa Nexdo, la app de productividad. ¿Podrían darme más información?`;

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Tienes preguntas sobre <span className="text-gradient">Nexdo</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y descubre cómo Nexdo puede transformar tu productividad.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Contact */}
          <div className="card-glass p-8 animate-slide-in-left hover-scale">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-success" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Chat por WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Chatea con nosotros directamente y obtén respuestas inmediatas a tus dudas sobre Nexdo.
              </p>
              
              <Button 
                asChild
                className="bg-success hover:bg-success/90 text-white w-full"
              >
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Phone Contact */}
          <div className="card-glass p-8 animate-slide-in-right hover-scale">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-nexdo-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-nexdo-blue" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Llamada directa</h3>
              <p className="text-muted-foreground mb-6">
                Habla directamente con nuestro equipo de soporte para resolver cualquier consulta.
              </p>
              
              <Button 
                asChild
                variant="outline"
                className="w-full border-nexdo-blue text-nexdo-blue hover:bg-nexdo-blue hover:text-white"
              >
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="card-glass p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-nexdo-purple flex-shrink-0" />
              <span className="text-muted-foreground">Disponible en toda Colombia</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-nexdo-cyan flex-shrink-0" />
              <span className="text-muted-foreground">Respuesta en menos de 24 horas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-nexdo-green/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-nexdo-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Contact;