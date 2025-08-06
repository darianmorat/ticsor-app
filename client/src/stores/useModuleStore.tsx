import api from "@/api/axios";
import { toast } from "react-toastify";
import { create } from "zustand";

type Lesson = {
   id: string;
   order: number;
   title: string;
   type: string;
};

type CompletedLesson = {
   id: string;
   userId: string;
   lessonId: string;
};

type Module = {
   id: string;
   order: number;
   title: string;
   lessons: Lesson[];
};

type Store = {
   isLoading: boolean; // Not used for now
   modules: Module[];
   completedLessons: CompletedLesson[];
   getModules: () => Promise<void>;
   getCompletedLessons: () => Promise<void>;
   addCompletedLesson: (letterId: string) => Promise<void>;
};

export const useModuleStore = create<Store>((set, get) => ({
   isLoading: false,
   modules: [],
   completedLessons: [],

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

   getCompletedLessons: async () => {
      set({ isLoading: true });
      try {
         const res = await api.get("/lesson/get-all-completed");

         if (res.data.success) {
            set({ completedLessons: res.data.lessons });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },

   addCompletedLesson: async (lessonId) => {
      set({ isLoading: true });
      try {
         const body = {
            lessonId: lessonId,
         };

         const res = await api.post("/lesson/add-completed", body);

         if (res.data.success) {
            const currentLessons = get().completedLessons;
            const newLesson = res.data.lesson;
            set({ completedLessons: [...currentLessons, newLesson] });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },
}));
