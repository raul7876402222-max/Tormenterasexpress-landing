document.addEventListener('DOMContentLoaded', () => {
  // Botón grande Contáctanos
  const headerBtn = document.getElementById('contact-btn-header');
  if (headerBtn) {
    headerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showContactModal();
    });
  }
});

function showContactModal() {
  const modalHTML = `
    <div id="contact-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;z-index:10000;">
      <div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(20px);padding:2.5rem;border-radius:24px;width:90%;max-width:520px;border:2px solid rgba(255,255,255,0.3);">
        <h2 style="color:white;margin-bottom:2rem;text-align:center;">Contáctanos</h2>
        
        <button onclick="showEmailForm()" style="width:100%;padding:1.2rem;background:#00ffaa;color:black;border:none;border-radius:50px;font-weight:bold;font-size:1.1rem;margin-bottom:1rem;">
          ✉️ Enviar mensaje por Email
        </button>
        
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
  closeModal();
  alert("Formulario de Email se abrirá aquí.\n\n(Lo expandiremos más adelante con EmailJS completo)");
}

function closeModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.remove();
}