import { create } from 'zustand';

type ModalType = 'MOBILE_MENU' | 'IMAGE_VIEWER' | 'LIGHTBOX_SLIDER' | null;

export interface ModalState {
    type: ModalType;
    props: any;
    isOpen: boolean;
    openModal: (type: ModalType, props?: any) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    type: null,
    props: {},
    isOpen: false,
    openModal: (type, props = {}) => set({ type, isOpen: true, props }),
    closeModal: () => set({ type: null, isOpen: false, props: {} }),
}));