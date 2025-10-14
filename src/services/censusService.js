import { apiService } from './api';
import { dataCache } from './dataCache';

export const censusService = {
  async getGeoData() {
    const cacheKey = 'geoData';
    if (dataCache.has(cacheKey)) {
      return dataCache.get(cacheKey);
    }
    const data = await apiService.get('/census-geo');
    dataCache.set(cacheKey, data);
    return data;
  },

  async searchPeople(filters) {
    return apiService.post('/census-search', filters);
  },

  async getTownlandDetails(townlandId) {
    return apiService.get(`/townland/${townlandId}`);
  }
};