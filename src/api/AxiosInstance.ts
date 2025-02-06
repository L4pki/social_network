import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://bdt.tw1.ru",
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.data) {
            if (response.data.error) {
                console.error("Ошибка: ", response.data.error);
                return Promise.reject(response.data.error);
            }
            return response.data;
        }
    },
    (error) => {
        console.error("Ошибка ответа: ", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
