import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main";
import MainHome from "../Pages/Home/MainHome/MainHome";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import CheckOut from "../Pages/Checkout/ChceckOut";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRouts from "./PrivateRouts";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }, {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRouts>
                    <MyBookings></MyBookings>
                </PrivateRouts>
            }

        ]

    }
])


export default router