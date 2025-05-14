// src/components/SectionPreview.js
import { Link } from "react-router-dom";

export default function SectionPreview({ title, description, icon, linkTo }) {
	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
			<div className="flex items-center mb-4">
				{icon}
				<h2 className="text-xl font-semibold ml-2">{title}</h2>
			</div>
			<p className="text-gray-300">{description}</p>
			<div className="mt-4">
				<Link
					to={linkTo}
					className="text-red-800 hover:text-red-600 font-medium"
				>
					Read more →
				</Link>
			</div>
		</div>
	);
}