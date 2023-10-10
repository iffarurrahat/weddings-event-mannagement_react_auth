import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SingleWeddingOption from "../pages/SingleWeddingOption/SingleWeddingOption";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import Portfolio from "../pages/Portfolio/Portfolio";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/weddingOptions.json'),
            },
            {
                path: '/weddingOption/:id',
                element: <PrivateRoute><SingleWeddingOption></SingleWeddingOption></PrivateRoute>,
                loader: () => fetch('/weddingOptions.json'),
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    },
]);

export default router;