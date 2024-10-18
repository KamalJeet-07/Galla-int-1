import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'}}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">Welcome to Galla Interior</h1>
        <p className="text-xl md:text-2xl mb-8 sans-serif">Elevating spaces to extraordinary heights</p>
        <a href="#contact" className="bg-gold text-black font-bold py-3 px-8 rounded-full hover:bg-white transition duration-300 inline-block sans-serif">
          Transform Your Space
        </a>
      </div>
    </section>
  );
};

export default Hero;