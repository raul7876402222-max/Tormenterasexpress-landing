document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('apps-grid');

  fetch('apps.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar apps.json');
      }
      return response.json();
    })
    .then(apps => {
      console.log('✅ Cargadas', apps.length, 'redes');
      grid.innerHTML = ''; // Limpiar por si acaso

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
    .catch(err => {
      console.error('Error cargando apps:', err);
      grid.innerHTML = '<p style="color:red; grid-column:1/-1; padding: 2rem;">Error al cargar las redes. Intenta más tarde.</p>';
    });
});