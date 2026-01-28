
import React from 'react';
import { MULTIMEDIA } from '../constants';

const Multimedia: React.FC = () => {
  const videos = MULTIMEDIA.filter(m => m.type === 'video');
  const podcasts = MULTIMEDIA.filter(m => m.type === 'podcast');

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 pt-16 pb-8 text-center md:text-left w-full">
        <div className="flex flex-col gap-3">
          <span className="text-rose-gold font-bold text-xs uppercase tracking-[0.3em]">Portfólio Profissional</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-charcoal">Galeria Multimídia</h1>
          <p className="mt-4 max-w-2xl text-lg text-soft-gray font-light leading-relaxed">
            Uma curadoria de reportagens em vídeo, podcasts e projetos digitais focados no jornalismo humanizado e narrativas envolventes.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 pb-20 w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-rose-gold bg-blush p-2 rounded-lg">videocam</span>
          <h3 className="text-2xl font-serif font-bold tracking-tight">Reportagens e Vídeos</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <div key={video.id} className="group flex flex-col gap-5 p-5 rounded-2xl bg-white border border-blush hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full aspect-video bg-center bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-inner" style={{ backgroundImage: `url("${video.imageUrl}")` }}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <div className="size-14 bg-white/90 text-rose-gold rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">play_arrow</span>
                  </div>
                </div>
                {video.isFeatured && (
                  <div className="absolute top-3 left-3 bg-rose-gold/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
                    Destaque
                  </div>
                )}
              </div>
              <div className="px-1">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-charcoal text-lg font-serif font-bold leading-tight group-hover:text-rose-gold transition-colors">{video.title}</h4>
                  <span className="text-[11px] text-soft-gray font-medium uppercase tracking-tighter">{video.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map(tag => (
                    <span key={tag} className="bg-blush text-rose-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-soft-gray text-sm font-light leading-relaxed">{video.description}</p>
                <div className="mt-5 pt-4 border-t border-cream flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-rose-gold">tv</span>
                  <span className="text-xs font-semibold text-soft-gray italic">{video.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Podcasts Section (Dark) */}
      <section className="bg-[#2a2424] text-white py-20 transition-colors">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-12">
            <span className="material-symbols-outlined text-rose-gold bg-white/5 p-2 rounded-lg">mic</span>
            <h3 className="text-3xl font-serif font-bold tracking-tight">Podcasts & Áudio</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {podcasts.map(podcast => (
              <div key={podcast.id} className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-gold/40 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="size-32 bg-rose-gold rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xl" style={{ background: 'linear-gradient(135deg, #e29578, #b5838d)' }}>
                    <span className="material-symbols-outlined text-5xl text-white">podcasts</span>
                  </div>
                  <div className="flex flex-col gap-2 text-center sm:text-left">
                    <h4 className="text-2xl font-serif font-bold">{podcast.title}</h4>
                    <p className="text-sm text-rose-gold font-medium uppercase tracking-wider">{podcast.subtitle}</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                      {podcast.tags.map(tag => (
                        <span key={tag} className="text-[10px] border border-rose-gold/30 text-rose-gold px-3 py-1 rounded-full uppercase font-bold tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {podcast.audioInfo && (
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="w-full h-10 flex items-end gap-[3px] px-1 opacity-60">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-1 bg-rose-gold rounded-full" style={{ height: `${Math.random() * 100}%` }}></div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl">
                      <div className="flex items-center gap-4">
                        <button className="size-12 rounded-full bg-white text-[#2a2424] flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all shadow-lg">
                          <span className="material-symbols-outlined">play_arrow</span>
                        </button>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold">{podcast.audioInfo.episode}</span>
                          <span className="text-[10px] text-stone-400 uppercase tracking-widest">{podcast.audioInfo.current} / {podcast.audioInfo.duration}</span>
                        </div>
                      </div>
                      <button className="text-stone-400 hover:text-rose-gold transition-colors p-2">
                        <span className="material-symbols-outlined">share</span>
                      </button>
                    </div>
                  </div>
                )}
                <p className="text-sm text-stone-400 leading-relaxed font-light italic border-l-2 border-rose-gold/30 pl-4">"{podcast.description}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Multimedia;
