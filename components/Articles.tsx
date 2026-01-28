
import React, { useState } from 'react';
import { CATEGORIES, ARTICLES } from '../constants';
import { Category } from '../types';
import ArticleCard from './ArticleCard';

const Articles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');

  const filteredArticles = selectedCategory === 'Todos' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <main className="flex flex-col items-center py-16 px-6 md:px-20 min-h-screen">
      <div className="max-w-[1200px] w-full">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent-pink font-bold">Portfólio Editorial</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">Artigos e Reportagens</h1>
          <div className="w-16 h-[1px] bg-accent-pink/30 my-4"></div>
          <p className="text-soft-gray font-light italic text-lg max-w-2xl leading-relaxed">
            Uma curadoria de textos explorando narrativas contemporâneas, cultura e os reflexos da sociedade moderna.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat 
                ? 'bg-accent-pink text-white shadow-md' 
                : 'bg-blush/40 text-soft-gray hover:bg-blush hover:shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="flex px-4 py-24 justify-center">
          <button className="flex items-center gap-3 px-10 py-4 bg-transparent border border-accent-pink/20 text-accent-pink text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-accent-pink hover:text-white transition-all duration-300">
            <span>Carregar Mais</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Articles;
