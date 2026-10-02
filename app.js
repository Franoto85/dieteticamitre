/* ============================================================
   DIETÉTICA MITRE — VARIABLES EDITABLES (único lugar a editar)
   La dueña / desarrollador solo necesita cambiar este bloque.
   ============================================================ */
const CONFIG = {
  negocio: "Dietética Mitre",
  rubro: "Dietética, herboristería y suplementos",
  logo: "imagenes/logo.jpg",

  // PLACEHOLDERS EDITABLES — reemplazar por datos reales al publicar.
  // No inventar número: dejar tal cual hasta confirmar.
  whatsapp: "WHATSAPP_A_CONFIRMAR",
  whatsappLabel: "WHATSAPP_A_CONFIRMAR",

  instagramUsuario: "INSTAGRAM_A_CONFIRMAR",
  instagramUrl: "INSTAGRAM_A_CONFIRMAR", // Ej real: "https://instagram.com/usuario.real"

  direccion: "Av. Godoy Cruz 394, esquina Mitre, Ciudad de Mendoza",
  horarios: "HORARIOS_A_CONFIRMAR",
  mapsUrl: "MAPS_URL_A_CONFIRMAR", // Ej real: "https://maps.google.com/?q=Av.+Godoy+Cruz+394+Mendoza"

  envios: true, // Confirmado: el local realiza envíos. Zonas/costos a consultar por WhatsApp.

  avisoLegal: "Los productos, precios y promociones pueden variar. Consultá disponibilidad antes de realizar tu compra.",

  // Productos de DEMOSTRACIÓN — sin marcas, precios ni stock reales.
  // etiqueta: franja editorial. categoria: línea de clasificación visible.
  productos: [
    { nombre: "Proteína (ejemplo)", categoria: "Proteínas", etiqueta: "Para tu entrenamiento", desc: "Frasco de ejemplo. Consultá opciones disponibles.", arte: "protein", clase: "prod-prot" },
    { nombre: "Vitamina (ejemplo)", categoria: "Vitaminas", etiqueta: "Más buscados", desc: "Envase de ejemplo. Consultá opciones disponibles.", arte: "vit", clase: "prod-vit" },
    { nombre: "Mix de frutos secos (ejemplo)", categoria: "Alimentos saludables", etiqueta: "Opciones saludables", desc: "Bowl de ejemplo. Presentaciones a confirmar.", arte: "seeds", clase: "prod-ali" },
    { nombre: "Granola (ejemplo)", categoria: "Alimentos saludables", etiqueta: "Opciones saludables", desc: "Producto de ejemplo. Consultá variedades.", arte: "granola", clase: "prod-ali" },
    { nombre: "Hierbas para infusión (ejemplo)", categoria: "Herboristería", etiqueta: "Consultá disponibilidad", desc: "Taza de ejemplo. Consultá variedades.", arte: "tea", clase: "prod-herb" },
    { nombre: "Suplemento (ejemplo)", categoria: "Suplementos", etiqueta: "Para tu entrenamiento", desc: "Producto de ejemplo. Consultá opciones disponibles.", arte: "suple", clase: "prod-supl" }
  ],
  arteSVG: {
    protein: '<svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true"><rect x="18" y="8" width="28" height="8" rx="3" fill="#1e3d14"/><rect x="16" y="16" width="32" height="40" rx="8" fill="#fff" stroke="#1e3d14" stroke-width="3"/><rect x="16" y="30" width="32" height="12" fill="#ffd91f"/><path d="M26 36h12" stroke="#1e3d14" stroke-width="3" stroke-linecap="round"/></svg>',
    vit: '<svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true"><rect x="22" y="6" width="20" height="9" rx="2" fill="#1e3d14"/><rect x="20" y="15" width="24" height="41" rx="7" fill="#fff" stroke="#1e3d14" stroke-width="3"/><rect x="20" y="26" width="24" height="11" fill="#3a7d1e"/><circle cx="27" cy="47" r="3.4" fill="#ffd91f" stroke="#1e3d14" stroke-width="1.6"/><circle cx="37" cy="47" r="3.4" fill="#ffd91f" stroke="#1e3d14" stroke-width="1.6"/></svg>',
    seeds: '<svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true"><ellipse cx="32" cy="24" rx="19" ry="8" fill="#b97c2a"/><ellipse cx="32" cy="22" rx="15" ry="5.5" fill="#e8c07a"/><circle cx="26" cy="21" r="2.2" fill="#8a5a1d"/><circle cx="33" cy="20" r="2.2" fill="#8a5a1d"/><circle cx="38" cy="23" r="2.2" fill="#8a5a1d"/><path d="M13 27h38c0 11-8 21-19 21S13 38 13 27Z" fill="#fff" stroke="#1e3d14" stroke-width="3"/></svg>',
    granola: '<svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true"><rect x="16" y="14" width="32" height="42" rx="6" fill="#fff" stroke="#7a4d14" stroke-width="3"/><rect x="16" y="14" width="32" height="12" rx="6" fill="#ffd91f"/><circle cx="26" cy="38" r="3" fill="#d9a441"/><circle cx="34" cy="44" r="3" fill="#b97c2a"/><circle cx="40" cy="36" r="3" fill="#e8c07a" stroke="#b97c2a" stroke-width="1.5"/><circle cx="30" cy="50" r="2.4" fill="#8a5a1d"/></svg>',
    tea: '<svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true"><path d="M24 10c-2 4 2 6 0 10M32 10c-2 4 2 6 0 10M40 10c-2 4 2 6 0 10" stroke="#3a7d1e" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M16 28h28v9a14 14 0 0 1-28 0v-9Z" fill="#fff" stroke="#1e3d14" stroke-width="3"/><path d="M44 30h3a6 6 0 0 1 0 12h-4" fill="none" stroke="#1e3d14" stroke-width="3"/><path d="M28 48c3-5 9-5 12-1" stroke="#3a7d1e" stroke-width="3" stroke-linecap="round" fill="none"/></svg>',
    suple: '<svg viewBox="0 0 64 64" width="60" height="60" aria-hidden="true"><rect x="20" y="18" width="24" height="34" rx="5" fill="#1e3d14"/><rect x="20" y="30" width="24" height="10" fill="#ffd91f"/><rect x="26" y="8" width="12" height="10" rx="2" fill="#1e3d14"/><path d="M44 24l6-4M44 32h7" stroke="#1e3d14" stroke-width="3" stroke-linecap="round"/></svg>'
  }
};

/* ============ Lógica (no hace falta editar debajo) ============ */
(function () {
  "use strict";

  var toast = document.getElementById("toast");
  var toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 3200);
  }

  function isPlaceholderWhatsApp() {
    return !CONFIG.whatsapp || /WHATSAPP|A_CONFIRMAR|^#$/.test(CONFIG.whatsapp) || CONFIG.whatsapp.length < 8 || !/^\d+$/.test(CONFIG.whatsapp);
  }

  function isPlaceholderUrl(v) {
    return !v || v === "#" || /A_CONFIRMAR/.test(v);
  }

  function waLink(mensaje) {
    var base = isPlaceholderWhatsApp()
      ? "https://wa.me/"
      : "https://wa.me/" + CONFIG.whatsapp;
    return base + "?text=" + encodeURIComponent(mensaje || "Hola, quiero hacer una consulta a " + CONFIG.negocio + ".");
  }

  // 1. Render editorial de productos (composiciones demo, sin fotos de otro negocio)
  var grid = document.getElementById("productGrid");
  if (grid) {
    grid.innerHTML = CONFIG.productos.map(function (p) {
      var svg = (CONFIG.arteSVG && CONFIG.arteSVG[p.arte]) || "";
      return (
        '<article class="product-card editorial ' + p.clase + '">' +
          '<div class="product-art" role="img" aria-label="Ilustración de demostración: ' + p.nombre + ' (a reemplazar por foto real)">' +
            '<span class="product-tag">' + p.etiqueta + '</span>' +
            '<span class="product-svg">' + svg + '</span>' +
            '<span class="product-leaf" aria-hidden="true"></span>' +
            '<span class="photo-label">Demostración</span>' +
          "</div>" +
          '<div class="product-body">' +
            '<p class="product-cat">' + p.categoria + "</p>" +
            "<h3>" + p.nombre + "</h3>" +
            "<p>" + p.desc + "</p>" +
            '<span class="product-price">Consultar precio y disponibilidad</span>' +
            '<a href="#" class="btn btn-primary" data-wa="Hola Dietética Mitre, quiero consultar por: ' + p.nombre + '.">Consultar por WhatsApp</a>' +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  // 2. Conectar todos los botones WhatsApp
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var msg = el.getAttribute("data-wa");
    el.setAttribute("href", waLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    el.addEventListener("click", function (ev) {
      if (isPlaceholderWhatsApp()) {
        ev.preventDefault();
        showToast("Demo: conectá el número real de WhatsApp en CONFIG (app.js). Mensaje: \"" + msg + "\"");
      }
    });
  });

  // 3. Instagram + Maps + textos editables
  document.querySelectorAll("[data-instagram-link]").forEach(function (el) {
    var ph = isPlaceholderUrl(CONFIG.instagramUrl);
    el.setAttribute("href", ph ? "#" : CONFIG.instagramUrl);
    if (ph) {
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
        showToast("Instagram a confirmar: INSTAGRAM_A_CONFIRMAR.");
      });
    } else {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
    if (el.textContent.indexOf("INSTAGRAM") !== -1 || el.textContent.indexOf("@") !== -1) el.textContent = CONFIG.instagramUsuario;
  });

  document.querySelectorAll("[data-maps-link]").forEach(function (el) {
    var phMap = isPlaceholderUrl(CONFIG.mapsUrl);
    el.setAttribute("href", phMap ? "#" : CONFIG.mapsUrl);
    if (phMap) {
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
        showToast("URL de Google Maps a confirmar: MAPS_URL_A_CONFIRMAR.");
      });
    } else {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  document.querySelectorAll('[data-field="direccion"]').forEach(function (el) { el.textContent = CONFIG.direccion; });
  document.querySelectorAll('[data-field="horarios"]').forEach(function (el) { el.textContent = CONFIG.horarios; });
  document.querySelectorAll('[data-field="whatsappLabel"]').forEach(function (el) { el.textContent = CONFIG.whatsappLabel; });

  // 4. Menú móvil
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 5. Verificación silenciosa del logo (sin errores en consola para la demo)
  ["imagenes/logo.jpg"].forEach(function (src) {
    var img = new Image();
    img.onerror = function () {
      showToast("Atención: no se encontró " + src + ". Verificá que el archivo exista.");
    };
    img.src = src;
  });
})();
