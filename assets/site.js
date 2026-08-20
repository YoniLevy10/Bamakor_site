document.addEventListener('DOMContentLoaded', function () {
  var cfg = window.BAMAKOR_CONFIG || {};
  var gaId = (cfg.gaMeasurementId || '').trim();
  if (gaId) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
    document.head.appendChild(s);
  }

  var header = document.querySelector('header');
  var nav = header && header.querySelector('.nav');
  var mobile = header && header.querySelector('.mobile-links');
  if (nav && mobile) {
    var toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.type = 'button';
    toggle.setAttribute(
      'aria-label',
      (window.BamakorI18n && window.BamakorI18n.t('nav.menuOpen')) || 'פתיחת תפריט'
    );
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(toggle);

    function setMenuState(open) {
      header.classList.toggle('menu-open', open);
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      var labelKey = open ? 'nav.menuClose' : 'nav.menuOpen';
      toggle.setAttribute(
        'aria-label',
        (window.BamakorI18n && window.BamakorI18n.t(labelKey)) ||
          (open ? 'סגירת תפריט' : 'פתיחת תפריט')
      );
    }

    toggle.addEventListener('click', function () {
      setMenuState(!header.classList.contains('menu-open'));
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setMenuState(false);
      });
    });
    document.addEventListener('click', function (e) {
      if (header.classList.contains('menu-open') && !header.contains(e.target)) {
        setMenuState(false);
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('menu-open')) {
        setMenuState(false);
        toggle.focus();
      }
    });
  }

  function waLine(key, fallback) {
    return (window.BamakorI18n && window.BamakorI18n.t(key)) || fallback;
  }

  document.querySelectorAll('[data-whatsapp-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var fd = new FormData(form);
      var lines = [waLine('wa.intro', 'שלום, אני פונה דרך אתר במקור.')];
      [
        ['service', waLine('wa.service', 'שירות')],
        ['name', waLine('wa.name', 'שם')],
        ['phone', waLine('wa.phone', 'טלפון')],
        ['email', waLine('wa.email', 'אימייל')],
        ['address', waLine('wa.address', 'כתובת / אזור')],
        ['message', waLine('wa.message', 'פרטים נוספים')]
      ].forEach(function (pair) {
        var v = (fd.get(pair[0]) || '').toString().trim();
        if (v) lines.push(pair[1] + ': ' + v);
      });
      window.location.href =
        'https://wa.me/972526026437?text=' + encodeURIComponent(lines.join('\n'));
    });
  });
});
