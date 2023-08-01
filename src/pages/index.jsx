import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello World! Nice</div>
    },
    {
        path: '/signin',
        element: <Signin/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
]);

function Pages(){
    return <RouterProvider router={router} />
}

export default Pages;