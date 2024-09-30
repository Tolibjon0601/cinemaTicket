import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main_layouts/layout";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/home/login";
import AuthPage from "./pages/home/authPage";
import SeansPage from "./pages/home/seansPage";
import Ticketpage from "./pages/home/ticketpage";
import Searchpage from "./pages/home/searchpage";
import "./App.css";
import CinemaPage from "./pages/home/cinemapage";

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
				{
					path: "seanspage",
					element: <SeansPage />,
				},
				{
					path: "ticketpage",
					element: <Ticketpage />,
				},
				{
					path: "searchpage",
					element: <Searchpage />,
				},
				{
					path: "cinemapage",
					element: <CinemaPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
