// Change 'v1' to 'v2' to force the browser to update
const CACHE_NAME = 'ranjith-card-v2'; 
const assets = ['./', './index.html', './profile.jpg', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assets))
  );
});