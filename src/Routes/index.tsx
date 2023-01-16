import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";


export const RoutesMain = () => { 

return(
    <Routes> 
       <Route path="/login" element={<Login/>}/>
       <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
)

}
