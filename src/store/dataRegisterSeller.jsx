import { create } from 'zustand';

export const dataRegisterSellerStore = create((set) => ({
    /** data del resgistro del nuevo seller */
    dataRegisterSeller: {
        firstName: '',
        lastName: '',
        displayName: '',
        gender: '',
        city: '',
        aboutMe: '',
        avatar: '',
    },

    addDataRegisterSeller: (data) =>
        set((state) => ({ dataRegisterSeller: { ...state.dataRegisterSeller, ...data } })),

    /** imagen cargada al registrar el new usuario */
    avatarTemporary: {
        uid: '',
        name: '',
        status: '',
        url: '',
    },
    addAvatarTemporary: (data) => set({ avatarTemporary: { ...data } }),
    removeAvatarTemporary: () => set({ avatarTemporary: {} }),
}));
