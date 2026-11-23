// Los textos de cada categoría están en categorias.json
// (se editan desde el panel: Configuración → Categorías).
import datos from './categorias.json';

export interface InfoCategoria {
  id: 'fustes' | 'espuelas' | 'frenos' | 'hebillas' | 'estribos' | 'otros';
  slug: string; // URL de la página: /fustes/
  nombre: string; // nombre corto para botones
  titulo: string; // H1 y título de la pestaña
  descripcion: string; // descripción para Google (máx. ~155 caracteres)
  intro: string[]; // párrafos de introducción
  preguntas: { p: string; r: string }[];
  whatsapp: string; // mensaje del botón de WhatsApp
}

export const INFO_CATEGORIAS = datos.categorias as InfoCategoria[];

export const urlCategoria = (id: string) => {
  const info = INFO_CATEGORIAS.find((c) => c.id === id);
  return info ? `/${info.slug}/` : '/catalogo/';
};