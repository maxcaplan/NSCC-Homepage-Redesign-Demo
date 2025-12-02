import { BottomNav } from "./components/layout/BottomNav";
import { Header } from "./components/layout/Header";
import { FindAProgramSection } from "./components/layout/sections/FindAProgramSection";
import { HeroSection } from "./components/layout/sections/HeroSection";

export function App() {
	return (
		<>
			{/* Website navigation */}
			<Header />
			<BottomNav />

			<main>
				{/* Page sections */}
				<HeroSection />
				<FindAProgramSection />
			</main>
		</>
	)
}
