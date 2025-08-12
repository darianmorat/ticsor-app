import { Eye, PencilLine, Plus, Trash } from "lucide-react";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/stores/useUserStore";
import { CreateUser } from "./CreateUser";
import { DeleteUser } from "./DeleteUser";
import { formatDate } from "@/utils/formatDate";
import { EditUser } from "./EditUser";

type User = {
   id: string;
   name: string;
   username: string;
   email: string;
};

export const Users = () => {
   const [showModal, setShowModal] = useState({ active: false, for: "" });
   const [selectedUser, setSelectedUser] = useState<User | null>(null);
   const { users = [], getUsers } = useUserStore();

   const navigate = useNavigate();

   const handleModal = (modal: string): void => {
      setShowModal((prev) => ({ active: !prev.active, for: modal }));
   };

   useEffect(() => {
      getUsers();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-8">
               <div>
                  <p className="text-3xl font-bold">
                     {users.length.toString().padStart(2, "0")}
                  </p>
                  <h1>Total usuarios</h1>
               </div>
            </div>
            <Button onClick={() => handleModal("create")}>
               <Plus /> Crear usuario
            </Button>
         </div>
         <Separator className="my-8" />
         <div className="overflow-x-auto rounded-md border-1">
            <table className="min-w-full text-left">
               <thead className="bg-accent uppercase text-xs">
                  <tr>
                     <th className="px-6 py-3 min-w-fit">Usuarios</th>
                     <th className="px-6 py-3 min-w-fit">Creación</th>
                     <th className="px-6 py-3 min-w-sm text-right">Acciones</th>
                  </tr>
               </thead>
               <tbody className="divide-y">
                  {users.length === 0 && (
                     <tr>
                        <td colSpan={3} className="text-center py-6">
                           No hay usuarios para mostrar
                        </td>
                     </tr>
                  )}
                  {users.map((user) => (
                     <tr key={user.id}>
                        <td className="px-6 py-4">
                           <div className="font-medium">{user.name}</div>
                           <div className="text-sm text-gray-500 max-w-70 truncate">
                              {user.email}
                           </div>
                        </td>
                        <td className="px-6 py-6 flex items-center gap-2">
                           <span className="text-muted-foreground text-sm bg-accent rounded-md p-2">
                              {formatDate(user.createdAt)}
                           </span>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                           <Button
                              variant="outline"
                              onClick={() => {
                                 handleModal("edit");
                                 setSelectedUser(user);
                              }}
                           >
                              <PencilLine /> Editar
                           </Button>
                           <Button
                              variant="outline"
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                              onClick={() => navigate(`/${user.username}`)}
                           >
                              <Eye /> Ver perfil
                           </Button>
                           <Button
                              variant="outline"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => {
                                 handleModal("delete");
                                 setSelectedUser(user);
                              }}
                           >
                              <Trash /> Eliminar
                           </Button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {showModal.active && showModal.for === "create" && (
            <CreateUser handleModal={() => handleModal("")} />
         )}
         {showModal.active && showModal.for === "delete" && selectedUser && (
            <DeleteUser handleModal={() => handleModal("")} user={selectedUser} />
         )}
         {showModal.active && showModal.for === "edit" && selectedUser && (
            <EditUser handleModal={() => handleModal("")} user={selectedUser} />
         )}
      </>
   );
};
