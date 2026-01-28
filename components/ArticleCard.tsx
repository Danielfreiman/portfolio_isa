
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured }) => {
  if (featured) {
    return (
      <div className="flex flex-col gap-6 group lg:col-span-2">
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-sm">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: `url("${article.imageUrl}")` }}
          />
        </div>
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex gap-4 items-center">
            <span className="text-accent-pink text-xs font-bold uppercase tracking-widest">{article.category}</span>
            <span className="h-[1px] w-8 bg-blush"></span>
            <span className="text-[10px] text-soft-gray uppercase tracking-widest">{article.readTime || article.date}</span>
          </div>
          <h3 className="text-3xl md:text-4xl leading-tight hover:text-accent-pink transition-colors cursor-pointer font-serif italic">
            {article.title}
          </h3>
          <p className="text-base text-soft-gray font-light leading-relaxed">
            {article.description}
          </p>
          <div className="pt-2">
            <button className="text-xs font-bold uppercase tracking-[0.2em] border-b border-accent-pink pb-1 hover:text-accent-pink transition-colors">
              Ler Matéria Completa
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 group">
      <div className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-sm">
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: `url("${article.imageUrl}")` }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-accent-pink text-xs font-bold uppercase tracking-widest">{article.category}</span>
        <h3 className="text-2xl leading-tight group-hover:text-accent-pink transition-colors cursor-pointer italic font-serif">
          {article.title}
        </h3>
        <p className="text-sm text-soft-gray font-light leading-relaxed line-clamp-3">
          {article.description}
        </p>
        <div className="pt-2">
          <button className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">
            Ler Mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
