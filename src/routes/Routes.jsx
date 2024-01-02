import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckoutLayout from "../layout/CheckoutLayout";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/',
        element: <CheckoutLayout></CheckoutLayout>,
        children: [
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://genius-car-server-lilac-nu.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            }
        ]

    }
]);

export default router;