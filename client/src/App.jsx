import { createContext } from 'react';
import { useCookies } from 'react-cookie';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Company from './pages/company/Company';


const Cookies = createContext();
function App() {
	const [cookie, setCookie, removeCookie] = useCookies(['key', 'role']);
	const route = createBrowserRouter([
		{ path: "/", element: <Login /> },
		{ path: "/home", element: <Home /> },
		{ path: "/company", element: <Company /> }
	]);
	return (
		<Cookies.Provider value={[cookie, setCookie, removeCookie]}>
			<RouterProvider router={route} />
		</Cookies.Provider>
	);
}

export default App;
export { Cookies };
