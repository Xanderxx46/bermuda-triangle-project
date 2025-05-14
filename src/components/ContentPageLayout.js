// src/components/ContentPageLayout.js
import { Link } from "react-router-dom";

export default function ContentPageLayout({
	title,
	subtitle,
	children,
	prevPage,
	nextPage,
}) {
	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-2 text-red-800">{title}</h1>
			<h2 className="text-xl text-gray-400 mb-6">{subtitle}</h2>

			<div className="bg-gray-800 p-6 rounded-lg shadow-lg">{children}</div>

			{(prevPage || nextPage) && (
				<div className="mt-8 flex justify-between">
					{prevPage ? (
						<Link
							to={prevPage.path}
							className="text-red-800 hover:text-red-600"
						>
							← Previous: {prevPage.label}
						</Link>
					) : (
						<div></div>
					)}

					{nextPage ? (
						<Link
							to={nextPage.path}
							className="text-red-800 hover:text-red-600"
						>
							Next: {nextPage.label} →
						</Link>
					) : (
						<div></div>
					)}
				</div>
			)}
		</div>
	);
}