const CACHE_NAME = 'kinefiches-v1-20261107';
const APP_SHELL = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/icon-apple.png',
  './assets/rowing_a.jpg','./assets/rowing_b.jpg',
  './assets/curl_a.jpg','./assets/curl_b.jpg',
  './assets/rdl_a.jpg','./assets/rdl_b.jpg',
  './assets/lunge_a.jpg','./assets/lunge_b.jpg',
  './assets/situp_a.jpg','./assets/situp_b.jpg',
  './assets/press_a.jpg','./assets/press_b.jpg'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('kinefiches-') && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request=event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if(response.ok) {const clone=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(request,clone));}
    return response;
  })));
});
