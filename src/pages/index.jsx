import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import ProductDashboard from "./ProductDashboard";
import LoadingBar from "../shared/LoadingBar";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Signin/>
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
    return (
    <>
        <LoadingBar/>
        <RouterProvider router={router} />
    </>
    )
}

export default Pages;