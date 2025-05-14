// src/components/Footer.js
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-gray-800 border-t border-gray-700 py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-gray-400 mb-4 md:mb-0">
						© {new Date().getFullYear()} Xander Hogan
					</div>
					<div className="flex space-x-4">
						<Link
							to="https://xanderxx.xyz"
							className="text-gray-400 hover:text-red-800"
						>
							About
						</Link>
						<Link
							to="mailto:ah10982@cherokeek12.net"
							className="text-gray-400 hover:text-red-800"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
