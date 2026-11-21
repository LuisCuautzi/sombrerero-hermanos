// ⚙️ Datos del negocio: cambia todo aquí y se actualiza en toda la página
export const SITE = {
  nombre: 'Taller de Artesanias "Sombrerero Hermanos"',
  eslogan: 'Talabartería artesanal hecha a mano',
  descripcion:
    'Fustes forrados en acero, espuelas, frenos, hebillas y estribos hechos a mano por artesanos con años de oficio.',
  // WhatsApp con código de país, sin espacios ni signos (52 = México)
  whatsapp: '522228757299',
  telefono: '+52 222 875 7299 / +52 554 711 3732 ',
  email: 'sombrererohermanos@gmail.com',
  direccion: 'Calle 6 Oriente, #402, Barrio San Antonio, Amozoc de mota, Puebla',
  horario: 'Lunes a sábado, 9:00 a 18:00',
  // Pega aquí el link "Insertar mapa" de Google Maps (src del iframe)
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1496.6752249919027!2d-98.04062571784952!3d19.046801579355957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1795223840051!5m2!1ses-419!2smx',
  facebook: 'https://facebook.com/sombrererohermanos/',
  instagram: 'https://www.instagram.com/sombrererohermanos/',
  tiktok: 'https://www.tiktok.com/@artesanas.sombrer?_r=1&_t=ZS-9BZsrHzD81l',
  // Clave gratis de https://web3forms.com (llega al correo de tu papá)
  web3formsKey: 'cdd3726a-c9e1-40b3-8ea4-7b63790d1449',
};

export const CATEGORIAS = [
  { id: 'fustes', nombre: 'Fustes' },
  { id: 'espuelas', nombre: 'Espuelas' },
  { id: 'frenos', nombre: 'Frenos' },
  { id: 'hebillas', nombre: 'Hebillas' },
  { id: 'estribos', nombre: 'Estribos' },
  { id: 'otros', nombre: 'Otros' },
] as const;

export const waLink = (mensaje: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensaje)}`;
