import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon, Lock, User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";

const formSchema = z.object({
   email: z.string().email({ message: "Email invalido" }),
   password: z.string().min(1, { message: "Contraseña invalida" }),
});

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
   const [showPassword, setShowPassword] = useState(false);
   const { isLoading, authenticate } = useAuthStore();

   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      authenticate(values.email, values.password);
   };

   const toggleShowPassword = () => {
      setShowPassword((prev) => !prev);
   };

   return (
      <Form {...form}>
         <form
            {...props}
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn("flex flex-col gap-6", className)}
         >
            <div className="flex flex-col gap-6">
               <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-2xl font-bold">Inicio de sesión</h1>
                  <p className="text-muted-foreground text-sm text-balance">
                     Ingresa tu correo y contraseña para continuar
                  </p>
               </div>
               <div className="grid gap-6">
                  <FormField
                     control={form.control}
                     name="email"
                     disabled={isLoading}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <div className="relative">
                                 <User
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                                    size={18}
                                 />
                                 <Input
                                    placeholder="tu@gmail.com"
                                    {...field}
                                    className="pl-10"
                                 />
                              </div>
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="password"
                     disabled={isLoading}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Contraseña</FormLabel>
                           <FormControl>
                              <div className="relative">
                                 <Lock
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                                    size={18}
                                 />

                                 <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder={showPassword ? "Contraseña" : "••••••••"}
                                    {...field}
                                    className="pl-10"
                                 />
                                 <Button
                                    type="button"
                                    variant={"ghost"}
                                    className="absolute right-0 top-0 text-muted-foreground"
                                    onClick={() => toggleShowPassword()}
                                    disabled={isLoading}
                                 >
                                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                                 </Button>
                              </div>
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <div className="flex flex-col gap-3">
                     <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Iniciando Sesión..." : "Inicio Sesión"}
                     </Button>
                  </div>
               </div>
            </div>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
               <span className="bg-background text-muted-foreground relative z-10 px-2"></span>
            </div>
            <div className="text-center text-sm text-muted-foreground">
               © 2025 Ticsor App.
               <br /> Todos los derechos reservados.
            </div>
         </form>
      </Form>
   );
}
