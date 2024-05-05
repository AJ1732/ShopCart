import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Store from "../pages/Store";
import Home from "../pages/Home";
import About from "../pages/About";

// PATH TO ROUTES
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/store',
        element: <Store />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/*',
        element: <Navigate to={`.`} />
      },
    ]
  }, 
]);