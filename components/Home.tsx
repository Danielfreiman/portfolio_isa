
import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { ARTICLES } from '../constants';

const Home: React.FC = () => {
  const featuredArticle = ARTICLES.find(a => a.isFeatured);
  const highlights = ARTICLES.filter(a => !a.isFeatured).slice(0, 5);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 md:py-32 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-soft-gray">Jornalista & Pesquisadora</span>
                <div className="editorial-accent w-24"></div>
              </div>
              <h1 className="text-5xl md:text-7xl leading-[1.15] text-charcoal">
                Explorando as <span className="italic">nuances</span> da cultura contemporânea.
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed text-soft-gray max-w-xl">
                Estudante de jornalismo apaixonada pela narrativa de impacto. Minha missão é traduzir histórias complexas em diálogos acessíveis e humanizados.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link 
                  to="/artigos"
                  className="flex min-w-[180px] items-center justify-center rounded-full h-14 px-8 bg-charcoal text-white text-sm font-medium tracking-widest uppercase hover:bg-accent-pink transition-all duration-300"
                >
                  Ver Portfólio
                </Link>
                <Link 
                  to="/curriculo"
                  className="flex min-w-[180px] items-center justify-center rounded-full h-14 px-8 border border-charcoal text-charcoal text-sm font-medium tracking-widest uppercase hover:bg-blush transition-all"
                >
                  Minha Trajetória
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 order-1 lg:order-2">
            <div className="relative px-4">
              <div className="absolute -inset-4 bg-blush rounded-t-[10rem] rounded-b-lg -z-10 translate-x-4 translate-y-4"></div>
              <div 
                className="aspect-[4/5] bg-center bg-no-repeat bg-cover rounded-t-[10rem] rounded-b-lg shadow-sm"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBY1RdWdHyIY7kNd509otHaimBlK7-m3LNw82nDWjpe7hSB5RLYjgWg968XOLqk2HVbBpuNJBVpYmLlxRglFin_gK4IcAKnypYwuAsraH9qi-oeorWm8j-MNv0KXQ-KYiUPwVuhcTn-iBIFKRVehL8atPI84jm_A3PLdGdPi5e6botaM-gY-tWmShi5ga0IJphI6t7F3F6Ki4YOINGBSvEnhcOmF45FnwifwnK2JNxSh-7KD2hlTfKXbCj76gwAKYYbVnVq8BplVNPj")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Header */}
      <div className="px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-baseline justify-between border-b border-blush pb-6">
            <h2 className="text-4xl md:text-5xl italic font-light">Destaques</h2>
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-soft-gray">Portfólio Selecionado</span>
          </div>
        </div>
      </div>

      {/* Grid Highlights */}
      <section className="px-6 md:px-20 max-w-7xl mx-auto w-full mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {featuredArticle && <ArticleCard article={featuredArticle} featured />}
          {highlights.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Perspective Section */}
      <section className="bg-blush/30 py-24 px-6 md:px-20 border-t border-b border-blush">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
          <span className="material-symbols-outlined text-accent-pink text-4xl">edit_note</span>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl italic">Sobre meu olhar</h2>
            <p className="text-lg text-soft-gray font-light leading-relaxed">
              Acredito que o jornalismo deve ser sensível e corajoso. Atualmente, busco oportunidades que me permitam explorar narrativas visuais e investigativas, focando em questões sociais e culturais que moldam nosso cotidiano.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 pt-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-serif">50+</span>
              <span className="text-[10px] uppercase tracking-widest text-soft-gray">Artigos Publicados</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-serif">12</span>
              <span className="text-[10px] uppercase tracking-widest text-soft-gray">Reportagens em Vídeo</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-serif">03</span>
              <span className="text-[10px] uppercase tracking-widest text-soft-gray">Prêmios Acadêmicos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10">
          <h2 className="text-4xl md:text-5xl leading-tight">
            Vamos contar a próxima <span className="italic text-accent-pink">grande história</span> juntas?
          </h2>
          <p className="text-base text-soft-gray font-light max-w-lg">
            Disponível para freelancers, estágios editoriais e projetos de pesquisa documental.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <button className="flex min-w-[220px] items-center justify-center rounded-full h-14 px-8 bg-charcoal text-white text-sm font-medium tracking-widest uppercase hover:bg-accent-pink transition-all">
              <span className="material-symbols-outlined mr-2 text-xl">mail</span> Enviar Mensagem
            </button>
            <button className="flex min-w-[220px] items-center justify-center rounded-full h-14 px-8 border border-charcoal text-charcoal text-sm font-medium tracking-widest uppercase hover:bg-blush transition-all">
              Baixar Currículo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
