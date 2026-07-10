/* ═══════════════════════════════════════
   INSTITUT DES MARGES SAHARIENNES — SCRIPT PARTAGÉ
   Navigation, utilitaires, modales, toasts, formulaires génériques.
═══════════════════════════════════════ */

/* ── Helpers génériques ── */
function qs(sel, ctx)  { return (ctx || document).querySelector(sel); }
function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

function catLabel(id) {
  const cat = (window.IMS_DATA && window.IMS_DATA.categories || []).find(c => c.id === id);
  return cat ? cat.label : id;
}

function formatDate(iso, opts) {
  const d = new Date(iso + "T00:00:00");
  const options = opts || { day: "numeric", month: "long", year: "numeric" };
  return d.toLocaleDateString("fr-FR", options);
}

function debounce(fn, delay) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), delay || 250);
  };
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

/* ── Toast ── */
let toastTimer;
function showToast(message) {
  let toast = qs("#globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ── Navigation mobile + surbrillance page active ── */
function initNav() {
  const toggle  = qs("#navToggle");
  const nav     = qs("#mainNav");
  const overlay = qs("#navOverlay");

  function closeNav() {
    nav && nav.classList.remove("open");
    overlay && overlay.classList.remove("open");
    toggle && toggle.setAttribute("aria-expanded", "false");
  }
  function openNav() {
    nav && nav.classList.add("open");
    overlay && overlay.classList.add("open");
    toggle && toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.contains("open") ? closeNav() : openNav();
    });
  }
  if (overlay) overlay.addEventListener("click", closeNav);
  qsa("#mainNav a").forEach(a => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeNav(); });

  // Surligne le lien correspondant à la page courante
  const current = document.body.getAttribute("data-page");
  if (current) {
    qsa("#mainNav a[data-nav]").forEach(a => {
      if (a.getAttribute("data-nav") === current) a.classList.add("active");
    });
  }
}

/* ── Modales génériques ──
   Usage: <div class="modal-overlay" id="xyz">...<button data-modal-close>...
   Ouverture: openModal('xyz')  /  Fermeture: closeModal('xyz') */
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("open");
  document.body.style.overflow = "";
}
function initModals() {
  qsa(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
    qsa("[data-modal-close]", overlay).forEach(btn => {
      btn.addEventListener("click", () => closeModal(overlay.id));
    });
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") qsa(".modal-overlay.open").forEach(o => closeModal(o.id));
  });
}

/* ── Validation de formulaire générique ──
   field: élément .field contenant input/textarea + .field-error
   test: fonction(value) -> bool */
function validateField(fieldEl, test) {
  const input = qs("input, textarea, select", fieldEl);
  const ok = test(input.value.trim());
  fieldEl.classList.toggle("invalid", !ok);
  return ok;
}

/* ── Envoi vers Netlify Forms (AJAX) ── */
function postFormToNetlify(form) {
  const body = new URLSearchParams(new FormData(form)).toString();
  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body
  }).then(res => { if (!res.ok) throw new Error("network"); return res; });
}

/* ── Newsletter (Netlify Forms) ── */
function initNewsletterForm(formSelector, successSelector) {
  const form = qs(formSelector);
  if (!form) return;
  const success = qs(successSelector);

  form.addEventListener("submit", e => {
    e.preventDefault();
    const emailField = qs(".field", form);
    const emailInput = qs("input[type='email']", form);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());

    emailField.classList.toggle("invalid", !valid);
    if (!valid) { emailInput.focus(); return; }

    postFormToNetlify(form).then(() => {
      form.reset();
      if (success) success.classList.add("show");
      showToast("Inscription confirmée — merci de votre intérêt pour nos travaux.");
    }).catch(() => {
      showToast("Erreur d'envoi. Merci de réessayer dans un instant.");
    });
  });
}

/* ── Formulaire de contact (simulation d'envoi) ── */
function initContactForm(formSelector, successSelector) {
  const form = qs(formSelector);
  if (!form) return;
  const success = qs(successSelector);
  const submitBtn = qs("button[type='submit']", form);

  form.addEventListener("submit", e => {
    e.preventDefault();
    let allValid = true;

    const nameField = qs("[data-field='name']", form);
    if (nameField && !validateField(nameField, v => v.length > 1)) allValid = false;

    const emailField = qs("[data-field='email']", form);
    if (emailField && !validateField(emailField, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))) allValid = false;

    const messageField = qs("[data-field='message']", form);
    if (messageField && !validateField(messageField, v => v.length > 9)) allValid = false;

    if (!allValid) {
      const firstInvalid = qs(".field.invalid", form);
      if (firstInvalid) firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Envoi en cours…"; }

    postFormToNetlify(form).then(() => {
      form.reset();
      qsa(".field", form).forEach(f => f.classList.remove("invalid"));
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Envoyer le message"; }
      if (success) success.classList.add("show");
      showToast("Votre message a bien été envoyé.");
    }).catch(() => {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Envoyer le message"; }
      showToast("Erreur d'envoi. Merci de réessayer dans un instant.");
    });
  });
}

/* ── Initialisation commune à toutes les pages ── */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initModals();

  const year = qs("#currentYear");
  if (year) year.textContent = new Date().getFullYear();
});
