document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('apps-grid');

  fetch('/api/apps')
    .then(response => response.json())
    .then(apps => {
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
      grid.innerHTML = '<p style="color:red; grid-column:1/-1;">Error al cargar las redes. Intenta más tarde.</p>';
    });
});