// Others
import axios from 'axios';
export const Config = {
  BASE_URL: 'https://my-json-server.typicode.com/benirvingplt',
};
const instance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 30000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) navigationRef.navigate('SignIn');
    return Promise.reject(error.response || error);
  },
);

/* export const setClientToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}; */

export default instance;
