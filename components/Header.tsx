
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Artigos', path: '/artigos' },
    { label: 'Multimídia', path: '/multimidia' },
    { label: 'Sobre mim', path: '/sobre' },
    { label: 'Currículo', path: '/curriculo' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-blush px-6 md:px-20 py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <h2 className="text-2xl font-bold tracking-tight italic">Portfólio.</h2>
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-xs font-medium tracking-widest uppercase transition-colors hover:text-accent-pink ${
                  isActive(item.path) ? 'text-accent-pink border-b border-accent-pink pb-1' : 'text-charcoal'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="h-4 w-[1px] bg-blush"></div>
          <button className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase border-b border-charcoal pb-1 hover:border-accent-pink transition-all">
            Newsletter
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-blush p-6 flex flex-col gap-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium tracking-widest uppercase ${
                isActive(item.path) ? 'text-accent-pink' : 'text-charcoal'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="text-left text-[10px] font-semibold tracking-[0.3em] uppercase border-b border-charcoal pb-1">
            Newsletter
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
