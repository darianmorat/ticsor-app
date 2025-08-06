import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Login } from "./pages/Login";
import { Learn } from "./pages/Learn";
import { Default } from "./layouts/Default";
import { useAuthStore } from "./stores/useAuthStore";
import { useEffect, useLayoutEffect, type ReactNode } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import { PrivateRoute } from "./components/auth/PrivateRoute";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import { SecureRoute } from "./components/auth/SecureRoute";
import { Alphabet } from "./pages/Alphabet";
import { Module } from "./pages/Module";
import { LetterLesson } from "./pages/Letter";

function App() {
   const { isAuth, checkingAuth, checkAuth } = useAuthStore();

   useEffect(() => {
      checkAuth();
   }, [checkAuth]);

   if (checkingAuth) {
      return <LoadingSpinner />;
   }

   const Wrapper = ({ children }: { children: ReactNode }) => {
      const location = useLocation();

      useLayoutEffect(() => {
         window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, [location.pathname]);

      return children;
   };

   return (
      <>
         <Wrapper>
            <Routes>
               <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Login />} />
               <Route path="/404" element={<NotFound />} />

               <Route element={<PrivateRoute />}>
                  <Route element={<Default />}>
                     <Route path="/home" element={<Learn />} />
                     <Route path="/:username" element={<Profile />} />
                     <Route path="/alphabet" element={<Alphabet />} />
                     <Route path="/alphabet/:letter" element={<LetterLesson />} />
                     <Route path="/module/:moduleId" element={<Module />} />
                  </Route>
               </Route>

               <Route element={<SecureRoute />}>
                  <Route element={<Default />}>
                     <Route path="/dashboard" element={<Dashboard />} />
                  </Route>
               </Route>
            </Routes>
         </Wrapper>

         <ToastContainer
            className="mb-[-15px]"
            theme="colored"
            autoClose={4500}
            position="bottom-right"
            transition={Bounce}
            pauseOnHover={false}
         />
      </>
   );
}

export default App;
