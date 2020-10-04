'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7c4cb07071574dcef162b7b3fc82fd9b",
".git/config": "2a0360c6ad02091d490610d3d1443d84",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "ea233ba4a891df9dbd73d85262a34f71",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6457272c790979958e81bdf5f7462e2a",
".git/logs/refs/heads/main": "4f48782f74338a621e0cf4c67bc809dd",
".git/logs/refs/remotes/origin/main": "a1f62e879b1691c3c4a80c9506984e35",
".git/objects/07/0f7113dcadfeabab9714cee6c5717a6fe729c4": "14524c1ff48fc1753915d77f737f7933",
".git/objects/09/565075adadfa4c55de618eefa479487ad3565e": "0a123acdbe499b58254ee6184cd6f07d",
".git/objects/10/ef810a3f1310fe9eefdcfa10d21996767c5bac": "668ce6dc8101ea5d3c891ba6da041471",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/1e/7a037cc6f478c718ddaf48ec5399a16cd85141": "b28fe0e76ed0e49f6b1715c28eb800ae",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2a/82220746623a8739fc1900da7a6f413c1da91d": "3ad082c75ddfb168e07d160906d47b6d",
".git/objects/2c/f0a66f6e2c3ae89a6743115c4a3fead9e30275": "803d76d091c2caf9ca3a14f0850214ff",
".git/objects/2f/34d66e2d13045f0542f6b36bea088c8c2c1ad4": "0ccbea6436b2281544af39f60d173bdc",
".git/objects/41/87e3cb436b8d101a9a9cebd3a491894b9c24f2": "62ba0ad6a43959ec2ebc23c0c5eb59ae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/099d5696d266d5b533777a56a762ce543bfab8": "ff19f94963660f25408da253c8e21a42",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/58/1d7e561c1151cdd547b0046da93239c2b09cfb": "2e7f2bd6d3daddc8fdfbf0ac5f1dcb89",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/72/91382dbca175cecd5e4b5c17a37e7abb3e853d": "5f8905c86ea544b0b687185ad654f9e9",
".git/objects/72/f5e13ac8df9a602ef43cf48ba28b7d76f28c3d": "b573fb85555a74738500b33f96d45688",
".git/objects/79/7562da248a114e2ce4794786185a5c48bbd149": "d7465c0098b8f3e67b34ae39a09d1dd2",
".git/objects/84/89dd7312b7b59a477d874e96111086a3fba951": "517a6e771a10711b25bd076862222b9c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/2dc015a88e77b0b86943e0e987a93aa02b7134": "f1a81e11ac62faeae4cbf3fbbd9e0c15",
".git/objects/a1/d65851df6c29f03b18b497031f4507aaf8e7ac": "3f73f418fe94bf297d3a0a2ac40a8bc3",
".git/objects/b0/b48c2e9fd5905c4477296da41f8cad126ed590": "865cc84e1e59f67d991a08a42943b359",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/d5770fc6125705cc2dc88025d501ab81560725": "d145cc954b9d5ad816bd59304b6714e9",
".git/objects/b5/e5aee210555f649f73c60f83982c2e8a07f4fd": "b731af219d04a9ba9b54c22fdffa30ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c7/1b159a7f868adef1cf01cee43927cd6399e3e8": "b37eee158c839f54580b90b04d7bf10f",
".git/objects/ce/6b4c17ced3a0c571dbd77e7e5da32e6acf76ae": "f66d793f6974770814d43181f151e8ae",
".git/objects/d1/a5e1eea06158ffbe2bb7a3f1d78a180ffd0f04": "a49ef7e2c55b5c3071a1e02f9b71b74e",
".git/objects/dc/0d9701e00b45d67c255ad9a3b945e9d41b5ab3": "3a095110c6cf28320957369666fbda25",
".git/objects/dc/8e7ee92b681028ba493ec5df3422974b67636a": "8d537b69d710478a5344b90479717b17",
".git/objects/df/2169bace0f5e00544e5ebdbae26c59652091d6": "a4ed7c52f7d17562ad28ee3fafd27243",
".git/objects/ec/b5974dc10caab01a8ad4e069002c5bfae731cd": "3f58f1aac560368cc3d13e7092eac6e7",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/main": "cd3bc318d1a6e492bbbbdab14603d9f3",
".git/refs/remotes/origin/main": "cd3bc318d1a6e492bbbbdab14603d9f3",
"assets/AssetManifest.json": "9ef20ba9947701c742133d51f25bf3fb",
"assets/assets/angel.png": "baed06e09e9be9cd1f241e227a00bc9f",
"assets/assets/cards.png": "dfc0b6761e5ea9c66fc682f87343ddae",
"assets/assets/demon.png": "bf6b97a01161e717e437a4cfb5d81cff",
"assets/assets/magic-the-gathering.jpg": "ef9d05f07df9acd99826a6ee0fb0d445",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "4ae439509f377404739d0b6d1fb2cbbd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "abb654c21f2c75978a487a086b625305",
"/": "abb654c21f2c75978a487a086b625305",
"main.dart.js": "f5a37c68d584c1b6bdca7f51e2120e88",
"manifest.json": "9696e2911f85d06eb520001e1b3bab6b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
