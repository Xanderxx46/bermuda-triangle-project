// src/pages/theories/TheoriesPage2.js
import ContentPageLayout from "../../components/ContentPageLayout";

export default function TheoriesPage2() {
	return (
		<ContentPageLayout
			title="Theory 2"
			subtitle="Exploring popular explanations for the Bermuda Triangle mystery"
			prevPage={{ path: "/theories/page1", label: "Theory 1" }}
			nextPage={{ path: "/theories/page3", label: "Theory 3" }}
		>
			<div className="space-y-4">
				<p className="text-gray-300">
					Some people think aliens took them. They claim to have seen flashing
					lights in the sky or random radar blips.
				</p>

				<h3 className="text-xl font-semibold mt-6 text-red-800">
					Supporting Evidence
				</h3>
				<ul className="list-disc pl-5 text-gray-300 space-y-2">
					<li>Flight 19, disappeared without a trace.</li>
					<li>
						USS Cyclops, a navy cargo ship with 309 people that disappeared.
					</li>
				</ul>
			</div>

			<div className="h-auto rounded-lg overflow-hidden mb-4">
				<img
					src="https://cdn.xanderxx.xyz/history-project/vortex.jpg" // Change to your actual image path
					alt="Vortex"
					className="w-full h-full object-cover"
				/>
			</div>
		</ContentPageLayout>
	);
}
