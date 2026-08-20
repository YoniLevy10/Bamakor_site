(function () {
  var STORAGE_KEY = 'bamakor_lang';
  var SUPPORTED = { he: true, en: true, fr: true };

  function getLang() {
    var params = new URLSearchParams(window.location.search);
    var fromQuery = (params.get('lang') || '').toLowerCase();
    if (SUPPORTED[fromQuery]) return fromQuery;
    var stored = (localStorage.getItem(STORAGE_KEY) || '').toLowerCase();
    if (SUPPORTED[stored]) return stored;
    return 'he';
  }

  function t(lang, key) {
    var pack = (window.BAMAKOR_I18N && window.BAMAKOR_I18N[lang]) || {};
    if (pack[key] != null) return pack[key];
    var he = (window.BAMAKOR_I18N && window.BAMAKOR_I18N.he) || {};
    return he[key] != null ? he[key] : key;
  }

  function setDocumentLang(lang) {
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'he' ? 'rtl' : 'ltr';
    html.setAttribute('data-lang', lang);
  }

  function applyMeta(lang) {
    var page = document.body && document.body.getAttribute('data-page');
    if (!page) return;
    var titleKey = 'meta.' + page + '.title';
    var descKey = 'meta.' + page + '.desc';
    if (window.BAMAKOR_I18N && window.BAMAKOR_I18N[lang] && window.BAMAKOR_I18N[lang][titleKey]) {
      document.title = t(lang, titleKey);
    }
    var desc = document.querySelector('meta[name="description"]');
    if (desc && window.BAMAKOR_I18N[lang] && window.BAMAKOR_I18N[lang][descKey]) {
      desc.setAttribute('content', t(lang, descKey));
    }
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && window.BAMAKOR_I18N[lang] && window.BAMAKOR_I18N[lang][titleKey]) {
      ogTitle.setAttribute('content', t(lang, titleKey));
    }
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && window.BAMAKOR_I18N[lang] && window.BAMAKOR_I18N[lang][descKey]) {
      ogDesc.setAttribute('content', t(lang, descKey));
    }
  }

  function applyMarked(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(lang, key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = t(lang, key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      el.setAttribute('placeholder', t(lang, key));
    });
    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-value');
      if (!key) return;
      el.value = t(lang, key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      el.setAttribute('aria-label', t(lang, key));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (!key) return;
      el.setAttribute('alt', t(lang, key));
    });
  }

  function applyAlts(lang) {
    var rules = [
      ['img[src*="/assets/brand/logo.png"]', 'alt.logoShort'],
      ['.brand img[src*="/assets/brand/logo.png"]', 'alt.logo'],
      ['img[src*="hero-exterior"]', 'alt.hero'],
      ['img[src*="service-shared"]', 'alt.shared'],
      ['img[src*="service-apartment"]', 'alt.apartment'],
      ['img[src*="service-lobby"]', 'alt.lobby'],
      ['img[src*="service-neighborhood"]', 'alt.neighborhood'],
      ['img[src*="sara."]', 'alt.sara'],
      ['img[src*="about-control"]', 'alt.control'],
      ['.contact-card img[src*="hero-exterior"]', 'alt.contactBuilding']
    ];
    rules.forEach(function (rule) {
      document.querySelectorAll(rule[0]).forEach(function (el) {
        if (el.hasAttribute('data-i18n-alt')) return;
        el.setAttribute('alt', t(lang, rule[1]));
      });
    });
  }

  function applyChrome(lang) {
    document.querySelectorAll('.menu a[href="/about/"], .mobile-links a[href="/about/"], footer a[href="/about/"]').forEach(function (el) {
      el.textContent = t(lang, 'nav.about');
    });
    document.querySelectorAll('.menu a[href="/services/"], .mobile-links a[href="/services/"], footer a[href="/services/"]').forEach(function (el) {
      el.textContent = t(lang, 'nav.services');
    });
    document.querySelectorAll('.menu a[href="/projects/"], .mobile-links a[href="/projects/"], footer a[href="/projects/"]').forEach(function (el) {
      el.textContent = t(lang, 'nav.projects');
    });
    document.querySelectorAll('.menu a[href="/contact/"], .mobile-links a[href="/contact/"], footer a[href="/contact/"]').forEach(function (el) {
      el.textContent = t(lang, 'nav.contact');
    });
    document.querySelectorAll('.actions a.btn.primary[href="/quote-building/"]').forEach(function (el) {
      el.textContent = t(lang, 'nav.quote');
    });
    document.querySelectorAll('.mobile-links a[href="/quote-building/"]').forEach(function (el) {
      el.textContent = t(lang, 'nav.quoteFull');
    });
    document.querySelectorAll('.mobile-links a[href^="tel:"]').forEach(function (el) {
      if (el.classList.contains('btn')) return;
      el.textContent = t(lang, 'nav.call');
    });
    document.querySelectorAll('a.skip').forEach(function (el) {
      el.textContent = t(lang, 'skip');
    });
    document.querySelectorAll('.topbar .container > span:first-child').forEach(function (el) {
      el.textContent = t(lang, 'topbar.tagline');
    });
    document.querySelectorAll('footer .footer-grid h4').forEach(function (el, idx) {
      if (idx === 0) {
        el.textContent = t(lang, 'footer.nav');
        return;
      }
      var box = el.parentElement;
      if (box && box.querySelector('a[href="/accessibility/"], a[href="/privacy/"]')) {
        el.textContent = t(lang, 'footer.info');
      } else {
        el.textContent = t(lang, 'footer.contact');
      }
    });
    document.querySelectorAll('footer a[href="/accessibility/"]').forEach(function (el) {
      el.textContent = t(lang, 'footer.accessibility');
    });
    document.querySelectorAll('footer a[href="/privacy/"]').forEach(function (el) {
      el.textContent = t(lang, 'footer.privacy');
    });
    document.querySelectorAll('.footer-bottom').forEach(function (el) {
      el.textContent = t(lang, 'footer.rights');
    });
    document.querySelectorAll('nav.menu').forEach(function (el) {
      el.setAttribute('aria-label', t(lang, 'nav.main'));
    });
    document.querySelectorAll('nav.mobile-links').forEach(function (el) {
      el.setAttribute('aria-label', t(lang, 'nav.mobile'));
    });
    document.querySelectorAll('.menu-toggle').forEach(function (el) {
      var open = document.querySelector('header') && document.querySelector('header').classList.contains('menu-open');
      el.setAttribute('aria-label', t(lang, open ? 'nav.menuClose' : 'nav.menuOpen'));
    });
  }

  function buildLangSwitcher(lang, extraClass) {
    var nav = document.createElement('nav');
    nav.className = 'lang-switch' + (extraClass ? ' ' + extraClass : '');
    nav.setAttribute('aria-label', t(lang, 'lang.label'));
    [
      ['he', 'עברית'],
      ['en', 'English'],
      ['fr', 'Français']
    ].forEach(function (pair) {
      var a = document.createElement('a');
      var href = new URL(window.location.href);
      href.searchParams.set('lang', pair[0]);
      a.href = href.pathname + href.search + href.hash;
      a.setAttribute('data-set-lang', pair[0]);
      a.setAttribute('hreflang', pair[0]);
      a.textContent = pair[1];
      if (pair[0] === lang) {
        a.classList.add('is-active');
        a.setAttribute('aria-current', 'true');
      }
      a.addEventListener('click', function (e) {
        e.preventDefault();
        setLang(pair[0]);
      });
      nav.appendChild(a);
    });
    return nav;
  }

  function ensureLangSwitcher(lang) {
    document.querySelectorAll('.lang-switch').forEach(function (el) {
      el.remove();
    });
    var actions = document.querySelector('.actions');
    if (actions) actions.insertBefore(buildLangSwitcher(lang), actions.firstChild);
    var mobile = document.querySelector('.mobile-links');
    if (mobile) mobile.appendChild(buildLangSwitcher(lang, 'lang-switch-mobile'));
  }

  function applyPageMap(lang) {
    var page = document.body && document.body.getAttribute('data-page');
    if (!page) return;
    var maps = {
      home: [
        ['.hero-copy .eyebrow', 'home.eyebrow'],
        ['.hero-copy h1', 'home.h1', 'html'],
        ['.hero-copy > p', 'home.lead'],
        ['.hero-actions .btn.primary', 'home.cta.quote'],
        ['.hero-actions .btn.outline', 'home.cta.services'],
        ['.hero-badge strong', 'home.badge.title'],
        ['.hero-badge span', 'home.badge.text'],
        ['.hero-stats .stat-card:nth-child(1) span', 'home.stat1'],
        ['.hero-stats .stat-card:nth-child(2) span', 'home.stat2'],
        ['.hero-stats .stat-card:nth-child(3) span', 'home.stat3'],
        ['#services-home .section-head .eyebrow', 'home.services.eyebrow'],
        ['#services-home .section-head h2', 'home.services.h2'],
        ['#services-home .section-head .lead', 'home.services.lead'],
        ['#building .service-tags span:nth-child(1)', 'home.building.tag1'],
        ['#building .service-tags span:nth-child(2)', 'home.building.tag2'],
        ['#building .eyebrow', 'home.building.eyebrow'],
        ['#building h3', 'home.building.h3'],
        ['#building p', 'home.building.p'],
        ['#building .service-feature-list li:nth-child(1)', 'home.building.li1'],
        ['#building .service-feature-list li:nth-child(2)', 'home.building.li2'],
        ['#building .service-feature-list li:nth-child(3)', 'home.building.li3'],
        ['#building .btn', 'home.svc.full'],
        ['#apartments .service-tags span:nth-child(1)', 'home.apt.tag1'],
        ['#apartments .service-tags span:nth-child(2)', 'home.apt.tag2'],
        ['#apartments .eyebrow', 'home.apt.eyebrow'],
        ['#apartments h3', 'home.apt.h3'],
        ['#apartments p', 'home.apt.p'],
        ['#apartments .service-feature-list li:nth-child(1)', 'home.apt.li1'],
        ['#apartments .service-feature-list li:nth-child(2)', 'home.apt.li2'],
        ['#apartments .service-feature-list li:nth-child(3)', 'home.apt.li3'],
        ['#apartments .btn', 'home.svc.full'],
        ['#towers .service-tags span:nth-child(1)', 'home.towers.tag1'],
        ['#towers .service-tags span:nth-child(2)', 'home.towers.tag2'],
        ['#towers .eyebrow', 'home.towers.eyebrow'],
        ['#towers h3', 'home.towers.h3'],
        ['#towers p', 'home.towers.p'],
        ['#towers .service-feature-list li:nth-child(1)', 'home.towers.li1'],
        ['#towers .service-feature-list li:nth-child(2)', 'home.towers.li2'],
        ['#towers .service-feature-list li:nth-child(3)', 'home.towers.li3'],
        ['#towers .btn', 'home.svc.full'],
        ['#brokerage .service-tags span:nth-child(1)', 'home.brok.tag1'],
        ['#brokerage .service-tags span:nth-child(2)', 'home.brok.tag2'],
        ['#brokerage .eyebrow', 'home.brok.eyebrow'],
        ['#brokerage h3', 'home.brok.h3'],
        ['#brokerage p', 'home.brok.p'],
        ['#brokerage .service-feature-list li:nth-child(1)', 'home.brok.li1'],
        ['#brokerage .service-feature-list li:nth-child(2)', 'home.brok.li2'],
        ['#brokerage .service-feature-list li:nth-child(3)', 'home.brok.li3'],
        ['#brokerage .btn', 'home.svc.full'],
        ['#about .eyebrow', 'home.about.eyebrow'],
        ['#about h2', 'home.about.h2'],
        ['#about .lead', 'home.about.lead'],
        ['#about .grid2 > div:first-child > p:not(.lead)', 'home.about.p'],
        ['#about .btn', 'home.about.cta'],
        ['#about .card .eyebrow', 'home.approach.eyebrow'],
        ['#about .card h3', 'home.approach.h3'],
        ['#about .card > p', 'home.approach.p'],
        ['#values .eyebrow', 'home.values.eyebrow'],
        ['#values h2', 'home.values.h2'],
        ['#values .values .card:nth-child(1) h3', 'home.values.t1'],
        ['#values .values .card:nth-child(1) p', 'home.values.p1'],
        ['#values .values .card:nth-child(2) h3', 'home.values.t2'],
        ['#values .values .card:nth-child(2) p', 'home.values.p2'],
        ['#values .values .card:nth-child(3) h3', 'home.values.t3'],
        ['#values .values .card:nth-child(3) p', 'home.values.p3'],
        ['.section.dark .eyebrow', 'home.projects.eyebrow'],
        ['.section.dark h2', 'home.projects.h2'],
        ['.section.dark .section-head .btn', 'home.projects.all'],
        ['.section.dark .project-feature .eyebrow', 'home.projects.featured'],
        ['.section.dark .project-feature h3', 'home.projects.quadra'],
        ['.section.dark .project-feature p', 'home.projects.quadraAddr'],
        ['.section.dark .projects > .card:nth-child(2) small', 'common.jerusalem'],
        ['.section.dark .projects > .card:nth-child(3) small', 'common.jerusalem'],
        ['.cta h2', 'home.cta.h2'],
        ['.cta p', 'home.cta.p'],
        ['.cta .btn', 'home.cta.btn'],
        ['footer .footer-grid > div:first-child p', 'footer.blurbFull', 'html']
      ],
      about: [
        ['.subhero .eyebrow', 'about.eyebrow'],
        ['.subhero h1', 'about.h1'],
        ['.subhero .lead', 'about.lead'],
        ['.founder .eyebrow', 'about.founder.eyebrow'],
        ['.founder .role', 'about.founder.role'],
        ['.founder > div > p:nth-of-type(1)', 'about.founder.p1'],
        ['.founder > div > p:nth-of-type(2)', 'about.founder.p2'],
        ['.founder .service-feature-list li:nth-child(1)', 'about.founder.li1'],
        ['.founder .service-feature-list li:nth-child(2)', 'about.founder.li2'],
        ['.founder .service-feature-list li:nth-child(3)', 'about.founder.li3'],
        ['.about-detail article:nth-child(1) .eyebrow', 'about.work.eyebrow'],
        ['.about-detail article:nth-child(1) h3', 'about.work.h3'],
        ['.about-detail article:nth-child(1) li:nth-child(1)', 'about.work.li1'],
        ['.about-detail article:nth-child(1) li:nth-child(2)', 'about.work.li2'],
        ['.about-detail article:nth-child(1) li:nth-child(3)', 'about.work.li3'],
        ['.about-detail article:nth-child(1) li:nth-child(4)', 'about.work.li4'],
        ['.about-detail article:nth-child(2) .eyebrow', 'about.tenants.eyebrow'],
        ['.about-detail article:nth-child(2) h3', 'about.tenants.h3'],
        ['.about-detail article:nth-child(2) li:nth-child(1)', 'about.tenants.li1'],
        ['.about-detail article:nth-child(2) li:nth-child(2)', 'about.tenants.li2'],
        ['.about-detail article:nth-child(2) li:nth-child(3)', 'about.tenants.li3'],
        ['.about-detail article:nth-child(2) li:nth-child(4)', 'about.tenants.li4'],
        ['.section-head .eyebrow', 'about.values.eyebrow'],
        ['.section-head h2', 'about.values.h2'],
        ['.values .card:nth-child(1) h3', 'about.values.t1'],
        ['.values .card:nth-child(1) p', 'about.values.p1'],
        ['.values .card:nth-child(2) h3', 'about.values.t2'],
        ['.values .card:nth-child(2) p', 'about.values.p2'],
        ['.values .card:nth-child(3) h3', 'about.values.t3'],
        ['.values .card:nth-child(3) p', 'about.values.p3'],
        ['.cta h2', 'about.cta.h2'],
        ['.cta p', 'about.cta.p'],
        ['.cta .btn', 'about.cta.btn'],
        ['footer .footer-grid > div:first-child p', 'footer.blurb']
      ],
      services: [
        ['.subhero .eyebrow', 'services.eyebrow'],
        ['.subhero h1', 'services.h1'],
        ['.subhero .lead', 'services.lead'],
        ['#building .service-tags span:nth-child(1)', 'services.building.tag1'],
        ['#building .service-tags span:nth-child(2)', 'services.building.tag2'],
        ['#building .eyebrow', 'services.building.eyebrow'],
        ['#building h3', 'services.building.h3'],
        ['#building p', 'services.building.p'],
        ['#building .service-list li:nth-child(1)', 'services.building.li1'],
        ['#building .service-list li:nth-child(2)', 'services.building.li2'],
        ['#building .service-list li:nth-child(3)', 'services.building.li3'],
        ['#building .service-list li:nth-child(4)', 'services.building.li4'],
        ['#building .service-list li:nth-child(5)', 'services.building.li5'],
        ['#building .service-list li:nth-child(6)', 'services.building.li6'],
        ['#building .btn', 'services.building.cta'],
        ['#apartments .service-tags span:nth-child(1)', 'services.apt.tag1'],
        ['#apartments .service-tags span:nth-child(2)', 'services.apt.tag2'],
        ['#apartments .eyebrow', 'services.apt.eyebrow'],
        ['#apartments h3', 'services.apt.h3'],
        ['#apartments p', 'services.apt.p'],
        ['#apartments .service-list li:nth-child(1)', 'services.apt.li1'],
        ['#apartments .service-list li:nth-child(2)', 'services.apt.li2'],
        ['#apartments .service-list li:nth-child(3)', 'services.apt.li3'],
        ['#apartments .service-list li:nth-child(4)', 'services.apt.li4'],
        ['#apartments .service-list li:nth-child(5)', 'services.apt.li5'],
        ['#apartments .service-list li:nth-child(6)', 'services.apt.li6'],
        ['#apartments .btn', 'services.apt.cta'],
        ['#towers .service-tags span:nth-child(1)', 'services.towers.tag1'],
        ['#towers .service-tags span:nth-child(2)', 'services.towers.tag2'],
        ['#towers .eyebrow', 'services.towers.eyebrow'],
        ['#towers h3', 'services.towers.h3'],
        ['#towers p', 'services.towers.p'],
        ['#towers .service-list li:nth-child(1)', 'services.towers.li1'],
        ['#towers .service-list li:nth-child(2)', 'services.towers.li2'],
        ['#towers .service-list li:nth-child(3)', 'services.towers.li3'],
        ['#towers .service-list li:nth-child(4)', 'services.towers.li4'],
        ['#towers .service-list li:nth-child(5)', 'services.towers.li5'],
        ['#towers .btn', 'services.towers.cta'],
        ['#brokerage .service-tags span:nth-child(1)', 'services.brok.tag1'],
        ['#brokerage .service-tags span:nth-child(2)', 'services.brok.tag2'],
        ['#brokerage .eyebrow', 'services.brok.eyebrow'],
        ['#brokerage h3', 'services.brok.h3'],
        ['#brokerage p', 'services.brok.p'],
        ['#brokerage .service-list li:nth-child(1)', 'services.brok.li1'],
        ['#brokerage .service-list li:nth-child(2)', 'services.brok.li2'],
        ['#brokerage .service-list li:nth-child(3)', 'services.brok.li3'],
        ['#brokerage .service-list li:nth-child(4)', 'services.brok.li4'],
        ['#brokerage .service-list li:nth-child(5)', 'services.brok.li5'],
        ['#brokerage .btn', 'services.brok.cta'],
        ['.cta h2', 'services.cta.h2'],
        ['.cta p', 'services.cta.p'],
        ['.cta .btn', 'services.cta.btn'],
        ['footer .footer-grid > div:first-child p', 'footer.blurb']
      ],
      projects: [
        ['.subhero .eyebrow', 'projects.eyebrow'],
        ['.subhero h1', 'projects.h1'],
        ['.subhero .lead', 'projects.lead'],
        ['.project-feature .eyebrow', 'projects.featured'],
        ['.project-feature h3', 'projects.quadra'],
        ['.project-feature p', 'projects.quadraAddr'],
        ['.project-thumb--empty span', 'common.photoSoon'],
        ['.projects .card small', 'common.jerusalem'],
        ['.cta h2', 'projects.cta.h2'],
        ['.cta p', 'projects.cta.p'],
        ['.cta .btn', 'projects.cta.btn'],
        ['footer .footer-grid > div:first-child p', 'footer.blurb']
      ],
      contact: [
        ['.subhero .eyebrow', 'contact.eyebrow'],
        ['.subhero h1', 'contact.h1'],
        ['.subhero .lead', 'contact.lead'],
        ['.contact-card h2', 'contact.card.h2'],
        ['.contact-card > p:nth-of-type(1)', 'contact.card.p'],
        ['.contact-card > p:nth-of-type(2) strong', 'common.phone'],
        ['.contact-card > p:nth-of-type(3) a', 'common.waSend'],
        ['.contact-card > p:nth-of-type(4)', 'common.langsService'],
        ['label[for="name"]', 'contact.form.name'],
        ['label[for="phone"]', 'contact.form.phone'],
        ['label[for="email"]', 'contact.form.email'],
        ['label[for="message"]', 'contact.form.message'],
        ['button[type="submit"]', 'contact.form.submit'],
        ['.note', 'contact.form.note'],
        ['input[name="service"]', 'contact.form.service', 'value'],
        ['footer .footer-grid > div:first-child p', 'footer.blurb']
      ],
      quoteBuilding: [
        ['.subhero .eyebrow', 'quote.eyebrow'],
        ['.subhero h1', 'quote.building.h1'],
        ['.subhero .lead', 'quote.building.lead'],
        ['.contact-card h2', 'quote.building.card.h2'],
        ['.contact-card > p:nth-of-type(1)', 'quote.building.card.p'],
        ['.contact-card a[href="/quote-apartment/"]', 'quote.building.switch'],
        ['label[for="name"]', 'quote.form.name'],
        ['label[for="phone"]', 'quote.form.phone'],
        ['label[for="email"]', 'quote.form.email'],
        ['label[for="address"]', 'quote.building.address'],
        ['label[for="message"]', 'quote.building.message'],
        ['#message', 'quote.building.placeholder', 'placeholder'],
        ['button[type="submit"]', 'quote.form.submit'],
        ['.note', 'quote.form.note'],
        ['input[name="service"]', 'quote.building.service', 'value'],
        ['footer .footer-grid > div:first-child p', 'footer.blurb']
      ],
      quoteApartment: [
        ['.subhero .eyebrow', 'quote.eyebrow'],
        ['.subhero h1', 'quote.apartment.h1'],
        ['.subhero .lead', 'quote.apartment.lead'],
        ['.contact-card h2', 'quote.apartment.card.h2'],
        ['.contact-card > p:nth-of-type(1)', 'quote.apartment.card.p'],
        ['.contact-card a[href="/quote-building/"]', 'quote.apartment.switch'],
        ['label[for="name"]', 'quote.form.name'],
        ['label[for="phone"]', 'quote.form.phone'],
        ['label[for="email"]', 'quote.form.email'],
        ['label[for="address"]', 'quote.apartment.address'],
        ['label[for="message"]', 'quote.apartment.message'],
        ['#message', 'quote.apartment.placeholder', 'placeholder'],
        ['button[type="submit"]', 'quote.form.submit'],
        ['.note', 'quote.form.note'],
        ['input[name="service"]', 'quote.apartment.service', 'value'],
        ['footer .footer-grid > div:first-child p', 'footer.blurb']
      ],
      accessibility: [
        ['.subhero .eyebrow', 'a11y.eyebrow'],
        ['.subhero h1', 'a11y.h1'],
        ['.subhero .lead', 'a11y.lead'],
        ['.legal h2:nth-of-type(1)', 'a11y.h2.adapt'],
        ['.legal ul li:nth-child(1)', 'a11y.li1'],
        ['.legal ul li:nth-child(2)', 'a11y.li2'],
        ['.legal ul li:nth-child(3)', 'a11y.li3'],
        ['.legal ul li:nth-child(4)', 'a11y.li4'],
        ['.legal ul li:nth-child(5)', 'a11y.li5'],
        ['.legal ul li:nth-child(6)', 'a11y.li6'],
        ['.legal ul li:nth-child(7)', 'a11y.li7'],
        ['.legal h2:nth-of-type(2)', 'a11y.h2.current'],
        ['.legal > p:nth-of-type(1)', 'a11y.current.p'],
        ['.legal h2:nth-of-type(3)', 'a11y.h2.contact'],
        ['.legal > p:nth-of-type(2)', 'a11y.contact.p'],
        ['.legal > p:nth-of-type(4)', 'a11y.closing'],
        ['footer .footer-grid > div:first-child p', 'footer.blurb']
      ],
      privacy: [
        ['.subhero .eyebrow', 'privacy.eyebrow'],
        ['.subhero h1', 'privacy.h1'],
        ['.subhero .lead', 'privacy.lead'],
        ['.legal h2:nth-of-type(1)', 'privacy.h2.what'],
        ['.legal > p:nth-of-type(1)', 'privacy.what.p'],
        ['.legal h2:nth-of-type(2)', 'privacy.h2.how'],
        ['.legal > p:nth-of-type(2)', 'privacy.how.p'],
        ['.legal h2:nth-of-type(3)', 'privacy.h2.purpose'],
        ['.legal > p:nth-of-type(3)', 'privacy.purpose.p'],
        ['.legal h2:nth-of-type(4)', 'privacy.h2.external'],
        ['.legal > p:nth-of-type(4)', 'privacy.external.p'],
        ['.legal h2:nth-of-type(5)', 'privacy.h2.contact'],
        ['footer .footer-grid > div:first-child p', 'footer.blurb']
      ],
      notFound: [
        ['.subhero .eyebrow', 'notFound.eyebrow'],
        ['.subhero h1', 'notFound.h1'],
        ['.subhero .lead', 'notFound.lead'],
        ['.subhero .btn.primary', 'notFound.home'],
        ['.subhero .btn.outline', 'notFound.contact'],
        ['.actions .btn.primary', 'notFound.back']
      ]
    };

    (maps[page] || []).forEach(function (item) {
      var nodes = document.querySelectorAll(item[0]);
      nodes.forEach(function (el) {
        var val = t(lang, item[1]);
        if (item[2] === 'html') el.innerHTML = val;
        else if (item[2] === 'value') el.value = val;
        else if (item[2] === 'placeholder') el.setAttribute('placeholder', val);
        else el.textContent = val;
      });
    });

    if (page === 'accessibility') {
      var phoneStrong = document.querySelector('.legal > p:nth-of-type(3) strong:first-child');
      if (phoneStrong) phoneStrong.textContent = t(lang, 'a11y.phoneLabel');
      var waStrong = document.querySelector('.legal > p:nth-of-type(3) strong:nth-of-type(2)');
      if (waStrong) waStrong.textContent = t(lang, 'a11y.waLabel');
      var waLink = document.querySelector('.legal > p:nth-of-type(3) a[href*="wa.me"]');
      if (waLink) waLink.textContent = t(lang, 'common.waSend');
    }

    if (page === 'privacy') {
      var privacyContact = document.querySelector('.legal > p:nth-of-type(5)');
      if (privacyContact) {
        privacyContact.innerHTML =
          t(lang, 'privacy.contact.p') +
          ' <a href="tel:+972526026437">052-6026437</a> · <a href="https://wa.me/972526026437">WhatsApp</a>.';
      }
    }
  }

  function apply(lang) {
    setDocumentLang(lang);
    applyMeta(lang);
    applyMarked(lang);
    applyChrome(lang);
    applyPageMap(lang);
    applyAlts(lang);
    ensureLangSwitcher(lang);
    document.dispatchEvent(new CustomEvent('bamakor:langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (!SUPPORTED[lang]) lang = 'he';
    localStorage.setItem(STORAGE_KEY, lang);
    var url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
    apply(lang);
  }

  window.BamakorI18n = {
    getLang: getLang,
    setLang: setLang,
    t: function (key) {
      return t(getLang(), key);
    },
    apply: apply
  };

  document.addEventListener('DOMContentLoaded', function () {
    apply(getLang());
  });
})();
