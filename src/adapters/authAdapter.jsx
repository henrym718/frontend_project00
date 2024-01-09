export const authLoginAdapterRequest = (resquest) => {
    return {
        email: resquest.email,
        password: resquest.password,
    };
};

export const authLoginAdapterResponse = (response) => {
    return {
        accessToken: response.accessToken,
    };
};
