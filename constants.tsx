
import { Article, Category, MultimediaItem, Experience } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'O Futuro da Mobilidade: Por que o transporte sustentável é urgente.',
    description: 'Uma investigação profunda sobre como o planejamento urbano influencia diretamente a qualidade de vida nas grandes metrópoles brasileiras.',
    category: 'Política Urbana',
    publication: 'Revista Vanguarda',
    date: '12 Out 2023',
    readTime: '12 min de leitura',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBacR1BNn0OMwLWzGP_mXiuCXnMr92YW9YS637mfeou6ouLsUXc3ISN1cbwCDhnyzsoJ2QfqUlIpG85NwY4C8G92xl1wrVUk8U6PH1CmXBjaHi4iApfs5DQ7_tk_fDA1dzt6r3PkGDXPVz8NFgCHEd6WzFKluzuH6ovGhlpFhwsepx9FnPQN27zROa8KvYhFC_Waw0OZCrtO72m4BriVUj7m1e_pUdn3GsHHAHWzJadw6ii2dHZnjFnBBia68b79VgGeDRE444To7XZ',
    isFeatured: true
  },
  {
    id: '2',
    title: 'A cena independente resiste.',
    description: 'Como os espaços culturais de bairro estão se reinventando após o cenário pandêmico.',
    category: 'Cultura',
    publication: 'Caderno de Arte',
    date: '28 Set 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc1u7DvjjW9Ll-RSFxF84BIafbMpLNv_h_TjFjNEhB0HzPwSdrRh745TTXb7XHlLGvs8rn8QlUJOREcbka-_zKARxpo8UMpR7jDyLjWTY9VLwJ9Q4axrtRm4fgxWZjEJoQJOtI9gQXF9VO0ew9HpI7U6p5W3KDrOSQdcsquLU5cfgTQGoey34N-K7SAFtjMKPY1EB9pOEekojUN-CFjiwxiw1dNR21z5o3kVjGZ557EUZOv6xastXhZbyL10swCNG0PD6Jsthr7qyB'
  },
  {
    id: '3',
    title: 'Alfabetização Digital.',
    description: 'O papel das escolas no combate à desinformação e fake news desde a infância.',
    category: 'Educação',
    publication: 'Jornal da Manhã',
    date: '30 Ago 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTVwD3cYlFYOxzimr2Fv-NEPDFDB6tzWPWYm3mkZWuppJF42AHg0-55q3Ul_5m7fZGukbkO9oZQRq6XQ95WywOyE4x8VOP89Q5tDTI7Q0fU1_7g6wod4EUisD2xtYOyukE-_0idtxW5ZD0h5alaoSv8uEjtdrO8-v44yla80fLgB0_4pRJor3cXBxAWkPFBL8bUTspYa2mmUSh5VXg2Ht9vEmqBD7sFvVOZkynk9hycciugbu17qU36g8jDY6WP-nG0GLasMqAvGOK'
  },
  {
    id: '4',
    title: 'Revolução nos Telhados.',
    description: 'Iniciativas locais que estão mudando a paisagem cinza das cidades por metros de verde.',
    category: 'Meio Ambiente',
    publication: 'Futuro Hoje',
    date: '12 Ago 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfpY1075A3HngUP1vXdIiFF1SW85sfB1i4sDtI3h72yHR8VMkoBAV2AUHn88n4-sT_b-2jbw-zj8lVkcBOCdYZcSTXRX77vCyfv69s-5eY29zs0d0JRPdZ-MiDpds5ryc4UkBtmNbNoZ5ZuNoelVOYEDj8CE1mnXnQIb9JrJ5QUfpMh1C0XPKDtlcUJ44_crrQzdEoCZeFgK6Eab-dcQ_8lFdlHjGQrDRo7OBrpelujS4wJr8ecDA3onTqoG1cB0QtDQfJm8HO01hp'
  },
  {
    id: '5',
    title: 'Sustentabilidade: O Novo Luxo Consciente',
    description: 'Investigamos o movimento de "slow fashion" que está conquistando as passarelas e mudando o comportamento de consumo da Geração Z.',
    category: 'Moda',
    publication: 'Estilo & Ética',
    date: '15 Set 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASLqPS8mFlcPU5TVZj47QG4B1_99P_NKs5BYQY0n-NKmqaIPSe8ukovx8N5P5ojb_NvqIXblRQnsvyJXghZUNi7axJYCmSO0UWszwYYQ2yIJ8K2eFHRQGLMHuSWog3yYTov5b47mui3-eZekeLTLqqY9xInW-OJWiKGKNlH99y9hABmkWUahueFlRVX2eHupM-6xeYtfCWGyrbeJn4L2ma1R8cemruGa8rx1335XRtOeqSKaJA56Ln_aM0SyDo49nAo2yv_epVn7MP'
  },
  {
    id: '6',
    title: 'O Renascimento do Centro.',
    description: 'Análise sobre o retorno do comércio local e a revitalização de centros históricos.',
    category: 'Comunidade',
    publication: 'Semanário Cultural',
    date: '25 Jul 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDXgOqAkE_syJd6-nOfBydhTFqBSlMoSmmDa3At4gGaq-68b9XFeJNuktZ3mreaYGOYB4NP-YX6aWtxpjaLVoB2Yg20asZDVk5o2B66TUaZqMOQv9n0kiVhOJLzZYpjMoIOTyU_YN-27SKpbN5ccmb_esNdVCEVIwDlo2Yz66kdyklgA9ssVd-758LLcDZ0CJcF-7A7Sukyfq6ieZ8WUpBZFouR7gygCvfnWMw5n_RKMhNGxfmXJJXQdWPXvabMtscBkWiPjF-zjyP'
  }
];

export const MULTIMEDIA: MultimediaItem[] = [
  {
    id: 'v1',
    type: 'video',
    title: 'Sustentabilidade Urbana',
    subtitle: 'INVESTIGAÇÃO ESPECIAL',
    tags: ['Produção e Roteiro', 'Apresentação'],
    description: 'Investigação sobre a transição verde em centros urbanos e o impacto na habitação popular.',
    date: 'Maio 2024',
    platform: 'Rede de Notícias Universitária',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqTkWeTRo-hK-PrODkCclbDR_rGrbDpS_in7_uPYGHcHspBi4A2Du6_0esotqrU0qH0XB8mWhbcd2G9kEPNyP8XZT7rH1nxPXENwlXWz-aAwb01HnhJdFLKNamjZl2AX09KDTl20BRWelgjjyJb0UhE806v5uGjgjwqu-MtcrwPpRioaYSqpwScNSCZKUPgF6L7JrQ-tyB5cD-Mt1xDF_qNwWkt9LKPVKtC-Gt5yK-ulqSCT1Bp5OaGtDeqoErT_h5zcr_6asTj0df',
    isFeatured: true
  },
  {
    id: 'p1',
    type: 'podcast',
    title: 'Vozes da Cidade',
    subtitle: 'Série: Polarização Social',
    tags: ['Produção', 'Locução'],
    description: 'Uma análise profunda sobre como as bolhas digitais estão moldando o comportamento do eleitor brasileiro contemporâneo.',
    date: 'Jun 2024',
    platform: 'Canal Central de Mídia',
    imageUrl: 'https://picsum.photos/400/400?random=10',
    audioInfo: {
      episode: 'Ep 04: Algoritmos Sociais',
      duration: '45:00',
      current: '14:22'
    }
  },
  {
    id: 'p2',
    type: 'podcast',
    title: 'Retratos Sonoros',
    subtitle: 'Minisérie Documental',
    tags: ['Sonoplastia', 'Narração'],
    description: 'Narrativas imersivas que capturam os sons em extinção de profissões artesanais na era tecnológica.',
    date: 'Abr 2024',
    platform: 'Tech Journal TV',
    imageUrl: 'https://picsum.photos/400/400?random=11',
    audioInfo: {
      episode: 'Ep 01: O Último Sapateiro',
      duration: '12:30',
      current: '08:14'
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    period: 'Jun 2023 — Presente',
    role: 'Estagiária de Redação Digital',
    company: 'Jornal Metrópole',
    description: 'Curadoria de boletins informativos diários para uma audiência digital. Otimização de manchetes e metadados para SEO, aumentando o tráfego orgânico em 15%. Colaboração em reportagens investigativas sobre transparência governamental.',
    skills: ['SEO', 'Copywriting', 'Redação']
  },
  {
    id: 'e2',
    period: 'Set 2021 — Mai 2023',
    role: 'Repórter Universitária',
    company: 'Voz Acadêmica',
    description: 'Gestão da coluna \'Vida no Campus\', produzindo três reportagens de fôlego por semestre. Premiada como "Reportagem do Ano" por investigação sobre alocação de verbas universitárias.',
    skills: ['Investigação', 'Reportagem']
  },
  {
    id: 'e3',
    period: 'Jan 2020 — Ago 2021',
    role: 'Colaboradora Freelance',
    company: 'Gazeta Regional',
    description: 'Realização de mais de 50 entrevistas de campo com líderes comunitários e empresários locais. Desenvolvimento de coluna semanal focada em sustentabilidade.',
    skills: ['Entrevistas', 'Sustentabilidade']
  }
];

export const CATEGORIES: Category[] = ['Todos', 'Cultura', 'Moda', 'Sociedade', 'Educação', 'Tecnologia'];
