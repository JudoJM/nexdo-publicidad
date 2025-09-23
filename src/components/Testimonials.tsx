import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Estudiante Universitaria",
    content: "Con Nexdo ahora cumplo todas mis tareas a tiempo. La IA me ayuda a priorizar y el modo enfoque es increíble para estudiar.",
    rating: 5,
    avatar: "👩‍🎓"
  },
  {
    name: "Carlos Mendoza",
    role: "Emprendedor",
    content: "Nexdo transformó mi productividad. Las estadísticas me muestran exactamente dónde invertir mi tiempo para mejores resultados.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Ana Rodríguez",  
    role: "Diseñadora Freelance",
    content: "Perfecta para organizar proyectos. El calendario inteligente y la sincronización entre dispositivos son geniales.",
    rating: 5,
    avatar: "👩‍🎨"
  },
  {
    name: "David Herrera",
    role: "Desarrollador",
    content: "La mejor app de productividad que he usado. Simple, potente y con un precio increíble. ¡Totalmente recomendada!",
    rating: 5,
    avatar: "👨‍💻"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="text-gradient">usuarios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Miles de personas ya han transformado su productividad con Nexdo. 
            Lee sus experiencias y únete a la comunidad.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass group hover:scale-105 transition-all duration-300 relative"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-gradient">4.9★</div>
            <div className="text-sm text-muted-foreground">Calificación</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-gradient">98%</div>
            <div className="text-sm text-muted-foreground">Satisfacción</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-gradient">24/7</div>
            <div className="text-sm text-muted-foreground">Soporte</div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-nexdo-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-nexdo-green/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;