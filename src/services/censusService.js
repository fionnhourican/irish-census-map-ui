import { apiService } from './api';

export const censusService = {
  async getGeoData() {
    return apiService.get('/census-geo');
  },

  async searchPeople(filters) {
    return apiService.post('/census-search', filters);
  },

  async getTownlandDetails(townlandId) {
    return apiService.get(`/townland/${townlandId}`);
  }
};