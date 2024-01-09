import { axiosPublic } from './newRequest';

export const autocompleteInterceptor = async (query) => {
    const { data } = await axiosPublic.get(`/tag/gettags?search=${query}`);
    return data;
};
