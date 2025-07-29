import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Learn } from "./pages/Learn";
import { Default } from "./layouts/Default";

function App() {
   return (
      <>
         <Routes>
            <Route element={<Default />}>
               <Route path="/" element={<Login />} />
               <Route path="/learn" element={<Learn />} />
            </Route>
         </Routes>
      </>
   );
}

export default App;
