import axios from 'axios'
import refreshToken from './refreshToken'

const BASE_URL = 'http://localhost:8000/api'

export const axiosPublic = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

/** es similar al axiosPrivate.interceptors.request.use */
//axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${auth.accessToken}`;
// axiosPrivate.defaults.baseURL='http://localhost.COM
/** */

// axiosPrivate.interceptors.request.use(
//     (config) => {
//         const { auth } = useAuthContext();
//         const header = config.headers['Authorization'];
//         if (!header) config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

axiosPrivate.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 401 && !prevRequest.sent) {
            prevRequest.sent = true
            const newAccessToken = await refreshToken()
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken} `
            return axiosPrivate(prevRequest)
        }
        return Promise.reject(error)
    }
)
