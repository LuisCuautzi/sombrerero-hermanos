// ⚙️ Datos del negocio: están en src/data/sitio.json
// (se editan desde el panel: Configuración → Datos del sitio).
import sitio from './data/sitio.json';

export const SITE = {
  ...sitio,
  // Clave gratis de https://web3forms.com (no se edita desde el panel)
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