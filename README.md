# Sombrerero Hermanos · Página web

Astro + Tailwind CSS. Es un sitio estático: no necesita servidor ni base de datos y se hospeda gratis.

## Correr en tu compu

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
npm run preview    # ver el build
```


Para probar en tu celular en la misma red: `npm run dev -- --host` y abre la IP que te muestra.

## Qué cambiar primero

1. **`src/config.ts`**: nombre, WhatsApp (`52` + 10 dígitos), teléfono, correo, dirección, horario, redes y mapa.
2. **`astro.config.mjs`**: `site` con tu dominio o subdominio final.
3. **Fotos**: reemplaza los `.svg` de `public/img/` por fotos reales en `.jpg` o `.webp`
   (de 1200 a 1600 px de ancho y menos de 300 KB cada una; puedes comprimirlas en squoosh.app).
4. **Textos de "Nosotros", del inicio y de las preguntas frecuentes**: busca el emoji ✏️.
5. **Formulario de pedidos**: saca tu clave gratis en web3forms.com con el correo de tu papá
   y ponla en `web3formsKey`.

## Agregar un producto

Crea un archivo en `src/content/productos/`, por ejemplo `freno-media-luna.md`:

```md
---
nombre: "Freno media luna"
categoria: frenos            # fustes | espuelas | frenos | hebillas | estribos | otros
precio: "Cotizar"            # o "Desde $1,500"
imagenes:
  - "/img/productos/freno-media-luna-1.jpg"
  - "/img/productos/freno-media-luna-2.jpg"
resumen: "Descripción corta que sale en la tarjeta y en Google."
materiales: ["Acero", "Plata"]
personalizable: true
destacado: false             # true = aparece en el inicio
orden: 10                    # menor = sale primero
---

## Detalles
Texto libre en Markdown.
```

El nombre del archivo es la URL: `/catalogo/freno-media-luna/`.

## Publicar gratis (Cloudflare Pages)

1. Sube el proyecto a un repo de GitHub.
2. En dash.cloudflare.com ve a **Workers & Pages**, luego **Create**, **Pages** y **Connect to Git**.
3. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
4. Cada `git push` publica una nueva versión.

También funciona igual en Vercel o Netlify (los detectan como Astro solos).

## Después de publicar

- Da de alta el sitio en Google Search Console.
- Crea el Perfil de Negocio de Google y pon el link de la web.
- Pon el link en WhatsApp Business, Facebook e Instagram.
