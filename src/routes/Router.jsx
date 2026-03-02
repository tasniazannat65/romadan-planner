import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Planner from "../pages/Planner";
import Progress from "../pages/Progress";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/planner',
                Component: Planner
            },
            {
                path: '/progress',
                Component: Progress
            }
        ]
    }
])