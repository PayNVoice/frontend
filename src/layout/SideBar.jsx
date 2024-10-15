import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";
import { User, ChartArea, Home, X, History } from "lucide-react";

// Dummy nav items
const navItems = [
	{
		id: 1,
		name: "Dashboard",
		path: "/invoice/dashboard",
		icon: Home,
	},
	{
		id: 2,
		name: "Create Invoice",
		path: "/invoice/create-invoice",
		icon: User,
	},
	{ id: 3, name: "Contracts", path: "/invoice/multiparty", icon: ChartArea },
	{
		id: 4,
		name: "Transaction History",
		path: "/invoice/transaction-history",
		icon: History,
	},
];

const SideBar = ({ opened, setOpened }) => {
	const location = useLocation();
	const [activeNav, setActiveNav] = useState("");

	// Update the active path on route change
	useEffect(() => {
		setActiveNav(location.pathname);
	}, [location]);

	return (
		<div
			className={`${
				opened ? "w-60 md:w-0 z-10" : "w-60 z-10 hidden"
			} fixed space-y-7 md:flex md:flex-col bg-gradient-to-b to-[#568ce2] from-[#1f3a63] py-3 shadow-md h-screen`}
		>
			<div className="">
				<X
					onClick={() => setOpened(false)}
					className="cursor-pointer ml-52 mt-2 justify-end rounded-full  text-white md:hidden flex"
				/>
				<Link to="/" className="">
					<img src={logo} alt="logo" className="h-24 w-full" />
				</Link>
			</div>

			<div className="flex flex-col justify-center items-center space-y-4">
				{navItems.map((item) => (
					<NavLink
						key={item.id}
						to={item.path}
						className={`w-5/6  text-white font-roboto text-base font-bold cursor-pointer py-2 gap-3 flex items-center px-3 ${
							activeNav === item.path
								? "bg-blue-500 border-cyan-400 text-cyan-700"
								: "hover:bg-blue-500 text-gray-400"
						}`}
						onClick={() => setActiveNav(item.path)}
					>
						<item.icon className={`text-xl`} />
						<p>{item.name}</p>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default SideBar;
