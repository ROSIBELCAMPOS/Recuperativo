import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            TuEmpresaCapacita
          </Link>
        </div>

        {/* Menú de navegación (Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><NavLink to="/" className={navLinkClass}>Inicio</NavLink></li>
            <li><NavLink to="/courses" className={navLinkClass}>Cursos</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contacto</NavLink></li>
          </ul>
        </nav>

        {/* Menú Hamburguesa (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Abrir menú principal</span>
            {isOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Inicio</NavLink>
            <NavLink to="/courses" className={navLinkClass} onClick={() => setIsOpen(false)}>Cursos</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contacto</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;