import axios from 'axios';

const API_BASE_URL = 'http://192.168.10.32:8080/api/v1';

export const userApi = {
  getUsers: async () => {
    const response = await axios.get(`${API_BASE_URL}/api/users`);
    return response.data;
  }
};