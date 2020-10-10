'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "90bc781b5c2411e3a07bde5d0b8e4f18",
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
".git/index": "8267c1681647041708a62e4cabc4da4b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce83d93af593b930774b4d07e0412449",
".git/logs/refs/heads/main": "2aaaaaabb9f0527e06637221c852d9e3",
".git/logs/refs/remotes/origin/main": "4615d6e8b8c337d0314472c95a183ff9",
".git/objects/03/b663141103c66f30909a5f5a08c3184eb2373c": "b6bf127933a10155c92dc184372e77e3",
".git/objects/07/0f7113dcadfeabab9714cee6c5717a6fe729c4": "14524c1ff48fc1753915d77f737f7933",
".git/objects/09/565075adadfa4c55de618eefa479487ad3565e": "0a123acdbe499b58254ee6184cd6f07d",
".git/objects/10/ef810a3f1310fe9eefdcfa10d21996767c5bac": "668ce6dc8101ea5d3c891ba6da041471",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/18/6f7be68624ffbad10adbd6ff661e40e373828d": "797590c9329d2e75b4895dff70435b72",
".git/objects/1e/7a037cc6f478c718ddaf48ec5399a16cd85141": "b28fe0e76ed0e49f6b1715c28eb800ae",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/2fa39cb008b5f4da84b4977a24542a2e18cc6c": "f54d872f35b7f1151032dc989ebd6571",
".git/objects/24/20c02907070df782b91c3a49add8cd5542d154": "4f3a0091deb22a30b455ee583d8d7dd4",
".git/objects/2a/82220746623a8739fc1900da7a6f413c1da91d": "3ad082c75ddfb168e07d160906d47b6d",
".git/objects/2c/edee76a0b48baee262f48d45cf59a6b137b6fd": "98c87b81e6e08fdf484a7a31af1163de",
".git/objects/2c/f0a66f6e2c3ae89a6743115c4a3fead9e30275": "803d76d091c2caf9ca3a14f0850214ff",
".git/objects/2f/34d66e2d13045f0542f6b36bea088c8c2c1ad4": "0ccbea6436b2281544af39f60d173bdc",
".git/objects/3f/8915ef4f49c9f2eee363d267577c1f60d9e54e": "fae02f04cc3981a46abaf816f6ddc1c1",
".git/objects/41/1592a16f2c13d887e5968b74c5991a5a246b66": "7da784592f1f63b3ef6a7bb3de05ad7c",
".git/objects/41/87e3cb436b8d101a9a9cebd3a491894b9c24f2": "62ba0ad6a43959ec2ebc23c0c5eb59ae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/d4c71d9ea96ff2babf90ab566187d62146cc4b": "cf026c24c75370c15f8a2cee85d36670",
".git/objects/50/099d5696d266d5b533777a56a762ce543bfab8": "ff19f94963660f25408da253c8e21a42",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/53/05e9a5ea768888af034ed8d4a8cf1f0f6241b4": "40bfe41c4c94d0c6626538a7fcad874b",
".git/objects/58/1d7e561c1151cdd547b0046da93239c2b09cfb": "2e7f2bd6d3daddc8fdfbf0ac5f1dcb89",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5e/a263a4bf85e649cb69d6578424be01e4ecf52e": "7ed7390bcc6859f93d583ef18223f7a5",
".git/objects/61/dc9baf512a10471f5729ae78c38bc6199ef8cf": "b3ee196e40b96f859270135a0720fe82",
".git/objects/66/07cd5064c655c1a1c5cc2787f85782c166313a": "502ebbba1148fc1e191cd489d3dd3612",
".git/objects/6e/29467e77c3ad84ed85563ef71b75923343873a": "bec776399a75a541ba9029879ba25859",
".git/objects/72/91382dbca175cecd5e4b5c17a37e7abb3e853d": "5f8905c86ea544b0b687185ad654f9e9",
".git/objects/72/f5e13ac8df9a602ef43cf48ba28b7d76f28c3d": "b573fb85555a74738500b33f96d45688",
".git/objects/79/7562da248a114e2ce4794786185a5c48bbd149": "d7465c0098b8f3e67b34ae39a09d1dd2",
".git/objects/7e/e0885cf1306fa0e232986c7b7ee04fcb57340f": "20594ce607c5159e2ae11d290c06747a",
".git/objects/84/89dd7312b7b59a477d874e96111086a3fba951": "517a6e771a10711b25bd076862222b9c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/2dc015a88e77b0b86943e0e987a93aa02b7134": "f1a81e11ac62faeae4cbf3fbbd9e0c15",
".git/objects/95/e9b1c2b130a35be269e74cc79c3eea068f0522": "cd3e7ba437825b2b97f183c14d2c1acd",
".git/objects/9d/ff57de23cef4ccbab0bfb8ebbd4e5ceb9d68bf": "eef8ae909515caf98e7e9ffa5800c8e5",
".git/objects/9f/862822492b0557fe8c8fe1f4c7bff394bd2074": "934d369bbea5d43530292a1084fc5f9d",
".git/objects/a1/3caf626a042efd2fe3ab674c43c7a9e3506b8e": "ccc2875820cf116515d0063e4a6414c5",
".git/objects/a1/d65851df6c29f03b18b497031f4507aaf8e7ac": "3f73f418fe94bf297d3a0a2ac40a8bc3",
".git/objects/a3/8e976f300f93e0da5637da0926db57d4517438": "7808d160e0acd3cb39accc4e69f528a5",
".git/objects/a7/dc1f97dbb77d7148d22e855d53d3f946443cff": "6ea007194e4f5c5897725e99df29e586",
".git/objects/ad/71a1a370d0f57ff93f9e692b2da68468600d4f": "fa950edb3392dce20d61a31c38992538",
".git/objects/b0/b48c2e9fd5905c4477296da41f8cad126ed590": "865cc84e1e59f67d991a08a42943b359",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/d5770fc6125705cc2dc88025d501ab81560725": "d145cc954b9d5ad816bd59304b6714e9",
".git/objects/b5/e5aee210555f649f73c60f83982c2e8a07f4fd": "b731af219d04a9ba9b54c22fdffa30ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c7/1b159a7f868adef1cf01cee43927cd6399e3e8": "b37eee158c839f54580b90b04d7bf10f",
".git/objects/cb/e36314293a3d5474e2bf2d040baadf7becc702": "c7224ca4171bfd8c74df62b7aafc2c7c",
".git/objects/ce/6b4c17ced3a0c571dbd77e7e5da32e6acf76ae": "f66d793f6974770814d43181f151e8ae",
".git/objects/d1/a5e1eea06158ffbe2bb7a3f1d78a180ffd0f04": "a49ef7e2c55b5c3071a1e02f9b71b74e",
".git/objects/d3/0b85b8b02305f11a7b774b7b0e9ffb549ff43b": "ad7b1e831aab266c359165d2e7208ec1",
".git/objects/db/2f1bf4ac5f12e25a30c24f882da58ab4ab724f": "404179ac1cac00391b05c2e3ef952f47",
".git/objects/dc/0d9701e00b45d67c255ad9a3b945e9d41b5ab3": "3a095110c6cf28320957369666fbda25",
".git/objects/dc/8e7ee92b681028ba493ec5df3422974b67636a": "8d537b69d710478a5344b90479717b17",
".git/objects/df/2169bace0f5e00544e5ebdbae26c59652091d6": "a4ed7c52f7d17562ad28ee3fafd27243",
".git/objects/e2/bb2c4d8a847ac7ae46c9bcf93c476676deca8a": "747f5d6326f74b59657c88443e599f58",
".git/objects/e3/a8a54b25a7f88e4860c7958be681a14912c36e": "86ca6c7be2c777b11703f0dfa971b41f",
".git/objects/ec/b5974dc10caab01a8ad4e069002c5bfae731cd": "3f58f1aac560368cc3d13e7092eac6e7",
".git/objects/ed/a0188038d4e3aa1896c21760d79901c824ff07": "94747a8a94d6fc1cbb3600d8ef06abc9",
".git/objects/ed/a9983919a96d6aed38787daa306d297ed487e9": "d94e8bc430a3aad2335c90e7eaaf45d1",
".git/objects/f8/d1188f9df37aed21a4d152c77954e3893af930": "e6eab4acbad2f52b94026a7cd6bec834",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/main": "8c97b2188d73d58e2f78191d1bea86fc",
".git/refs/remotes/origin/main": "8c97b2188d73d58e2f78191d1bea86fc",
"assets/AssetManifest.json": "4202999d67a797cd1e11adb9ac1bf0cb",
"assets/assets/angel.png": "baed06e09e9be9cd1f241e227a00bc9f",
"assets/assets/butin-des-trois-rois.jpg": "df591376953cb17e7e4a89afc0b340cb",
"assets/assets/cards.png": "dfc0b6761e5ea9c66fc682f87343ddae",
"assets/assets/close-cross.png": "4f43ef4f5046e3d258a6dfda0a294944",
"assets/assets/demon.png": "bf6b97a01161e717e437a4cfb5d81cff",
"assets/assets/magic-the-gathering.jpg": "ef9d05f07df9acd99826a6ee0fb0d445",
"assets/assets/map-marker.png": "c9c98741bd19d0518e7ed06c5c9e43ea",
"assets/assets/zoom-in.png": "0574b86a2ea2564d4b0dbb6e7844f8a9",
"assets/assets/zoom-out.png": "14d9d859aebaeb116f3d4e881e07dad5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "6074db27983e82eb674624272c7b7864",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "931aff46e94850a1ee98ec10fc5e2a7c",
"/": "931aff46e94850a1ee98ec10fc5e2a7c",
"main.dart.js": "29f03d6524f14884a31514906b13c924",
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
