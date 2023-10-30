import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Container from "./Container";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Container />
            }
        ]
    }
])


function Router () {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default Router;