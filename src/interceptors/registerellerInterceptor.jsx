import { axiosPublic } from './newRequest'

export const createNewSellerInterceptor = async ({ formData, accessToken }) => {
    const { data } = await axiosPublic.post('/seller/createsellerprofile', formData, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return data
}
