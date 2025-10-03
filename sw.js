const CACHE_NAME = 'reception-v1';
const urlsToCache = [
  '/',
  '/css/index2.css',
  '/img/QR_code.png',
  '/img/dSF3zNo.gif',
  '/favicon.ico',
  '/css/styles.css',
  '/img/error-image.png',
  '/favicon.ico'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
