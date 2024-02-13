import { createBrowserRouter } from "react-router-dom";
import Home from "../page";
import Loginpage from "../loginpage";
import Landing from "../landingpage";
import Registration from "../registrationpage";
export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        children: [
            {path:"",element:<Landing />},
            {path:"",element:<Registration />},
            {path:"",element:<Loginpage />}
        ],
    },
]);