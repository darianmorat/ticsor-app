import api from "@/api/axios";
import { toast } from "react-toastify";
import { create } from "zustand";

type Store = {
   isLoading: boolean;
   alphabet: Letter[];
   getAlphabet: () => Promise<void>;
};

type Letter = {
   id: string;
   letter: string;
   videoUrl: string;
};

export const useAlphabetStore = create<Store>((set) => ({
   isLoading: false,
   alphabet: [],

   getAlphabet: async () => {
      set({ isLoading: true });
      try {
         const res = await api.get("/alphabet/get-all");

         if (res.data.success) {
            set({ alphabet: res.data.letters });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },
}));
