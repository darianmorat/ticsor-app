import api from "@/api/axios";
import { toast } from "react-toastify";
import { create } from "zustand";

type Letter = {
   id: string;
   letter: string;
   videoUrl: string;
};

type PracticedLetter = {
   id: string;
   userId: string;
   letterId: string;
};

type Store = {
   isLoading: boolean; // Not used
   alphabet: Letter[];
   practicedLetters: PracticedLetter[];
   getAlphabet: () => Promise<void>;
   getPracticedLetters: () => Promise<void>;
   practiceLetter: (letterId: string) => Promise<void>;
};

export const useAlphabetStore = create<Store>((set, get) => ({
   isLoading: false,
   alphabet: [],
   practicedLetters: [],

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

   getPracticedLetters: async () => {
      set({ isLoading: true });
      try {
         const res = await api.get("/alphabet/get-all-completed");

         if (res.data.success) {
            set({ practicedLetters: res.data.letters });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },

   practiceLetter: async (letterId) => {
      set({ isLoading: true });
      try {
         const body = {
            letterId: letterId,
         };

         const res = await api.post("/alphabet/set-complete", body);

         if (res.data.success) {
            const currentLetters = get().practicedLetters;
            const newLetter = res.data.newLetter;
            set({ practicedLetters: [...currentLetters, newLetter] });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },
}));
