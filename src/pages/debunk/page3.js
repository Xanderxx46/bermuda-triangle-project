// src/pages/theories/TheoriesPage3.js
import ContentPageLayout from "../../components/ContentPageLayout";

export default function DebunkPage3() {
	return (
		<ContentPageLayout
			title="Debunking Theory 3"
			subtitle="Scientific explanations that challenge popular beliefs"
			prevPage={{ path: "/debunk/page2", label: "Debunking Theory 2" }}
		>
			<div className="space-y-4">
				<p className="text-gray-300">
					Methane gas could get trapped under the ocean floor and suddenly be
					realeased, which would cause the ships to flip over from lack of
					buoyancy.
				</p>

				<h3 className="text-xl font-semibold mt-6 text-red-800">
					Supporting Evidence
				</h3>
				<ul className="list-disc pl-5 text-gray-300 space-y-2">
					<li>
						The lost city of Atlantis isnt real. Theres no evidence of it
						existing.
					</li>
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
