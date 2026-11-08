(function () {
  var content = window.QUADRA_CONTENT;
  var app = document.getElementById("app");
  if (!content || !app) return;

  var ui = {
    he: {
      project: "הפרויקט",
      location: "המיקום",
      apartments: "הדירות",
      plans: "תוכניות דירה",
      gallery: "גלריה",
      contact: "צור קשר",
      langs: { he: "עברית", en: "English", fr: "Français" },
      menu: "תפריט",
      skip: "דילוג לתוכן",
      draft: "טיוטת מבנה. שמים את הקבצים בתיקיית media לפי השם שמופיע על כל מסגרת.",
      prev: "הקודם",
      next: "הבא",
      construction: "תמונות מאתר הבנייה",
      constructionTitle: "תמונות מאתר הבנייה",
      close: "סגירה",
      spec: "מפרט טכני (PDF)",
      specMissing: "הקובץ יתווסף",
      waiting: "ממתין לקובץ",
      plansIntro: "בוחרים בניין, אחר כך קומה, ואז דירה. תוכנית הקומה ותוכנית הדירה יופיעו כאן.",
      building: "בניין",
      floor: "קומה",
      garden: "קומת גן",
      floorN: function (n) { return "קומה " + n; },
      apartment: "דירה",
      rooms: function (n) { return n + " חדרים"; },
      bedrooms: function (n) { return n + " חדרי שינה"; },
      catalog: "תוכנית כללית",
      floorPlan: "תוכנית קומה",
      unitPlan: "תוכנית דירה",
      unitsLabel: "דירות במבנה",
      address: "כתובת",
      phone: "טלפון",
      email: "אימייל",
      map: "פתיחה במפה",
      name: "שם",
      addressField: "כתובת",
      send: "שליחה",
      formNote: "בטיוטה הזו הטופס עדיין לא נשלח. הוא מוכן לחיבור כשהאתר יעלה.",
      thanks: "תודה. בטיוטה הזו הפנייה נשארת במסך ולא נשלחת.",
      required: "נא למלא שם ואימייל תקינים.",
      disclaimer: "הדמיות ותוכניות יוצגו להמחשה בלבד לאחר העלאת החומר.",
      slide: "שקופית",
      photo: "תמונה"
    },
    en: {
      project: "The Project",
      location: "The Location",
      apartments: "The Apartments",
      plans: "Floor Plans",
      gallery: "Gallery",
      contact: "Contact Us",
      langs: { he: "עברית", en: "English", fr: "Français" },
      menu: "Menu",
      skip: "Skip to content",
      draft: "Structure draft. Add files under media using the name shown on each frame.",
      prev: "Previous",
      next: "Next",
      construction: "Pictures from the construction site",
      constructionTitle: "Construction site",
      close: "Close",
      spec: "Technical specification (PDF)",
      specMissing: "The file will be added",
      waiting: "Waiting for file",
      plansIntro: "Choose a building, then a floor, then an apartment. The floor plan and the apartment plan appear here.",
      building: "Building",
      floor: "Floor",
      garden: "Garden level",
      floorN: function (n) { return "Floor " + n; },
      apartment: "Apartment",
      rooms: function (n) { return n + " rooms"; },
      bedrooms: function (n) { return n + " bedrooms"; },
      catalog: "Overview plan",
      floorPlan: "Floor plan",
      unitPlan: "Apartment plan",
      unitsLabel: "apartments in this structure",
      address: "Address",
      phone: "Phone",
      email: "Email",
      map: "Open in maps",
      name: "Name",
      addressField: "Address",
      send: "Send",
      formNote: "This draft form is not sent yet. It is ready to connect when the site goes live.",
      thanks: "Thank you. In this draft the inquiry stays on screen and is not sent.",
      required: "Please enter a name and a valid email.",
      disclaimer: "Renderings and plans will be shown for illustration once the files are added.",
      slide: "Slide",
      photo: "Photo"
    },
    fr: {
      project: "Le Projet",
      location: "L'emplacement",
      apartments: "Les Appartements",
      plans: "Plans des appartements",
      gallery: "Galerie photos",
      contact: "Contactez-nous",
      langs: { he: "עברית", en: "English", fr: "Français" },
      menu: "Menu",
      skip: "Aller au contenu",
      draft: "Maquette de structure. Ajoutez les fichiers dans media selon le nom affiché sur chaque cadre.",
      prev: "Précédent",
      next: "Suivant",
      construction: "Photos du chantier",
      constructionTitle: "Photos du chantier",
      close: "Fermer",
      spec: "Descriptif technique (PDF)",
      specMissing: "Le fichier sera ajouté",
      waiting: "En attente du fichier",
      plansIntro: "Choisissez un bâtiment, puis un étage, puis un appartement. Le plan d'étage et le plan de l'appartement s'affichent ici.",
      building: "Bâtiment",
      floor: "Étage",
      garden: "Rez-de-jardin",
      floorN: function (n) { return "Étage " + n; },
      apartment: "Appartement",
      rooms: function (n) { return n + " pièces"; },
      bedrooms: function (n) { return n + " chambres"; },
      catalog: "Plan d'ensemble",
      floorPlan: "Plan d'étage",
      unitPlan: "Plan de l'appartement",
      unitsLabel: "appartements dans cette structure",
      address: "Adresse",
      phone: "Téléphone",
      email: "E-mail",
      map: "Ouvrir dans la carte",
      name: "Nom",
      addressField: "Adresse",
      send: "Envoyer",
      formNote: "Dans cette maquette, le formulaire n'est pas encore envoyé. Il est prêt à être branché.",
      thanks: "Merci. Dans cette maquette, la demande reste à l'écran et n'est pas envoyée.",
      required: "Indiquez un nom et un e-mail valable.",
      disclaimer: "Les visuels et les plans seront présentés à titre illustratif une fois les fichiers ajoutés.",
      slide: "Diapositive",
      photo: "Photo"
    }
  };

  var pages = [
    ["project", "/quadra/"],
    ["location", "/quadra/location/"],
    ["apartments", "/quadra/apartments/"],
    ["plans", "/quadra/plans/"],
    ["gallery", "/quadra/gallery/"],
    ["contact", "/quadra/contact/"]
  ];

  var page = document.body.getAttribute("data-page");
  var state = {
    lang: document.documentElement.lang === "en" || document.documentElement.lang === "fr" ? document.documentElement.lang : "he",
    menu: false,
    slide: 0,
    gallery: 0,
    building: null,
    floor: null,
    unit: null,
    lightbox: null,
    formSent: false,
    formError: false,
    form: { name: "", email: "", phone: "", address: "" }
  };

  var sliderTimer = 0;

  function t() { return ui[state.lang]; }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function media(path) { return "/quadra/media/" + path; }

  function parseRoom(value) {
    var raw = String(value);
    return { rooms: parseInt(raw, 10), kind: raw.slice(-1) === "b" ? "bedrooms" : "rooms" };
  }

  function buildings() {
    return content.buildings.map(function (building) {
      var n = 0;
      return {
        id: building.id,
        floors: building.floors.map(function (pair) {
          var units = pair[1].map(function (value) {
            n += 1;
            var room = parseRoom(value);
            return { n: n, rooms: room.rooms, kind: room.kind };
          });
          return { id: pair[0], units: units };
        })
      };
    });
  }

  function unitCount() {
    return buildings().reduce(function (sum, building) {
      return sum + building.floors.reduce(function (inner, floor) {
        return inner + floor.units.length;
      }, 0);
    }, 0);
  }

  function floorLabel(id) {
    return id === "garden" ? t().garden : t().floorN(id);
  }

  function unitLabel(unit) {
    var size = t()[unit.kind](unit.rooms);
    return t().apartment + " " + unit.n + " (" + size + ")";
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function button(className, action, text) {
    var node = el("button", className, text);
    node.type = "button";
    node.setAttribute("data-action", action);
    return node;
  }

  function frame(src, caption) {
    var fig = el("figure", "frame");
    fig.setAttribute("data-src", src);
    var img = document.createElement("img");
    img.alt = caption;
    img.decoding = "async";
    img.addEventListener("load", function () {
      if (img.naturalWidth > 0) {
        fig.classList.add("is-ready");
        if (page === "project") startSlider();
      }
    });
    img.addEventListener("error", function () { fig.classList.add("is-empty"); });
    img.src = src;
    var cap = el("figcaption");
    cap.append(el("span", null, t().waiting), el("code", null, src.replace("/quadra/", "")));
    fig.append(img, cap);
    return fig;
  }

  function applyLang() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "he" ? "rtl" : "ltr";
    try { localStorage.setItem("quadra_lang", state.lang); } catch (e) {}
    var url = new URL(location.href);
    url.searchParams.set("lang", state.lang);
    history.replaceState(null, "", url);
    var titles = {
      project: t().project,
      location: t().location,
      apartments: t().apartments,
      plans: t().plans,
      gallery: t().gallery,
      contact: t().contact
    };
    document.title = "Quadra — " + titles[page];
  }

  function header() {
    var headerNode = el("header", "site-header");
    if (content.draft) headerNode.append(el("div", "draft", t().draft));
    var bar = el("div", "bar");
    var logo = el("a", "logo");
    logo.href = "/quadra/?lang=" + state.lang;
    logo.append(el("span", "logo-en", "QUADRA"), el("span", "logo-he", "קוואדרה"));
    var langs = el("div", "langs");
    ["he", "en", "fr"].forEach(function (code) {
      var langBtn = button(null, "lang", t().langs[code]);
      langBtn.setAttribute("data-lang", code);
      langBtn.setAttribute("aria-pressed", code === state.lang ? "true" : "false");
      langBtn.setAttribute("lang", code);
      langs.append(langBtn);
    });
    var menu = button("menu-btn", "menu", t().menu);
    menu.setAttribute("aria-expanded", state.menu ? "true" : "false");
    bar.append(logo, langs, menu);
    var nav = el("nav", "nav" + (state.menu ? " is-open" : ""));
    nav.setAttribute("aria-label", t().menu);
    pages.forEach(function (item) {
      var link = el("a", null, t()[item[0]]);
      link.href = item[1] + "?lang=" + state.lang;
      if (item[0] === page) link.setAttribute("aria-current", "page");
      nav.append(link);
    });
    headerNode.append(bar, nav);
    return headerNode;
  }

  function controls(prefix, index, total) {
    var row = el("div", prefix + "-controls");
    var back = state.lang === "he" ? "›" : "‹";
    var forward = state.lang === "he" ? "‹" : "›";
    var prev = button("icon-btn", prefix + "-prev", back);
    prev.setAttribute("aria-label", t().prev);
    var next = button("icon-btn", prefix + "-next", forward);
    next.setAttribute("aria-label", t().next);
    var dots = el("div", "dots");
    for (var i = 0; i < total; i += 1) {
      var dot = button(null, prefix + "-goto");
      dot.setAttribute("data-index", String(i));
      dot.setAttribute("aria-label", t().slide + " " + (i + 1));
      if (i === index) dot.setAttribute("aria-current", "true");
      dots.append(dot);
    }
    row.append(prev, dots, next);
    return row;
  }

  function projectPage() {
    var main = el("main", "wrap");
    main.id = "main";
    main.append(el("h1", "page-title", t().project));
    var hero = el("div", "hero");
    var src = media("project/" + pad(state.slide + 1) + ".jpg");
    hero.append(
      frame(src, t().slide + " " + (state.slide + 1)),
      controls("slide", state.slide, content.counts.projectSlides)
    );
    var split = el("div", "split");
    var prose = el("div", "prose");
    prose.append(el("p", "lede", content.texts.project[state.lang]));
    var side = el("aside", "side-card");
    side.append(el("h2", null, t().constructionTitle));
    var open = button("text-btn", "open-construction", t().construction);
    var note = el("p", "file-note");
    note.append(document.createTextNode(t().waiting + " "), el("code", null, "media/construction/01.jpg … " + pad(content.counts.construction) + ".jpg"));
    side.append(open, note);
    split.append(prose, side);
    main.append(hero, split);
    return main;
  }

  function locationPage() {
    var main = el("main", "wrap");
    main.id = "main";
    main.append(
      el("h1", "page-title", t().location),
      frame(media("location/01.jpg"), t().location),
      el("p", "lede", content.texts.location[state.lang])
    );
    return main;
  }

  function apartmentsPage() {
    var main = el("main", "wrap");
    main.id = "main";
    main.append(el("h1", "page-title", t().apartments), el("p", "lede", content.texts.apartments[state.lang]));
    var row = el("div", "photo-row");
    for (var i = 1; i <= content.counts.apartmentPhotos; i += 1) {
      row.append(frame(media("apartments/" + pad(i) + ".jpg"), t().photo + " " + i));
    }
    var spec = el("p", "pdf-note");
    var link = el("a", "pdf-link", t().spec);
    link.href = media("spec.pdf");
    link.id = "spec-link";
    spec.append(link, document.createTextNode(" · " + t().specMissing + " "), el("code", null, "media/spec.pdf"));
    main.append(row, spec);
    return main;
  }

  function plansPage() {
    var main = el("main", "wrap");
    main.id = "main";
    var model = buildings();
    main.append(
      el("h1", "page-title", t().plans),
      el("p", "lede", unitCount() + " " + t().unitsLabel + ". " + t().plansIntro)
    );
    var layout = el("div", "plans");
    var tree = el("div", "tree");
    model.forEach(function (building) {
      var block = el("section", "building");
      var open = state.building === building.id;
      var toggle = button("building-toggle", "building", t().building + " " + building.id);
      toggle.setAttribute("data-building", building.id);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      block.append(toggle);
      if (open) {
        var floors = el("ul", "floor-list");
        building.floors.forEach(function (floor) {
          var item = el("li");
          var floorBtn = button("floor-toggle", "floor", floorLabel(floor.id));
          floorBtn.setAttribute("data-floor", floor.id);
          var floorOpen = state.floor === floor.id;
          floorBtn.setAttribute("aria-expanded", floorOpen ? "true" : "false");
          item.append(floorBtn);
          if (floorOpen) {
            var units = el("ul", "unit-list");
            floor.units.forEach(function (unit) {
              var unitItem = el("li");
              var unitBtn = button("unit-toggle", "unit", unitLabel(unit));
              unitBtn.setAttribute("data-unit", String(unit.n));
              if (state.unit === unit.n) unitBtn.setAttribute("aria-current", "true");
              unitItem.append(unitBtn);
              units.append(unitItem);
            });
            item.append(units);
          }
          floors.append(item);
        });
        block.append(floors);
      }
      tree.append(block);
    });
    var stage = el("div", "plan-stage");
    var src = media("plans/catalog.jpg");
    var caption = t().catalog;
    var title = t().catalog;
    var current = buildings().filter(function (item) { return item.id === state.building; })[0];
    var currentFloor = current && current.floors.filter(function (item) { return item.id === state.floor; })[0];
    var currentUnit = currentFloor && currentFloor.units.filter(function (item) { return item.n === state.unit; })[0];
    if (currentUnit) {
      src = media("plans/" + state.building + "/unit-" + state.unit + ".jpg");
      title = t().building + " " + state.building + " · " + floorLabel(state.floor) + " · " + unitLabel(currentUnit);
      caption = title;
    } else if (currentFloor) {
      src = media("plans/" + state.building + "/floor-" + state.floor + ".jpg");
      title = t().building + " " + state.building + " · " + floorLabel(state.floor);
      caption = title;
    }
    stage.append(el("h2", null, title), frame(src, caption));
    layout.append(tree, stage);
    main.append(layout);
    return main;
  }

  function galleryPage() {
    var main = el("main", "wrap");
    main.id = "main";
    var total = content.counts.gallery;
    var src = media("gallery/" + pad(state.gallery + 1) + ".jpg");
    main.append(el("h1", "page-title", t().gallery));
    var layout = el("div", "gallery-layout");
    var primary = el("div");
    primary.append(frame(src, t().photo + " " + (state.gallery + 1)), controls("gallery", state.gallery, total));
    var thumbs = el("div", "thumbs");
    for (var i = 0; i < total; i += 1) {
      var thumbBtn = button("thumb", "gallery-goto");
      thumbBtn.setAttribute("data-index", String(i));
      var label = t().photo + " " + (i + 1);
      thumbBtn.setAttribute("aria-label", label);
      if (i === state.gallery) thumbBtn.setAttribute("aria-current", "true");
      var thumbImg = document.createElement("img");
      thumbImg.alt = "";
      thumbImg.decoding = "async";
      thumbImg.addEventListener("load", function (event) {
        if (event.currentTarget.naturalWidth > 0) event.currentTarget.parentNode.classList.add("is-ready");
      });
      thumbImg.src = media("gallery/" + pad(i + 1) + ".jpg");
      thumbBtn.append(thumbImg, el("span", null, String(i + 1)));
      thumbs.append(thumbBtn);
    }
    layout.append(primary, thumbs);
    main.append(layout);
    return main;
  }

  function contactPage() {
    var main = el("main", "wrap");
    main.id = "main";
    main.append(el("h1", "page-title", t().contact));
    var layout = el("div", "contact-layout");
    var card = el("section", "contact-card");
    card.append(el("h2", null, t().address));
    card.append(el("p", null, content.address[state.lang]));
    var phone = el("p");
    phone.append(el("span", null, t().phone + ": "));
    var phoneLink = el("a", null, content.phone);
    phoneLink.href = content.phoneHref;
    phoneLink.dir = "ltr";
    phone.append(phoneLink);
    var email = el("p");
    email.append(el("span", null, t().email + ": "));
    var emailLink = el("a", null, content.email);
    emailLink.href = "mailto:" + content.email;
    emailLink.dir = "ltr";
    email.append(emailLink);
    var map = el("p");
    var mapLink = el("a", null, t().map);
    mapLink.href = "https://maps.google.com/?q=37+Mekor+Chaim+Street+Jerusalem";
    mapLink.target = "_blank";
    mapLink.rel = "noopener noreferrer";
    map.append(mapLink);
    card.append(phone, email, map);
    layout.append(frame(media("contact/01.jpg"), t().contact), card);
    main.append(layout);
    return main;
  }

  function footer() {
    var footerNode = el("footer", "site-footer");
    var grid = el("div", "footer-grid");
    var about = el("div");
    about.append(el("strong", null, "QUADRA"));
    about.append(el("p", null, content.address[state.lang]));
    var phone = el("p");
    var phoneLink = el("a", null, content.phone);
    phoneLink.href = content.phoneHref;
    phoneLink.dir = "ltr";
    phone.append(phoneLink);
    var email = el("p");
    var emailLink = el("a", null, content.email);
    emailLink.href = "mailto:" + content.email;
    emailLink.dir = "ltr";
    email.append(emailLink);
    about.append(phone, email, el("p", "fine", t().disclaimer));
    var card = el("form", "footer-card lead");
    card.setAttribute("data-action", "lead");
    card.noValidate = true;
    if (state.formSent) {
      card.append(el("p", "form-note", t().thanks));
    } else {
      [
        ["name", t().name, "text", true],
        ["email", t().email, "email", true],
        ["phone", t().phone, "tel", false],
        ["address", t().addressField, "text", false]
      ].forEach(function (field) {
        var label = el("label");
        label.append(el("span", null, field[1]));
        var input = document.createElement("input");
        input.name = field[0];
        input.type = field[2];
        input.autocomplete = field[0] === "name" ? "name" : field[0] === "email" ? "email" : field[0] === "phone" ? "tel" : "street-address";
        if (field[3]) input.required = true;
        input.value = state.form[field[0]] || "";
        label.append(input);
        card.append(label);
      });
      if (state.formError) card.append(el("p", "form-error", t().required));
      card.append(el("p", "form-note", t().formNote));
      var send = el("button", "send", t().send);
      send.type = "submit";
      card.append(send);
    }
    grid.append(about, card);
    footerNode.append(grid);
    return footerNode;
  }

  function lightbox() {
    if (!state.lightbox) return null;
    var dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    var box = el("div", "lightbox-card");
    var bar = el("div", "lightbox-bar");
    bar.append(el("strong", null, t().constructionTitle));
    var close = button("text-btn", "close-lightbox", t().close);
    bar.append(close);
    var grid = el("div", "lightbox-grid");
    for (var i = 1; i <= content.counts.construction; i += 1) {
      grid.append(frame(media("construction/" + pad(i) + ".jpg"), t().photo + " " + i));
    }
    box.append(bar, grid);
    dialog.append(box);
    dialog.addEventListener("close", function () {
      state.lightbox = null;
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    return dialog;
  }

  function render() {
    var y = window.scrollY;
    applyLang();
    clearInterval(sliderTimer);
    var skip = el("a", "skip", t().skip);
    skip.href = "#main";
    var view = {
      project: projectPage,
      location: locationPage,
      apartments: apartmentsPage,
      plans: plansPage,
      gallery: galleryPage,
      contact: contactPage
    }[page]();
    app.replaceChildren(header(), skip, view, footer());
    var dialog = lightbox();
    if (dialog) {
      app.append(dialog);
      dialog.showModal();
    }
    window.scrollTo(0, y);
  }

  function startSlider() {
    clearInterval(sliderTimer);
    if (page !== "project") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!document.querySelector(".hero .frame.is-ready")) return;
    sliderTimer = setInterval(function () {
      state.slide = (state.slide + 1) % content.counts.projectSlides;
      render();
    }, 6000);
  }

  document.addEventListener("click", function (event) {
    var target = event.target.closest("[data-action]");
    if (!target || !app.contains(target)) return;
    var action = target.getAttribute("data-action");
    if (action === "lang") {
      state.lang = target.getAttribute("data-lang");
      render();
      return;
    }
    if (action === "menu") {
      state.menu = !state.menu;
      render();
      return;
    }
    if (action === "slide-prev" || action === "slide-next" || action === "slide-goto") {
      var total = content.counts.projectSlides;
      if (action === "slide-goto") state.slide = Number(target.getAttribute("data-index"));
      if (action === "slide-prev") state.slide = (state.slide + total - 1) % total;
      if (action === "slide-next") state.slide = (state.slide + 1) % total;
      render();
      return;
    }
    if (action === "gallery-prev" || action === "gallery-next" || action === "gallery-goto") {
      var photos = content.counts.gallery;
      if (action === "gallery-goto") state.gallery = Number(target.getAttribute("data-index"));
      if (action === "gallery-prev") state.gallery = (state.gallery + photos - 1) % photos;
      if (action === "gallery-next") state.gallery = (state.gallery + 1) % photos;
      render();
      return;
    }
    if (action === "open-construction") {
      state.lightbox = true;
      render();
      return;
    }
    if (action === "close-lightbox") {
      var dialog = app.querySelector("dialog");
      if (dialog) dialog.close();
      state.lightbox = null;
      return;
    }
    if (action === "building") {
      var id = target.getAttribute("data-building");
      state.building = state.building === id ? null : id;
      state.floor = null;
      state.unit = null;
      render();
      return;
    }
    if (action === "floor") {
      var floorId = target.getAttribute("data-floor");
      state.floor = state.floor === floorId ? null : floorId;
      state.unit = null;
      render();
      return;
    }
    if (action === "unit") {
      state.unit = Number(target.getAttribute("data-unit"));
      render();
    }
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form.classList.contains("lead")) return;
    event.preventDefault();
    var data = new FormData(form);
    state.form = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      address: String(data.get("address") || "")
    };
    var email = state.form.email.trim();
    var name = state.form.name.trim();
    state.formError = !name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    state.formSent = !state.formError;
    render();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    if (event.target.closest("input, textarea")) return;
    var forward = state.lang === "he" ? event.key === "ArrowLeft" : event.key === "ArrowRight";
    if (page === "gallery") {
      var photos = content.counts.gallery;
      state.gallery = (state.gallery + (forward ? 1 : photos - 1)) % photos;
      render();
    }
  });

  render();
})();
