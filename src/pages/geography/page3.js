// src/pages/geography/GeographyPage3.js
import ContentPageLayout from "../../components/ContentPageLayout";

export default function GeographyPage3() {
	return (
		<ContentPageLayout
			title="Geography: Surrounding Regions"
			subtitle="Understanding the physical attributes of the Bermuda Triangle"
			prevPage={{ path: "./geography/page2", label: "Ocean Conditions" }}
		>
			<div className="space-y-4">
				<p className="text-gray-300">
					Its near the bahammas, which also get a lot of storms because of this
					area. The coasts like Miami also cause a factor because a lot of
					people are in this area.
				</p>

				<h3 className="text-xl font-semibold mt-6 text-red-800">Key Points</h3>
				<ul className="list-disc pl-5 text-gray-300 space-y-2">
					<li>
						Sits near the Puerto Rico Trench, the deepest part of the Atlantic
						Ocean (over 27,000 feet).
					</li>
					<li>The triangle lies within one of the busiest oceanic corridors.</li>
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
