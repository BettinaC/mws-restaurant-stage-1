var CACHE_NAME = 'restaurant-reviews-cache-v1';
var urlsToCache = [
  '/index.html',
  '/restaurant.html',    
  '/css/styles.css',
  '/data/restaurants.json',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js'
      
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request, {ignoreSearch: true});
    })
  );
});

