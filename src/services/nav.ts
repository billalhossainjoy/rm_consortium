import {create} from "zustand";

interface Nav {
    isOpen: boolean;
    toggle: (state?: boolean) => void;
}

export const useNavStore = create<Nav>(set => ({
    isOpen: false,
    toggle: (value) => set(state => ({isOpen: value || !state.isOpen})),
}))