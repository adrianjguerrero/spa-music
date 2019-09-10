import axios from 'axios';
import configService from './config';

const apiService = axios.create({
  baseURL: configService.apiUrl
});

export default apiService;
