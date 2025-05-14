// src/pages/geography/GeographyPage1.js
import ContentPageLayout from "../../components/ContentPageLayout";

export default function GeographyPage1() {
	return (
		<ContentPageLayout
			title="Geography: Location"
			subtitle="Understanding the physical attributes of the Bermuda Triangle"
			nextPage={{ path: "./geography/page2", label: "Ocean Conditions" }}
		>
			<div className="space-y-4">
				<p className="text-gray-300">
					The Bermuda triangle is the triangle area between Miami Florida,
					Bermuda, and San Juan, Puerto Rico. Its estimated to be between
					500,000 and 1.5 million square miles.
				</p>

				<h3 className="text-xl font-semibold mt-6 text-red-800">Key Points</h3>
				<ul className="list-disc pl-5 text-gray-300 space-y-2">
					<li>Around 50 ships and 20 planes went missing</li>
					<li>No Wreckage Found</li>
				</ul>
			</div>
			<div className="h-auto w-full rounded-lg overflow-hidden mb-4">
				<img
					src="https://cdn.xanderxx.xyz/history-project/Bermuda-Triangle.png"
					alt="Map of the Bermuda Triangle"
					className="w-full h-full object-cover"
				/>
			</div>
		</ContentPageLayout>
	);
}
