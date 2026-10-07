/* ============================================================
   DIETÉTICA MITRE — DEMO CONCEPTUAL DE PORTFOLIO
   No es el sitio oficial ni un trabajo realizado para el comercio.
   El contenido de esta demo se modifica en el código, no desde un panel.
   ============================================================ */
const CONFIG = {
  negocio: "Dietética Mitre",
  rubro: "Dietética, herboristería y suplementos",
  logo: "imagenes/logo.jpg",

  // PLACEHOLDERS SIN CONFIRMAR — no inventar datos.
  // WhatsApp, Instagram, horarios y Maps quedan pendientes.
  whatsapp: "WHATSAPP_A_CONFIRMAR",
  whatsappLabel: "WHATSAPP_A_CONFIRMAR",

  instagramUsuario: "INSTAGRAM_A_CONFIRMAR",
  instagramUrl: "INSTAGRAM_A_CONFIRMAR", // Ej real: "https://instagram.com/usuario.real"

  direccion: "Av. Godoy Cruz 394, esquina Mitre, Ciudad de Mendoza",
  horarios: "HORARIOS_A_CONFIRMAR",
  mapsUrl: "MAPS_URL_A_CONFIRMAR", // Ej real: "https://maps.google.com/?q=Av.+Godoy+Cruz+394+Mendoza"

  // Mención general permitida: "Consultá por envíos".
  // Sin zonas, costos, plazos ni condiciones confirmadas.
  enviosMencionGeneral: "Consultá por envíos",

  avisoLegal: "Demo conceptual de portfolio. Los productos y precios de muestra pueden variar.",

  categorias: [
    { id: "cat-herboristeria", nombre: "Herboristería" },
    { id: "cat-suplementos", nombre: "Suplementos" },
    { id: "cat-proteinas", nombre: "Proteínas" },
    { id: "cat-vitaminas", nombre: "Vitaminas" },
    { id: "cat-alimentos-saludables", nombre: "Alimentos saludables" }
  ],

  // Productos de DEMOSTRACIÓN — genéricos, sin marcas, sin precios ni stock reales.
  // precio: null significa "Consultar". Nunca usar $0 ni precios inventados.
  productos: [
    { nombre: "Mezcla para infusión (ejemplo)", categoria: "Herboristería", etiqueta: "Ejemplo de muestra", desc: "Mezcla genérica para infusión. Ejemplo sin marca real.", arte: "tea", clase: "prod-herb", precio: null },
    { nombre: "Hierbas surtidas (ejemplo)", categoria: "Herboristería", etiqueta: "Ejemplo de muestra", desc: "Hierbas genéricas envasadas. Presentación a modo ilustrativo.", arte: "tea", clase: "prod-herb", precio: null },
    { nombre: "Tisana de hierbas (ejemplo)", categoria: "Herboristería", etiqueta: "Ejemplo de muestra", desc: "Tisana genérica. Consultá variedades cuando el contacto esté confirmado.", arte: "tea", clase: "prod-herb", precio: null },
    { nombre: "Suplemento diario (ejemplo)", categoria: "Suplementos", etiqueta: "Ejemplo de muestra", desc: "Suplemento genérico de uso diario. Sin marca real.", arte: "suple", clase: "prod-supl", precio: null },
    { nombre: "Suplemento para entrenamiento (ejemplo)", categoria: "Suplementos", etiqueta: "Ejemplo de muestra", desc: "Suplemento genérico para acompañar el entrenamiento.", arte: "suple", clase: "prod-supl", precio: null },
    { nombre: "Suplemento vegetal (ejemplo)", categoria: "Suplementos", etiqueta: "Ejemplo de muestra", desc: "Suplemento genérico de origen vegetal. Ejemplo ilustrativo.", arte: "suple", clase: "prod-supl", precio: null },
    { nombre: "Proteína en polvo (ejemplo)", categoria: "Proteínas", etiqueta: "Ejemplo de muestra", desc: "Proteína genérica en polvo. Consultá opciones disponibles.", arte: "protein", clase: "prod-prot", precio: null },
    { nombre: "Barra proteica (ejemplo)", categoria: "Proteínas", etiqueta: "Ejemplo de muestra", desc: "Barra genérica con aporte proteico. Sin marca real.", arte: "protein", clase: "prod-prot", precio: null },
    { nombre: "Proteína vegetal (ejemplo)", categoria: "Proteínas", etiqueta: "Ejemplo de muestra", desc: "Proteína genérica de origen vegetal. Ejemplo ilustrativo.", arte: "protein", clase: "prod-prot", precio: null },
    { nombre: "Multivitamínico (ejemplo)", categoria: "Vitaminas", etiqueta: "Ejemplo de muestra", desc: "Multivitamínico genérico. Consultá opciones disponibles.", arte: "vit", clase: "prod-vit", precio: null },
    { nombre: "Vitamina C (ejemplo)", categoria: "Vitaminas", etiqueta: "Ejemplo de muestra", desc: "Vitamina C genérica. Ejemplo sin marca real.", arte: "vit", clase: "prod-vit", precio: null },
    { nombre: "Complejo B (ejemplo)", categoria: "Vitaminas", etiqueta: "Ejemplo de muestra", desc: "Complejo B genérico. Presentación a modo ilustrativo.", arte: "vit", clase: "prod-vit", precio: null },
    { nombre: "Mix de frutos secos (ejemplo)", categoria: "Alimentos saludables", etiqueta: "Ejemplo de muestra", desc: "Mezcla genérica de frutos secos. Presentaciones a modo ilustrativo.", arte: "seeds", clase: "prod-ali", precio: null },
    { nombre: "Granola (ejemplo)", categoria: "Alimentos saludables", etiqueta: "Ejemplo de muestra", desc: "Granola genérica. Consultá variedades cuando el contacto esté confirmado.", arte: "granola", clase: "prod-ali", precio: null },
    { nombre: "Avena integral (ejemplo)", categoria: "Alimentos saludables", etiqueta: "Ejemplo de muestra", desc: "Avena integral genérica para todos los días. Sin marca real.", arte: "granola", clase: "prod-ali", precio: null }
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

  function formatPrecio(p) {
    if (p.precio === null || p.precio === undefined || p.precio === "") return "Consultar";
    if (Number(p.precio) === 0) return "Consultar";
    return String(p.precio);
  }

  // 1. Render de catálogo demo agrupado por categoría (sin fotos reales, solo SVG demo)
  var catalogo = document.getElementById("catalogo");
  var gridLegacy = document.getElementById("productGrid");
  function productCard(p) {
    var svg = (CONFIG.arteSVG && CONFIG.arteSVG[p.arte]) || "";
    return (
      '<article class="product-card editorial ' + p.clase + '">' +
          '<div class="product-art" role="img" aria-label="Ilustración de demostración: ' + p.nombre + ' (no es foto real)">' +
            '<span class="product-tag">' + p.categoria + '</span>' +
            '<span class="product-svg">' + svg + '</span>' +
            '<span class="product-leaf" aria-hidden="true"></span>' +
            '<span class="photo-label">Demostración</span>' +
          "</div>" +
          '<div class="product-body">' +
            "<h3>" + p.nombre + "</h3>" +
          "<p>" + p.desc + "</p>" +
          '<span class="product-price">' + formatPrecio(p) + '</span>' +
          '<a href="#" class="btn btn-primary" data-wa="Hola Dietética Mitre, quiero consultar por: ' + p.nombre + '.">Consultar por WhatsApp</a>' +
        "</div>" +
      "</article>"
    );
  }
  if (catalogo) {
    var maxItems = 30;
    var items = (CONFIG.productos || []).slice(0, maxItems);
    catalogo.innerHTML = (CONFIG.categorias || []).map(function (cat) {
      var delCat = items.filter(function (p) { return p.categoria === cat.nombre; });
      if (!delCat.length) return "";
      return (
        '<section class="catalog-group" id="' + cat.id + '" aria-label="Categoría ' + cat.nombre + '">' +
          '<div class="catalog-group-head"><h3>' + cat.nombre + '</h3>' +
          '<span class="catalog-count">' + delCat.length + ' ejemplos</span></div>' +
          '<div class="product-grid">' + delCat.map(productCard).join("") + "</div>" +
        "</section>"
      );
    }).join("");
  } else if (gridLegacy) {
    gridLegacy.innerHTML = (CONFIG.productos || []).slice(0, 30).map(productCard).join("");
  }
  // Nota: los reveals se activan en initReveal (paso 4), tras el render.

  // 2. Conectar todos los botones WhatsApp (solo si hay número confirmado)
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var msg = el.getAttribute("data-wa");
    if (isPlaceholderWhatsApp()) {
      el.setAttribute("href", "#");
      el.removeAttribute("target");
      el.removeAttribute("rel");
    } else {
      el.setAttribute("href", waLink(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
    el.addEventListener("click", function (ev) {
      if (isPlaceholderWhatsApp()) {
        ev.preventDefault();
        showToast("Demo de portfolio: el WhatsApp aún no está configurado. Contacto pendiente de confirmación.");
      }
    });
  });

  // 3. Instagram + Maps + textos (pendientes de confirmación en esta demo)
  document.querySelectorAll("[data-instagram-link]").forEach(function (el) {
    var ph = isPlaceholderUrl(CONFIG.instagramUrl);
    el.setAttribute("href", ph ? "#" : CONFIG.instagramUrl);
    if (ph) {
      el.removeAttribute("target");
      el.removeAttribute("rel");
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
        showToast("Demo de portfolio: Instagram aún no configurado.");
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
      el.removeAttribute("target");
      el.removeAttribute("rel");
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
        showToast("Demo de portfolio: mapa aún no configurado.");
      });
    } else {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  document.querySelectorAll('[data-field="direccion"]').forEach(function (el) { el.textContent = CONFIG.direccion; });
  document.querySelectorAll('[data-field="horarios"]').forEach(function (el) { el.textContent = CONFIG.horarios; });
  document.querySelectorAll('[data-field="whatsappLabel"]').forEach(function (el) { el.textContent = CONFIG.whatsappLabel; });

  // 4. Reveal on scroll (respeta movimiento reducido)
  (function initReveal() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Catálogo dinámico: observar grupos y tarjetas cuando se rendericen.
    function collect() {
      var els = document.querySelectorAll(
        ".section-head, .kicker, .cat-card, .catalog-group-head, .step, " +
        ".info-row, .map-box, .cta-box, .shipping-copy, " +
        ".shipping-visual, .hero-local"
      );
      return els;
    }
    function arm(scope) {
      collect().forEach(function (el) {
        if (el.classList.contains("reveal") || el.closest(".hero")) return;
        el.classList.add("reveal");
      });
      // Escalonado dentro de grillas.
      document.querySelectorAll(".cat-grid, .steps").forEach(function (grid) {
        Array.prototype.forEach.call(grid.children, function (child, i) {
          child.style.setProperty("--d", Math.min(i * 90, 450) + "ms");
        });
      });
    }
    function revealCardGrid(container) {
      if (!container) return;
      Array.prototype.forEach.call(container.querySelectorAll(".product-card"), function (card, i) {
        card.classList.add("reveal");
        card.style.setProperty("--d", Math.min((i % 4) * 90, 360) + "ms");
        if (observer) observer.observe(card);
      });
    }
    var observer = null;
    if (!reduce && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            observer.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    }
    // Exponer para el render del catálogo (paso 1 lo llama tras pintar).
    window.__armReveals = function (catalogRoot) {
      arm();
      revealCardGrid(catalogRoot || document);
      var els = document.querySelectorAll(".reveal:not(.in)");
      if (reduce || !observer) {
        els.forEach(function (el) { el.classList.add("in"); });
      } else {
        els.forEach(function (el) { observer.observe(el); });
      }
    };
    window.__armReveals(null);
  })();

  // 5. Menú móvil
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
    document.addEventListener("keydown", function (ev) {
      if ((ev.key === "Escape" || ev.key === "Esc") && nav.classList.contains("open")) {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menú");
        menuBtn.focus();
      }
    });
  }

  // 5. Efectos de scroll: header compacto y spy (sin parallax)
  (function initScrollFx() {
    var header = document.getElementById("header");
    var ticking = false;

    function onScroll() {
      var y = window.scrollY || window.pageYOffset || 0;
      if (header) header.classList.toggle("scrolled", y > 24);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        (window.requestAnimationFrame || function (fn) { fn(); })(onScroll);
      }
    }, { passive: true });
    onScroll();

    // Scrollspy: resalta en el nav la sección visible.
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link[href^='#']"));
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    if ("IntersectionObserver" in window && links.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var a = map[en.target.id];
          if (!a) return;
          if (en.isIntersecting) {
            links.forEach(function (l) { l.classList.remove("active"); });
            a.classList.add("active");
          }
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      Object.keys(map).forEach(function (id) {
        var s = document.getElementById(id);
        if (s) spy.observe(s);
      });
    }
  })();

  // 6. Verificación silenciosa del logo (sin errores en consola para la demo)
  ["imagenes/logo.jpg"].forEach(function (src) {
    var img = new Image();
    img.onerror = function () {
      showToast("Atención: no se encontró " + src + ". Verificá que el archivo exista.");
    };
    img.src = src;
  });
})();
