//import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Info de la empresa */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">TuEmpresaCapacita</h3>
          <p className="text-sm">Ofrecemos capacitaciones de alta calidad para impulsar tu carrera profesional.</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition-colors duration-200">Inicio</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors duration-200">Cursos</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contáctanos</h3>
          <p className="text-sm">Email: info@tucapacita.com</p>
          <p className="text-sm">Teléfono: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
              {/* Icono de Facebook (ejemplo con SVG simple) */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              {/* Icono de LinkedIn */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm4.94 4.94L12 11.23l3.06-2.29L12 6.65l-3.06 2.29zM12 13.77l-3.06 2.29L12 18.35l3.06-2.29L12 13.77zM18 6v12h-4V6h4zM6 6v12h4V6H6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;