// src/pages/HomePage.js
import { Map, BookOpen, AlertTriangle } from "lucide-react";
import SectionPreview from "../components/SectionPreview";

export default function HomePage() {
	return (
		<div>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-6 text-red-800">
					The Bermuda Triangle
				</h1>

				<div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
					<p className="text-lg mb-4">
						The Bermuda Triangle is one of the most infamus areas around. Many
						ships go missing here, and no one really knows why because no
						wreckage is found. This could be for a multitude of reasons. There
						are a lot of theories to as why, which we will be exploring here
						today.
					</p>
					<div className="h-auto rounded-lg overflow-hidden mb-4">
						<img
							src="https://cdn.xanderxx.xyz/history-project/bermuda_triangle_image.jpg" // Change to your actual image path
							alt="Map of the Bermuda Triangle"
							className="w-full h-full object-cover"
						/>
					</div>
					<p className="text-gray-300">
						You can use the boxes below to browse the Bermuda Triangle area and
						the theories surrounding it.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<SectionPreview
						title="Geography"
						description="Explore the location, boundaries, and unique environmental features of the Bermuda Triangle region."
						icon={<Map size={24} className="text-red-800" />}
						linkTo="/geography/page1"
					/>
					<SectionPreview
						title="Theories"
						description="Discover the various theories that have attempted to explain the mysterious disappearances in the area."
						icon={<BookOpen size={24} className="text-red-800" />}
						linkTo="/theories/page1"
					/>
					<SectionPreview
						title="Debunking"
						description="Examine the scientific evidence and explanations that challenge the mythology surrounding the Triangle."
						icon={<AlertTriangle size={24} className="text-red-800" />}
						linkTo="/debunk/page1"
					/>
				</div>
			</div>
		</div>
	);
}
