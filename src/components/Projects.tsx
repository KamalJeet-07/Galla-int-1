import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Opulent Penthouse Renovation', description: 'A complete transformation of a city penthouse into a luxurious haven.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, title: 'Chic Boutique Hotel', description: 'Designing an exclusive boutique hotel with a unique character.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 3, title: 'Executive Office Suite', description: 'Creating a sophisticated workspace for high-level executives.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Signature Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover-scale">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 sans-serif">{project.description}</p>
                <a href="#" className="text-gold hover:text-white transition duration-300 sans-serif">Explore Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;