import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

// PATH TO ROUTES
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/*',
        element: <Navigate to={`.`} />
      },
    ]
  }, 
]);