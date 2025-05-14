// src/pages/geography/GeographyPage2.js
import ContentPageLayout from "../../components/ContentPageLayout";

export default function GeographyPage2() {
	return (
		<ContentPageLayout
			title="Geography: Ocean Conditions"
			subtitle="Understanding the physical attributes of the Bermuda Triangle"
			prevPage={{ path: "/geography/page1", label: "Location & Boundaries" }}
			nextPage={{ path: "/geography/page3", label: "Surrounding Regions" }}
		>
			<div className="space-y-4">
				<p className="text-gray-300">
					Storms and rough weather is common here. Its part of what makes it so
					dangerous. It has really rough seas.
				</p>

				<h3 className="text-xl font-semibold mt-6 text-red-800">Key Points</h3>
				<ul className="list-disc pl-5 text-gray-300 space-y-2">
					<li>Weather changes suddenly</li>
					<li>Really rough waves</li>
				</ul>
			</div>
			<div className="h-100 w-full rounded-lg overflow-hidden mb-4">
				<img
					src="https://cdn.xanderxx.xyz/history-project/Bermuda-Triangle.png"
					alt="Map of the Bermuda Triangle"
					className="w-full h-full object-cover"
				/>
			</div>
		</ContentPageLayout>
	);
}
