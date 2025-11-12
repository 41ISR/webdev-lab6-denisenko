import { createBrowserRouter } from "react-router-dom"
import Layout from "./../pages/layout/Layout"
import SearchPage from "./../pages/SearchPage/SearchPage"
import PlayerDetails from "./../pages/PlayerDetails/PlayerDetails"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <SearchPage />
            },
            {
                path: "player/:id",
                element: <PlayerDetails />
            }
        ]
    }
])