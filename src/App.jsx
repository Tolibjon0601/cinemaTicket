import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main_layouts/layout";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/home/login";
import AuthPage from "./pages/home/authPage";
import SeansPage from "./pages/home/seansPage";
import Ticketpage from "./pages/home/ticketpage";
import Searchpage from "./pages/home/searchpage";
import CinemaPage from "./pages/home/cinemapage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import SinglePage from "./pages/seance/singlepage";

const queryClient = new QueryClient();

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
				{
					path: "/movie/:id",
					element: <SinglePage/>,
			}
			],
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
