import { useRoutes } from "react-router-dom";
import Home from "../views/home/Index";
import Kenai from "../views/kenai/Index.tsx";
import MovieDetail from "../views/movieDetail/Index.tsx";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Home />},
    {path: "/kenai", element: <Kenai />},
    {path: "/movie/:id", element: <MovieDetail />}
  ])

  return router;
}

