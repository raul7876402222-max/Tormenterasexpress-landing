const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let apps = [];
const appsFile = path.join(__dirname, 'apps.json');

function loadApps() {
  try {
    const data = fs.readFileSync(appsFile, 'utf8');
    apps = JSON.parse(data);
  } catch (err) {
    console.error('Error cargando apps:', err);
    apps = [];
  }
}

app.get('/api/apps', (req, res) => {
  loadApps();
  res.json(apps);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  loadApps();
});