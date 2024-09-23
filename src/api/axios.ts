import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    withCredentials: true,
});

// Interceptor para realizar un seguimiento de las solicitudes salientes
instance.interceptors.request.use(config => {
    // Imprime las cookies antes de enviar la solicitud
    // console.log('Cookies interceptadas y enviadas:', document.cookie);
    return config;
}, error => {
    return Promise.reject(error);
});

export default instance;