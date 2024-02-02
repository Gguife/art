import { useRoutes } from "react-router-dom";
import Home from "../views/home/Index";
import Kenai from "../views/kenai/index";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Home />},
    {path: "/kenai", element: <Kenai />}
  ])

  return router;
}

