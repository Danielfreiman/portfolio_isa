
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-blush px-6 md:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-2xl font-bold italic">Portfólio.</h2>
          <p className="text-[10px] text-soft-gray uppercase tracking-[0.3em]">
            © 2024 Jornalista Estudante • Feito com elegância.
          </p>
        </div>
        <div className="flex gap-10">
          {['LinkedIn', 'Instagram', 'Behance'].map((social) => (
            <a 
              key={social}
              href="#" 
              className="text-xs font-semibold tracking-widest uppercase hover:text-accent-pink transition-colors flex items-center gap-2"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
