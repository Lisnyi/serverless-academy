import NodeCache from "node-cache";

const myCache = new NodeCache();

function addToCache(key, obj) {
  return myCache.set(key, obj, 10000);
}

function getFromCache(key) {
  return myCache.get(key);
}

export { addToCache, getFromCache };
