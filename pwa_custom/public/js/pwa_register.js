// Registers the service worker and injects the web app manifest
(function () {
  // Inject manifest link (covers Desk + Website when this script is included)
  try {
    var link = document.createElement('link');
    link.rel = 'manifest';
    link.href = '/assets/pwa_custom/manifest.json' + (window._version_number ? ('?v=' + window._version_number) : '');
    document.head && document.head.appendChild(link);
  } catch (e) {
    console && console.warn('Manifest injection failed:', e);
  }

  // Register the service worker at the site root for maximum scope
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('/service-worker.js')
        .catch(function (err) {
          console.warn('Service worker registration failed:', err);
        });
    });
  }
})();

