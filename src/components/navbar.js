import { useState } from "react";
import { Menu, X, Home, Map, BookOpen, AlertTriangle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navigate = useNavigate();

	// Navigation items structure
	const navItems = [
		{ id: "home", label: "Home", icon: <Home size={18} />, path: "./" },
		{
			id: "geography",
			label: "Geography",
			icon: <Map size={18} />,
			subItems: [
				{
					id: "geography-1",
					label: "Location & Boundaries",
					path: "./geography/page1",
				},
				{
					id: "geography-2",
					label: "Ocean Conditions",
					path: "./geography/page2",
				},
				{
					id: "geography-3",
					label: "Surrounding Regions",
					path: "./geography/page3",
				},
			],
		},
		{
			id: "theories",
			label: "Theories",
			icon: <BookOpen size={18} />,
			subItems: [
				{ id: "theories-1", label: "Theory 1", path: "./theories/page1" },
				{ id: "theories-2", label: "Theory 2", path: "./theories/page2" },
				{ id: "theories-3", label: "Theory 3", path: "./theories/page3" },
			],
		},
		{
			id: "debunk",
			label: "Debunking",
			icon: <AlertTriangle size={18} />,
			subItems: [
				{ id: "debunk-1", label: "Debunking Theory 1", path: "./debunk/page1" },
				{ id: "debunk-2", label: "Debunking Theory 2", path: "./debunk/page2" },
				{ id: "debunk-3", label: "Debunking Theory 3", path: "./debunk/page3" },
			],
		},
		{
			id: "sources",
			label: "Sources",
			icon: <Home size={18} />,
			path: "./sources",
		},
	];

	return (
		<>
			{/* Header */}
			<header className="bg-gray-800 border-b border-gray-700">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<div
						className="text-2xl font-bold cursor-pointer flex items-center"
						onClick={() => navigate("/")}
					>
						<span className="text-red-800">The Bermuda Triangle</span>
					</div>

					{/* Mobile menu button */}
					<button
						className="md:hidden text-gray-300 hover:text-white"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-6">
						{navItems.map((item) => (
							<div key={item.id} className="relative group">
								{item.path ? (
									<Link
										to={item.path}
										className="flex items-center space-x-1 text-gray-300 hover:text-red-500 py-2"
									>
										{item.icon}
										<span>{item.label}</span>
									</Link>
								) : (
									<button className="flex items-center space-x-1 text-gray-300 hover:text-red-500 py-2">
										{item.icon}
										<span>{item.label}</span>
									</button>
								)}

								{item.subItems && (
									<div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
										<div className="py-1">
											{item.subItems.map((subItem) => (
												<Link
													key={subItem.id}
													to={subItem.path}
													className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-red-500 w-full text-left"
												>
													{subItem.label}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</nav>
				</div>
			</header>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-gray-800 border-b border-gray-700">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{navItems.map((item) => (
							<div key={item.id}>
								{item.path ? (
									<Link
										to={item.path}
										className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 w-full text-left flex items-center"
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.icon}
										<span className="ml-2">{item.label}</span>
									</Link>
								) : (
									<button className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 w-full text-left flex items-center">
										{item.icon}
										<span className="ml-2">{item.label}</span>
									</button>
								)}

								{item.subItems && (
									<div className="pl-6 space-y-1">
										{item.subItems.map((subItem) => (
											<Link
												key={subItem.id}
												to={subItem.path}
												className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-700 w-full text-left"
												onClick={() => setMobileMenuOpen(false)}
											>
												{subItem.label}
											</Link>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}
