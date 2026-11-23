import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z.object({
    nombre: z.string(),
    categoria: z.enum(['fustes', 'espuelas', 'frenos', 'hebillas', 'estribos', 'otros']),
    precio: z.string().default('Cotizar'),
    imagenes: z.array(z.string()).min(1),
    resumen: z.string(),
    materiales: z.array(z.string()).default([]),
    personalizable: z.boolean().default(true),
    destacado: z.boolean().default(false),
    orden: z.number().default(100),
  }),
});

 const testimonios = defineCollection({
   loader: glob({ pattern: '**/*.md', base: './src/content/testimonios' }),
   schema: z.object({
     nombre: z.string(),
     ciudad: z.string().optional(),
     foto: z.string().optional(),
     producto: z.string().optional(), // slug del producto, ej. "fuste-escudo-nacional"
     publicado: z.boolean().default(true),
     destacado: z.boolean().default(false), // sale en el inicio
     orden: z.number().default(100),
   }),
 });

export const collections = { productos, testimonios };
