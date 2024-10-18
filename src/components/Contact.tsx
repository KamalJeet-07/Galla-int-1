import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded sans-serif" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded sans-serif" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded sans-serif"></textarea>
              <button type="submit" className="bg-gold text-white font-bold py-3 px-6 rounded hover:bg-yellow-600 transition duration-300 sans-serif">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6 sans-serif">
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-gold mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-gold mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                <p>info@gallainterior.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-gold mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                <p>123 Luxury Lane, Elegance City, 54321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;