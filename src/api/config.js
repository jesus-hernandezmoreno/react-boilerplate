import axios from 'axios';
import { refreshToken } from './auth';

const { REACT_APP_API_URL } = process.env;

const API = axios.create({
  baseURL: `${REACT_APP_API_URL}/api/dispatch/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});
/* ==============Interceptors ============== */

API.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('boilerplate_auth_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Handle 401 responses in apiGX
let refreshTokenPromise = null;

function refreshTokenHandler(refreshTokenKey) {
  if (refreshTokenPromise) {
    return refreshTokenPromise;
  }
  refreshTokenPromise = refreshToken(refreshTokenKey);

  refreshTokenPromise.then(() => {
    refreshTokenPromise = null;
  });

  return refreshTokenPromise;
}

API.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refreshToken');
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.code === 'token_not_valid' &&
      refreshToken
    ) {
      return refreshTokenHandler(refreshToken)
        .then(res => {
          // Update localStorage
          localStorage.setItem('token', res.data.access);
          localStorage.setItem('refreshToken', res.data.refresh);
          // Update axios headers'
          API.defaults.headers.common.Authorization = `Bearer ${res.data.access}`;
          originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
          return axios.request(originalRequest);
        })
        .catch(error => {
          if (error.response.status === 401) {
            window.location = '/login';
          }
        });
    }

    return Promise.reject(error);
  }
);

export default API;
