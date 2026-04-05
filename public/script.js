document.addEventListener('DOMContentLoaded', () => {
  emailjs.init("-Nw1j0pJU4DnYanCi");

  const grid = document.getElementById('apps-grid');

  const apps = [
    { name: "X", url: "https://x.com/TormenteraXpres", icon: "𝕏" },
    { name: "Facebook", url: "https://facebook.com/TormenterasExpress", icon: "f" },
    { name: "Instagram", url: "https://instagram.com/tormenteras_express", icon: "📷" },
    { name: "TikTok", url: "https://tiktok.com/@Tormenteras.expre", icon: "♪" },
    { name: "YouTube", url: "https://youtube.com/@tormenterasexpress", icon: "▶" },
    { name: "Truth Social", url: "https://truthsocial.com/@TormenterasExpress", icon: "T" }
  ];

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

  // Botón grande "Contáctanos" en la parte superior
  const headerContactBtn = document.getElementById('contact-btn-header');
  if (headerContactBtn) {
    headerContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showContactModal();
    });
  }
});

// ==================== MODAL DE CONTACTO CON DOS OPCIONES ====================
function showContactModal() {
  const modalHTML = `
    <div id="contact-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;z-index:10000;">
      <div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(20px);padding:2.5rem;border-radius:24px;width:90%;max-width:520px;border:2px solid rgba(255,255,255,0.3);">
        <h2 style="color:white;margin-bottom:2rem;text-align:center;">Contáctanos</h2>
        
        <!-- Opción 1: Enviar Email -->
        <button onclick="showEmailForm()" style="width:100%;padding:1.2rem;background:#00ffaa;color:black;border:none;border-radius:50px;font-weight:bold;font-size:1.1rem;margin-bottom:1rem;">
          ✉️ Enviar mensaje por Email
        </button>
        
        <!-- Opción 2: Llamar por Teléfono -->
        <a href="tel:7876386000" style="display:block;width:100%;padding:1.2rem;background:transparent;color:white;border:2px solid #00ffaa;border-radius:50px;text-align:center;text-decoration:none;font-weight:bold;font-size:1.1rem;">
          📞 Llamar al 787-638-6000
        </a>
        
        <button onclick="closeModal()" style="width:100%;padding:1rem;background:transparent;color:white;border:2px solid white;border-radius:50px;margin-top:1.5rem;">Cancelar</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function showEmailForm() {
  closeModal(); // Cerrar modal actual
  
  // Mostrar formulario de EmailJS
  const emailModalHTML = `
    <div id="email-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;z-index:10001;">
      <div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(20px);padding:2.5rem;border-radius:24px;width:90%;max-width:480px;border:2px solid rgba(255,255,255,0.3);">
        <h2 style="color:white;margin-bottom:1.5rem;text-align:center;">Enviar Mensaje</h2>
        
        <input type="text" id="modal-name" placeholder="Tu nombre" style="width:100%;padding:1rem;margin-bottom:1rem;border-radius:12px;border:none;background:rgba(255,255,255,0.1);color:white;">
        <input type="email" id="modal-email" placeholder="Tu correo electrónico" style="width:100%;padding:1rem;margin-bottom:1rem;border-radius:12px;border:none;background:rgba(255,255,255,0.1);color:white;">
        <textarea id="modal-message" placeholder="Escribe tu mensaje aquí..." rows="5" style="width:100%;padding:1rem;margin-bottom:1rem;border-radius:12px;border:none;background:rgba(255,255,255,0.1);color:white;resize:vertical;"></textarea>
        
        <button onclick="sendEmail()" style="width:100%;padding:1.2rem;background:#00ffaa;color:black;border:none;border-radius:50px;font-weight:bold;font-size:1.1rem;margin-bottom:0.8rem;">Enviar Mensaje</button>
        <button onclick="closeEmailModal()" style="width:100%;padding:1rem;background:transparent;color:white;border:2px solid white;border-radius:50px;">Volver</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', emailModalHTML);
}

function closeModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.remove();
}

function closeEmailModal() {
  const modal = document.getElementById('email-modal');
  if (modal) modal.remove();
}

function sendEmail() {
  const name = document.getElementById('modal-name').value.trim();
  const email = document.getElementById('modal-email').value.trim();
  const message = document.getElementById('modal-message').value.trim();

  if (!name || !email || !message) {
    alert("❌ Por favor completa todos los campos");
    return;
  }

  emailjs.send("service_v6flril", "template_sm2b3h9", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(() => {
    alert("✅ ¡Mensaje enviado correctamente!");
    closeEmailModal();
  })
  .catch((error) => {
    console.error(error);
    alert("❌ Error al enviar. Inténtalo de nuevo.");
  });
}