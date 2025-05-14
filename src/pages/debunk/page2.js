// src/pages/theories/TheoriesPage3.js
import ContentPageLayout from "../../components/ContentPageLayout";

export default function DebunkPage2() {
	return (
		<ContentPageLayout
			title="Debunking Theory 2"
			subtitle="Scientific explanations that challenge popular beliefs"
			prevPage={{ path: "/debunk/page1", label: "Debunking Theory 1" }}
			nextPage={{ path: "/debunk/page3", label: "Debunking Theory 2" }}
		>
			<div className="space-y-4">
				<p className="text-gray-300">
					The ocean is really bad in this area, which can cause horrible waves
					and other conditions for planes and boats.
				</p>

				<h3 className="text-xl font-semibold mt-6 text-red-800">
					Supporting Evidence
				</h3>
				<ul className="list-disc pl-5 text-gray-300 space-y-2">
					<li>The random radar blips was likely another plane/ship.</li>
				</ul>
			</div>

			<div className="h-auto rounded-lg overflow-hidden mb-4">
				<img
					src="https://cdn.xanderxx.xyz/history-project/bermuda-triangle_Mysteries.jpg" // Change to your actual image path
					alt="Map of the Bermuda Triangle"
					className="w-full h-full object-cover"
				/>
			</div>
		</ContentPageLayout>
	);
}
