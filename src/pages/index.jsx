import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import ProductDashboard from "./ProductDashboard";

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
    {
        path: '/dashboard',
        element: <ProductDashboard/>
    },
]);

function Pages(){
    return <RouterProvider router={router} />
}

export default Pages;