// src/pages/theories/TheoriesPage3.js
import ContentPageLayout from "../../components/ContentPageLayout";

export default function DebunkPage1() {
	return (
		<ContentPageLayout
			title="Debunking Theory 1"
			subtitle="Scientific explanations that challenge popular beliefs"
			nextPage={{ path: "/debunk/page2", label: "Debunking Theory 2" }}
		>
			<div className="space-y-4">
				<p className="text-gray-300">
					Its more likely that theres just human error involved. This could be a
					range of thinks such as navigational errors and a lack of emergency
					comms.
				</p>

				<h3 className="text-xl font-semibold mt-6 text-red-800">
					Supporting Evidence
				</h3>
				<ul className="list-disc pl-5 text-gray-300 space-y-2">
					<li>Researchers have found no evidence of a time vortex.</li>
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
