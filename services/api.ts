import axios from 'axios';

const API_BASE_URL = 'http://192.168.10.32:8080';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
});

export const userApi = {
  getUsers: async () => {
    try {
      const response = await axiosInstance.get('/api/v1/api/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
};