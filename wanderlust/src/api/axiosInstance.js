import axios from "axios";
const baseUrl = `${import.meta.env.VITE_SERVER_API_URL}`;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true, 
});
// Flag to prevent multiple token refresh requests
let isRefreshing = false;

const refreshToken = async () => {
  const originalRequest = error.config;
  try {
    const response = await axiosInstance.get('/auth/refresh-token');

    if (response.status === 200) {
      originalRequest._retry = true;
      return axiosInstance(originalRequest);
    }
  } catch (error) {
    console.error("Failed to refresh token:", refreshError);
    window.location.href = "/auth";
    throw error;
  }
  finally {
    isRefreshing = false;
  }
};

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here, such as adding headers or logging
    // For example, you can add authentication headers if needed
    // config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  async (response) => {
    // Handle successful responses here
    // You can modify the response data if needed
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
      }
      await refreshToken()
    } else {
      // Handle other errors
      console.error("Rest promise error", error.response.data);
    }
    return Promise.reject(error);
  }
  
);

export default axiosInstance;
