import React from 'react';
import { PaintBucket, Sofa, Ruler, Palette, Lightbulb, Compass } from 'lucide-react';

const Services = () => {
  const services = [
    { id: 1, title: 'Bespoke Interior Design', description: 'Tailored design solutions for discerning clients.', icon: Sofa },
    { id: 2, title: 'Color Consultation', description: 'Expert advice on sophisticated color palettes.', icon: PaintBucket },
    { id: 3, title: 'Space Planning', description: 'Optimize your layout for luxury and functionality.', icon: Ruler },
    { id: 4, title: 'Material Selection', description: 'Curate premium materials for your space.', icon: Palette },
    { id: 5, title: 'Lighting Design', description: 'Create ambiance with expert lighting solutions.', icon: Lightbulb },
    { id: 6, title: 'Project Management', description: 'Seamless execution from concept to completion.', icon: Compass },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Premium Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-100 rounded-lg p-6 shadow-md hover-scale">
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 sans-serif">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;