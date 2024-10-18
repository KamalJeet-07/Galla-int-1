import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-bold">Galla Interior</h3>
            <p className="text-sm mt-2 sans-serif">Elevating spaces to extraordinary heights</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition duration-300"><Facebook /></a>
            <a href="#" className="hover:text-gold transition duration-300"><Instagram /></a>
            <a href="#" className="hover:text-gold transition duration-300"><Linkedin /></a>
            <a href="#" className="hover:text-gold transition duration-300"><Twitter /></a>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center sans-serif">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <a href="#home" className="hover:text-gold transition duration-300">Home</a>
            <a href="#portfolio" className="hover:text-gold transition duration-300">Portfolio</a>
            <a href="#services" className="hover:text-gold transition duration-300">Services</a>
            <a href="#projects" className="hover:text-gold transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-gold transition duration-300">Contact</a>
          </nav>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Galla Interior. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;