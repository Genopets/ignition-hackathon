/* eslint-disable */
const version = `V1.2.0`;
const cacheName = `genopets::${version}`;

const images = [`/imgs/c1.svg`, `/imgs/c2.svg`, `/imgs/c3.svg`, `/imgs/c4.svg`];
const fonts = [
  `/fonts/optician-sans-webfont.woff2`,
  `/fonts/corners.woff2`,
  `/fonts/mokoto_glitch_mark_2-webfont.woff2`,
  `/fonts/MoktoGlitchMarkoutline.ttf`,
  `/fonts/mokoto_glitch-webfont.woff2`,
  `/fonts/opensans-light-webfont.woff2`,
  `/fonts/Morganite-Light.woff2`,
];

const sounds = [
  `/sound/hover`,
  `/sound/press`,
  `/sound/typing`,
  `/sound/ambience`,
  `/sound/select`,
  `/sound/birth`,
  `/sound/born`,
  `/sound/q1`,
  `/sound/q2`,
  `/sound/q3`,
];

const oggSound = sounds.map((sound) => sound + '.ogg');
const mp3Sound = sounds.map((sound) => sound + '.mp3');

async function updateCacheVersion() {
  const cacheList = await caches.keys();

  return await cacheList.forEach(async (name) => {
    if (/^(genopets::)/.test(name) && cacheName !== name) {
      // delete older cache
      await caches.delete(name);
    }
  });
}

async function cacheResource() {
  const cache = await caches.open(cacheName);

  await cache.addAll([...images, ...fonts, ...oggSound, ...mp3Sound]);
}

async function FetchFiles(request) {
  let res;
  const cache = await caches.open(cacheName);

  res = await cache.match(request.url);
  if (res) return res.clone();

  const fetchOptions = {
    headers: request.headers,
    credentials: 'omit',
    cache: 'no-store',
  };

  res = fetch(request, fetchOptions);

  fetch(request, fetchOptions).then((response) => {
    cache.put(request, response);
  });

  return res;
}

async function OnFetch(event) {
  if (/(ogg|mp3|fonts|imgs)/g.test(event.request.url)) {
    event.respondWith(FetchFiles(event.request));
  }
}

function handleActivation() {
  return self.clients.claim();
}

async function OnInstall() {
  await updateCacheVersion();
  await cacheResource();
  self.skipWaiting();
}

async function OnActivate(event) {
  return event.waitUntil(handleActivation());
}

self.addEventListener('install', OnInstall);
self.addEventListener('activate', OnActivate);
self.addEventListener('fetch', OnFetch);
