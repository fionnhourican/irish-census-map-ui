class DataCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, data) {
    this.cache.set(key, data);
  }

  get(key) {
    return this.cache.get(key);
  }

  has(key) {
    return this.cache.has(key);
  }
}

export const dataCache = new DataCache();