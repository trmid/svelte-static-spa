/* WARNING!!! THIS FILE WAS AUTO-GENERATED BY rollup.config.js AND WAS COPIED FROM sw-template.js. ANY CHANGES TO THIS FILE WILL BE OVERWRITTEN ON THE NEXT BUILD!!! */

const cacheName = `0.1.4`; // Change value to force update
const filesToCache = `["./","build/bundle.js","build/bundle.css","favicon.png","icofont/fonts/icofont.woff","icofont/fonts/icofont.woff2","icofont/icofont.min.css","index.html"]`; // Generated filenames as string array

self.addEventListener("install", event => {

	// Delete any non-current cache
	event.waitUntil(
		caches.keys().then(keys => 
			Promise.all(
				keys.map(key => {
					if (![cacheName].includes(key)) {
						return caches.delete(key);
					}
				})
			)
		)
	);
	
	// Kick out the old service worker
	self.skipWaiting();
	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll(JSON.parse(filesToCache));
		})
	);
});

// Get data on screen as quickly as possible, then update once the network has returned the latest data. 
self.addEventListener("fetch", event => {
	event.respondWith(
		caches.open(cacheName).then(cache => 
			cache.match(event.request).then(response => {
        const networkResponse = fetch(event.request).then(networkResponse => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				}).catch(console.warn);
				return response ?? networkResponse;
			})
		)
	);
});