import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Chef from "../pages/Chef/Chef";
import Recipe from "../pages/Recipe/Recipe";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoutes from "./PrivateRoutes";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://bangla-foods-server-nrsabit.vercel.app/chefs')
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoutes><Chef></Chef></PrivateRoutes>,
                loader: ({params}) => fetch(`https://bangla-foods-server-nrsabit.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/recipe/:id',
                element: <Recipe></Recipe>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
  ])

  export default router;