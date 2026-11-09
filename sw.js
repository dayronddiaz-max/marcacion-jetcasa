// Service worker mínimo: permite instalar la app. Siempre va a la red (las marcas necesitan conexión).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
