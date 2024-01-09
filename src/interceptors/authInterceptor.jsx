import { axiosPublic } from './newRequest';
import { authLoginAdapterRequest } from '../adapters/authAdapter';

export const loginUserInterceptor = async (values) => {
    const formattedData = authLoginAdapterRequest(values);
    const { data } = await axiosPublic.post('/auth/login', formattedData);
    return data;
};

export const registerUser = async () => {
    return null;
};

export const logoutUser = async () => {
    return null;
};
