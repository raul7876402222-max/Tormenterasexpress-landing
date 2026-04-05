document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('apps-grid');

  // Intentamos varias rutas posibles
  const possiblePaths = [
    'apps.json',
    '/apps.json',
    './apps.json',
    'public/apps.json'
  ];

  let loaded = false;

  const tryLoad = (path) => {
    fetch(path)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(apps => {
        if (loaded) return;
        loaded = true;
        console.log('✅ Cargadas', apps.length, 'redes desde', path);
        
        grid.innerHTML = '';

        apps.forEach(app => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <span class="icon">${app.icon}</span>
            <h3>${app.name}</h3>
            <a href="${app.url}" target="_blank" class="btn">Ir ahora →</a>
          `;
          grid.appendChild(card);
        });
      })
      .catch(() => {
        // Si falla, probamos la siguiente ruta
      });
  };

  // Probamos todas las rutas
  possiblePaths.forEach(path => tryLoad(path));

  // Si después de 2 segundos no cargó nada, mostramos error
  setTimeout(() => {
    if (!loaded && grid.children.length === 0) {
      grid.innerHTML = '<p style="color: #ff6b6b; grid-column: 1/-1; padding: 2rem 1rem;">Error al cargar las redes.<br>Intenta recargar la página.</p>';
    }
  }, 2000);
});