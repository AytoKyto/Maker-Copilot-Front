import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/api",
  headers: {
    "Content-type": "application/json",
    "Content-language": "fr",
  },
});

// Ajoutez un intercepteur pour mettre à jour le token avant chaque requête
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// intercept error responses 401 and 403 and redirect to login page
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.clear();
        window.location.replace("/");
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
