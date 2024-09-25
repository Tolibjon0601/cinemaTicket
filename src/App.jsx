import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import MainLayout from "./layouts/main_layouts/layout";
import HomePage from "./pages/home";
import LoginPage from "./pages/home/login";
import AuthPage from "./pages/home/AuthPage";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "authpage",
          element: <AuthPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
