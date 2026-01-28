
export type Category = 'Todos' | 'Cultura' | 'Moda' | 'Sociedade' | 'Educação' | 'Política Urbana' | 'Meio Ambiente' | 'Tecnologia' | 'Comunidade';

export interface Article {
  id: string;
  title: string;
  description: string;
  category: Category;
  publication: string;
  date: string;
  readTime?: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface MultimediaItem {
  id: string;
  type: 'video' | 'podcast';
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  date: string;
  platform: string;
  imageUrl: string;
  isFeatured?: boolean;
  audioInfo?: {
    episode: string;
    duration: string;
    current: string;
  };
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}
