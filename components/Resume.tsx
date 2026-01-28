
import React from 'react';
import { EXPERIENCES } from '../constants';

const Resume: React.FC = () => {
  return (
    <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-16 min-h-screen">
      <div className="text-center mb-20">
        <p className="text-accent-pink text-sm uppercase tracking-[0.3em] mb-4">Trajetória Profissional</p>
        <h1 className="text-5xl md:text-6xl font-serif italic text-charcoal mb-6">Currículo</h1>
        <div className="w-24 h-[1px] bg-accent-pink mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-16">
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-serif italic relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-[1px] after:bg-accent-pink">
                Experiência Profissional
              </h2>
            </div>
            <div className="space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="group relative pl-8 border-l border-blush hover:border-accent-pink transition-colors">
                  <div className="absolute -left-[5px] top-0 size-2 bg-accent-pink rounded-full"></div>
                  <div className="flex flex-col mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-pink mb-1">{exp.period}</span>
                    <h3 className="text-xl font-serif font-semibold text-charcoal">{exp.role}</h3>
                    <p className="text-accent-pink italic font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-soft-gray leading-relaxed mb-4 max-w-2xl">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-[10px] uppercase tracking-tighter bg-blush px-2 py-1 text-accent-pink">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-16">
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-serif italic relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-[1px] after:bg-accent-pink">
                Educação
              </h2>
            </div>
            <div className="border border-blush p-6 bg-white relative">
              <div className="absolute inset-1 border border-blush/40 pointer-events-none"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent-pink mb-1">Conclusão em 2023</p>
              <h3 className="text-lg font-serif font-semibold mb-1">Bacharelado em Jornalismo</h3>
              <p className="text-sm italic text-soft-gray mb-4">Universidade de Comunicação Aplicada</p>
              <div className="pt-4 border-t border-blush space-y-2">
                <p className="text-[11px] uppercase tracking-wider font-bold text-soft-gray/60">Disciplinas Relevantes</p>
                <ul className="text-xs text-soft-gray space-y-1">
                  <li>• Ética e Direito na Comunicação</li>
                  <li>• Telejornalismo e Edição</li>
                  <li>• Jornalismo de Dados</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-serif italic relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-[1px] after:bg-accent-pink">
                Habilidades
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-accent-pink mb-4">Editorial</p>
                <div className="flex flex-wrap gap-2">
                  {['Estratégia SEO', 'Edição de Texto', 'Fact-Checking', 'Storytelling'].map(skill => (
                    <span key={skill} className="px-3 py-1 border border-blush text-[11px] text-soft-gray">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-accent-pink mb-4">Software</p>
                <div className="flex flex-wrap gap-2">
                  {['Adobe Premiere', 'WordPress', 'InDesign'].map(skill => (
                    <span key={skill} className="px-3 py-1 border border-blush text-[11px] text-soft-gray">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-accent-pink mb-4">Idiomas</p>
                <div className="space-y-3">
                  {[
                    { name: 'Português (Nativo)', level: 3 },
                    { name: 'Inglês (Avançado)', level: 2 },
                    { name: 'Espanhol (Intermediário)', level: 1 }
                  ].map(lang => (
                    <div key={lang.name} className="flex justify-between items-center text-xs">
                      <span>{lang.name}</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                          <div key={i} className={`size-1.5 rounded-full ${i <= lang.level ? 'bg-accent-pink' : 'bg-blush'}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resume;
