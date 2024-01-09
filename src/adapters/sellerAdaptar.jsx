export const sellerCreateAdapterRequest = (resquest) => {
    return {
        firstName: resquest.name,
        lastName: resquest.lastName,
        displayName: resquest.displayName,
        gener: resquest.gender,
        city: resquest.city,
        aboutMe: resquest.aboutMe,
        phone: resquest.phone,
        avatar: resquest.avatar,
    };
};
