// src/pages/theories/TheoriesPage1.js
import ContentPageLayout from "../../components/ContentPageLayout";

export default function TheoriesPage1() {
	return (
		<ContentPageLayout
			title="Theory 1"
			subtitle="Exploring popular explanations for the Bermuda Triangle mystery"
			nextPage={{ path: "/theories/page2", label: "Theory 2" }}
		>
			<div className="space-y-4">
				<p className="text-gray-300">
					Some people think its a time portal, which causes ships and planes to
					go into different times/realities.{" "}
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
