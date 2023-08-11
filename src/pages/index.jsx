import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Header, AuthMenu} from "../shared/layout";
import {Signin, Signup} from "./auth";
import Dashboard from "./dashboard";
import LoadingBar from "../shared/LoadingBar";

const router = createBrowserRouter([
    {
        element: <AuthMenu/>,
        children: [
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
        ]
    },
    {
        element: <Header />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
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