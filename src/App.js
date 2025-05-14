// src/App.js
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from "react-router-dom";

// Page imports
import HomePage from "./pages/homePage";
import GeographyPage1 from "./pages/geography/page1.js";
import GeographyPage2 from "./pages/geography/page2.js";
import GeographyPage3 from "./pages/geography/page3.js";
import TheoriesPage1 from "./pages/theories/page1.js";
import TheoriesPage2 from "./pages/theories/page2.js";
import TheoriesPage3 from "./pages/theories/page3.js";
import DebunkPage1 from "./pages/debunk/page1.js";
import DebunkPage2 from "./pages/debunk/page2.js";
import DebunkPage3 from "./pages/debunk/page3.js";

// Navigation and Layout components
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

import SourcesPage from "./pages/sources.js";

export default function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
				<Navbar />

				{/* Main Content */}
				<main className="flex-grow container mx-auto px-4 py-8">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/geography/page1" element={<GeographyPage1 />} />
						<Route path="/geography/page2" element={<GeographyPage2 />} />
						<Route path="/geography/page3" element={<GeographyPage3 />} />
						<Route path="/theories/page1" element={<TheoriesPage1 />} />
						<Route path="/theories/page2" element={<TheoriesPage2 />} />
						<Route path="/theories/page3" element={<TheoriesPage3 />} />
						<Route path="/debunk/page1" element={<DebunkPage1 />} />
						<Route path="/debunk/page2" element={<DebunkPage2 />} />
						<Route path="/debunk/page3" element={<DebunkPage3 />} />
						<Route path="/sources" element={<SourcesPage />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</Router>
	);
}
