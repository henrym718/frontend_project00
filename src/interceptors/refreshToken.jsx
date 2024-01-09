import { useQuery } from 'react-query'
import { axiosPublic } from './newRequest'

const fetchRefreshToken = async () => {
    const { data } = await axiosPublic.get('/token/refresh')
    return data
}

const refreshToken = (onSuccess, onError) => {
    return useQuery('refreshToken', fetchRefreshToken, {
        onSuccess,
        onError,
        cacheTime: 0,
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })
}

export default refreshToken
