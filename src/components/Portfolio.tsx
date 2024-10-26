import React from 'react';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Luxurious Living Room', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, title: 'Elegant Master Bedroom', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 3, title: 'Sophisticated Dining Area', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 4, title: 'Modern Home Office', image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <section id="portfolio" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Exquisite Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover-scale">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;