const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal explícita
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para apps
app.get('/api/apps', (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'public', 'apps.json'), 'utf8');
    const apps = JSON.parse(data);
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: 'Error loading apps' });
  }
});

module.exports = app;

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}