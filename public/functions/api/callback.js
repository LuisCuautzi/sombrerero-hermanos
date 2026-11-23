// GET /api/callback
// GitHub regresa aquí; se cambia el "code" por un token y se lo pasa al panel.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookies = request.headers.get('Cookie') || '';
  const guardado = cookies.match(/(?:^|;\s*)oauth_state=([^;]+)/)?.[1];

  if (!code || !state || state !== guardado) {
    return respuesta('error', { error: 'La sesión expiró, intenta de nuevo.' }, url.origin);
  }

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': 'sombrerero-hermanos-cms',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });
  const data = await res.json();

  if (!data.access_token) {
    return respuesta('error', { error: data.error_description || 'No se pudo iniciar sesión.' }, url.origin);
  }
  return respuesta('success', { token: data.access_token, provider: 'github' }, url.origin);
}

// Página que se abre en la ventanita del login y le avisa al panel.
// Solo le manda el token a una ventana del MISMO sitio (origin).
function respuesta(estado, contenido, origin) {
  const seguro = (v) => JSON.stringify(v).replace(/</g, '\\u003c');
  const mensaje = `authorization:github:${estado}:${JSON.stringify(contenido)}`;
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="robots" content="noindex"></head>
<body style="font-family:system-ui;padding:2rem">
<p>${estado === 'success' ? 'Listo, ya puedes cerrar esta ventana.' : 'No se pudo iniciar sesión.'}</p>
<script>
(function () {
  var origen = ${seguro(origin)};
  function recibir(e) {
    if (e.origin !== origen) return;
    window.removeEventListener('message', recibir);
    window.opener.postMessage(${seguro(mensaje)}, origen);
  }
  window.addEventListener('message', recibir);
  if (window.opener) window.opener.postMessage('authorizing:github', origen);
})();
</script></body></html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Set-Cookie': 'oauth_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
    },
  });
}