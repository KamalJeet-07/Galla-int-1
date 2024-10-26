import React, { useState } from 'react';
import { Home, Grid, Briefcase, Mail, FileText, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md  w-full z-10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Galla Interior</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="flex items-center text-white hover:text-gold transition duration-300 sans-serif">
              <Home className="w-5 h-5 mr-1" />
              Home
            </a>
            <a href="#portfolio" className="flex items-center text-white hover:text-gold transition duration-300 sans-serif">
              <Grid className="w-5 h-5 mr-1" />
              Portfolio
            </a>
            <a href="#services" className="flex items-center text-white hover:text-gold transition duration-300 sans-serif">
              <Briefcase className="w-5 h-5 mr-1" />
              Services
            </a>
            <a href="#projects" className="flex items-center text-white hover:text-gold transition duration-300 sans-serif">
              <FileText className="w-5 h-5 mr-1" />
              Projects
            </a>
            <a href="#contact" className="flex items-center text-white hover:text-gold transition duration-300 sans-serif">
              <Mail className="w-5 h-5 mr-1" />
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold transition duration-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 sans-serif">
            <a href="#home" className="block py-2 text-white hover:text-gold transition duration-300">Home</a>
            <a href="#portfolio" className="block py-2 text-white hover:text-gold transition duration-300">Portfolio</a>
            <a href="#services" className="block py-2 text-white hover:text-gold transition duration-300">Services</a>
            <a href="#projects" className="block py-2 text-white hover:text-gold transition duration-300">Projects</a>
            <a href="#contact" className="block py-2 text-white hover:text-gold transition duration-300">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;