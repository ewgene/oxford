import axios from 'axios';
const http = axios.create({
  baseURL: 'https://m.oxford-russia.ru/api/v1/'
});
export default http