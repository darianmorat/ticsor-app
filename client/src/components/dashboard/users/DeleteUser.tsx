import { Button } from "../../ui/button";
import { LoaderCircle, X } from "lucide-react";
import { useUserStore } from "@/stores/useUserStore";
import { Modal } from "@/components/ui/Modal";

type DeleteUserProps = {
   handleModal: () => void;
   user: User;
};

// PENDING:
// THIS IS BEING REPEATED, MAKE A GLOBAL TYPE
type User = {
   id: string;
   name: string;
};

export const DeleteUser = ({ handleModal, user }: DeleteUserProps) => {
   const { isLoading, deleteUser } = useUserStore();

   const handleDelete = async () => {
      await deleteUser(user.id);
      handleModal();
   };

   return (
      <Modal onClose={handleModal}>
         <div className="relative bg-background dark:bg-accent p-6 rounded-lg m-4 w-full max-w-100 flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Eliminar usuario</h1>
            <p className="text-muted-foreground text-sm">
               Confirma que quiere eliminar el usuario{" "}
               <span className="font-bold">{user.name}</span>?
            </p>
            <Button
               type="button"
               variant={"ghost"}
               className="absolute right-2 top-2 text-muted-foreground"
               onClick={() => handleModal()}
            >
               <X />
            </Button>
            <div className="flex gap-2 pt-2">
               <Button
                  variant={"default"}
                  type="submit"
                  onClick={() => handleDelete()}
                  disabled={isLoading}
                  className="flex-1/2"
               >
                  {isLoading && <LoaderCircle className="animate-spin" />}
                  {isLoading ? "Eliminando" : "Aceptar"}
               </Button>
               <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => handleModal()}
                  disabled={isLoading}
                  className="flex-1/2"
               >
                  Cancelar
               </Button>
            </div>
         </div>
      </Modal>
   );
};
