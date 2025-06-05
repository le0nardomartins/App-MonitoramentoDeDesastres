import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              EcoMonitor
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-primary-dark">
              Monitoramento
            </Link>
            <Link to="/training" className="px-3 py-2 rounded-md hover:bg-primary-dark">
              Treinamento
            </Link>
            <Link to="/community" className="px-3 py-2 rounded-md hover:bg-primary-dark">
              Comunidade
            </Link>
            <Link to="/alerts" className="px-3 py-2 rounded-md hover:bg-primary-dark">
              Alertas
            </Link>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-primary-dark mr-2"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-primary-dark"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-primary-dark"
              onClick={toggleMenu}
            >
              Monitoramento
            </Link>
            <Link
              to="/training"
              className="block px-3 py-2 rounded-md hover:bg-primary-dark"
              onClick={toggleMenu}
            >
              Treinamento
            </Link>
            <Link
              to="/community"
              className="block px-3 py-2 rounded-md hover:bg-primary-dark"
              onClick={toggleMenu}
            >
              Comunidade
            </Link>
            <Link
              to="/alerts"
              className="block px-3 py-2 rounded-md hover:bg-primary-dark"
              onClick={toggleMenu}
            >
              Alertas
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 