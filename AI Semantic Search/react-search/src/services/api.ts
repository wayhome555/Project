import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // 后端服务器地址

// 创建axios实例
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 拦截器处理
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

export const api = {
  async search(query: string) {
    try {
      const response = await apiClient.get('/search', {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      console.error('Search error:', error);
      throw error;
    }
  },
  
  async getRecentSearches() {
    try {
      const response = await apiClient.get('/recent-searches');
      return response.data;
    } catch (error) {
      console.error('Failed to get recent searches:', error);
      return [];
    }
  },
  
  async getSuggestions(query: string) {
    try {
      const response = await apiClient.get('/suggestions', {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to get suggestions:', error);
      return [];
    }
  }
};