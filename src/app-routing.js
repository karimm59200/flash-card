import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import AboutPage from "./routes/AboutPage";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import RandomFlashCard from "./routes/RandomFlashCard";





const router = createBrowserRouter([
    {path:'/', element: <App/>, errorElement: <ErrorPage/> , children: [
        {path:'/', element: <HomePage/>},
        {path:'/about', element: <AboutPage/>},
            {path:'/flashcard-random', element: <RandomFlashCard/>},
    ]}
])

export default router
