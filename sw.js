const CACHE_NAME = "web-cache-v2";

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/home.html",
  "/footer.css"
];

// install
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// fetch
self.addEventListener("fetch", (e) => {
  const req = e.request;

  // =========================
  // IMAGE & LOTTIE (CACHE FIRST)
  // =========================
  if (
    req.destination === "image" ||
    req.url.endsWith(".jpg") ||
    req.url.endsWith(".png") ||
    req.url.endsWith(".json")
  ) {
    e.respondWith(
      caches.match(req).then((res) => {
        return res || fetch(req).then((fetchRes) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, fetchRes.clone());
            return fetchRes;
          });
        });
      })
    );
    return;
  }

  // =========================
  // HTML (NETWORK FIRST)
  // =========================
  if (req.destination === "document") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, res.clone());
            return res;
          });
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // =========================
  // CSS & JS (STALE WHILE REVALIDATE)
  // =========================
  e.respondWith(
    caches.match(req).then((res) => {
      const fetchPromise = fetch(req).then((networkRes) => {
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, networkRes.clone());
        });
        return networkRes;
      });

      return res || fetchPromise;
    })
  );
});