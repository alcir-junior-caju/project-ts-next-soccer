import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.api-futebol.com.br/v1/',
  headers: {
    Authorization: `Bearer ${process.env.API_SOCCER}`
  }
});

export default api;
