// interactivity for the standalone copy: burger menu + YouTube click-to-play
(function () {
  var burger = document.querySelector('.frbg-burger');
  var drawer = document.querySelector('.G4Yk_');
  var header = document.querySelector('header');
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      if (!drawer.classList.contains('frbg-open')) {
        document.documentElement.style.setProperty('--frbg-header-h',
          header.getBoundingClientRect().bottom + 'px');
      }
      drawer.classList.toggle('frbg-open');
    });
  }
  // YouTube consent blocks: load the embed only after the visitor clicks
  document.querySelectorAll('.E9CS3').forEach(function (overlay) {
    var wrap = overlay.closest('.bgQj3') || overlay.parentElement;
    var thumb = wrap.querySelector('.Q9YTu');
    var m = thumb && /yt_([\w-]+)\.jpg/.exec(thumb.style.backgroundImage || '');
    if (!m) return;
    var btn = overlay.querySelector('a') || overlay;
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var f = document.createElement('iframe');
      f.className = 'frbg-video-frame';
      f.src = 'https://www.youtube-nocookie.com/embed/' + m[1] + '?autoplay=1';
      f.allow = 'autoplay; fullscreen; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      wrap.innerHTML = '';
      wrap.appendChild(f);
    });
  });
})();
