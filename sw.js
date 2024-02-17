const cacheName = 'site-static-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/add-icon.png',
    '/remove-icon.png',
    '/reset-icon.png',
    '/tally-1.png',
    '/tally-2.png',
    '/tally-3.png',
    '/tally-4.png',
    '/tally-5.png',
    // Voeg hier andere assets en icoon paden toe
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});
