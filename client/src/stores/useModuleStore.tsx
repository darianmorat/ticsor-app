import api from "@/api/axios";
import { toast } from "react-toastify";
import { create } from "zustand";

type Store = {
   isLoading: boolean;
   modules: Module[];
   getModules: () => Promise<void>;
};

type Module = {
   id: string;
   order: number;
   title: string;
   lessons: Lesson[];
};

type Lesson = {
   id: string;
   order: string;
   title: string;
   type: string;
};

export const useModuleStore = create<Store>((set) => ({
   isLoading: false,
   modules: [],

   getModules: async () => {
      set({ isLoading: true });
      try {
         const res = await api.get("/module/get-all");

         if (res.data.success) {
            set({ modules: res.data.modules });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },
}));
