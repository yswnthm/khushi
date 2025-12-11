export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  previewImage: string;
}

export type CursorVariant = 'default' | 'hover' | 'text' | 'view' | 'drag';

export interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  text: string;
  setText: (text: string) => void;
}