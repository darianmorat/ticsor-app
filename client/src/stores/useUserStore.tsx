import { create } from "zustand";
import { toast } from "react-toastify";
import api from "@/api/axios";

type User = {
   id: string;
   name: string;
   username: string;
   email: string;
   role: "admin" | "user";
   createdAt: string;
};

type Store = {
   isLoading: boolean;
   notFound: boolean;
   userProfile: User | null;
   users: User[];
   getUsers: () => Promise<void>;
   getUser: (username: string) => Promise<void>;
   createUser: (
      name: string,
      username: string,
      email: string,
      password: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   ) => Promise<any>;
   editUser: (
      id: string,
      name: string,
      username: string,
      email: string,
      password: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   ) => Promise<any>;
   deleteUser: (id: string) => Promise<void>;
};

export const useUserStore = create<Store>((set, get) => ({
   isLoading: false,
   notFound: false,
   userProfile: null,
   users: [],

   getUser: async (username) => {
      set({ isLoading: true, notFound: false });
      try {
         const res = await api.get(`/user/get/${username}`);

         if (res.data.success) {
            set({ userProfile: res.data.user });
         }
      } catch (_error) {
         set({ notFound: true });
      } finally {
         set({ isLoading: false });
      }
   },

   getUsers: async () => {
      set({ isLoading: true });
      try {
         const res = await api.get("/user/get-all");
         if (res.data.success) {
            set({ users: res.data.users });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },

   createUser: async (name, username, email, password) => {
      set({ isLoading: true });
      try {
         const body = {
            name: name,
            username: username,
            email: email,
            password: password,
         };

         const res = await api.post("/user/create", body);

         if (res.data.success) {
            toast.success(res.data.message);
            const currentUsers = get().users;
            const newUser = res.data.newUser;
            set({ users: [...currentUsers, newUser] });

            return res;
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },

   editUser: async (id, name, username, email, password) => {
      set({ isLoading: true });
      try {
         const body = {
            name: name,
            username: username,
            email: email,
            password: password,
         };

         const res = await api.post(`/user/edit/${id}`, body);

         if (res.data.success) {
            toast.success(res.data.message);
            const currentUsers = get().users;
            const updatedUser = res.data.user;
            set({
               users: currentUsers.map((user) => (user.id === id ? updatedUser : user)),
            });

            return res;
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },

   deleteUser: async (id) => {
      set({ isLoading: true });
      try {
         const res = await api.delete(`/user/delete/${id}`);

         if (res.data.success) {
            toast.success(res.data.message);
            const currentUsers = get().users;
            const updatedUsers = currentUsers.filter((user) => user.id !== id);
            set({ users: updatedUsers });
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         set({ isLoading: false });
      }
   },
}));
