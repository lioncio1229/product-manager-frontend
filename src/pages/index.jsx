import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello World! Nice</div>
    },
    {
        path: '/login',
        element: <Login/>
    },
]);

function Pages(){
    return <RouterProvider router={router} />
}

export default Pages;