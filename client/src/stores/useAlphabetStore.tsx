import api from "@/api/axios";
import { toast } from "react-toastify";
import { create } from "zustand";

type Letter = {
   id: string;
   order: number;
   letter: string;
   videoUrl: string;
   imageUrl: string;
};

type CompletedLetter = {
   id: string;
   order: number;
   userId: string;
   letterId: string;
};

type Store = {
   isLoading: boolean;
   alphabet: Letter[];
   completedAlphabet: CompletedLetter[];
   getAlphabet: () => Promise<void>;
   getCompletedAlphabet: () => Promise<void>;
   addCompletedLetter: (letterId: string) => Promise<void>;
};

export const useAlphabetStore = create<Store>((set, get) => ({
   isLoading: false,
   alphabet: [],
   completedAlphabet: [],

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

   getCompletedAlphabet: async () => {
      set({ isLoading: true });
      try {
         const res = await api.get("/alphabet/get-all-completed");

         if (res.data.success) {
            set({ completedAlphabet: res.data.letters });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },

   addCompletedLetter: async (letterId) => {
      set({ isLoading: true });
      try {
         const body = {
            letterId: letterId,
         };

         const res = await api.post("/alphabet/add-completed", body);

         if (res.data.success) {
            const currentLetters = get().completedAlphabet;
            const newLetter = res.data.letter;
            set({ completedAlphabet: [...currentLetters, newLetter] });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },
}));
