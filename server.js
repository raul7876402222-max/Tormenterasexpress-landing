const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Cargar apps desde apps.json
let apps = [];

function loadApps() {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'apps.json'), 'utf8');
    apps = JSON.parse(data);
    console.log(`✅ ${apps.length} tormenteras cargadas correctamente`);
  } catch (err) {
    console.error('Error cargando apps:', err);
    apps = [];
  }
}

// Ruta para obtener las apps
app.get('/api/apps', (req, res) => {
  loadApps();
  res.json(apps);
});

// Ruta principal - sirve el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Exportamos app para Vercel
module.exports = app;

// Solo ejecutar listen si NO estamos en Vercel
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    loadApps();
  });
}