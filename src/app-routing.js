import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import OneFlash from "./routes/OneFlash";
import AddFlashCard from "./routes/AddFlashCard";


const router = createBrowserRouter([
    {
        path: '/', element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '/', element: <HomePage />},
            {path: '/add-flash', element: <AddFlashCard/>},
            {path: '/flashcard/:id', element: <OneFlash/>},
        ]
    }
])

export default router
