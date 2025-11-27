import { BottomNav } from "./components/layout/BottomNav";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/layout/sections/HeroSection";

export function App() {
	return (
		<>
			{/* Website navigation */}
			<Header />
			<BottomNav />

			{/* Page sections */}
			<HeroSection />
		</>
	)
}
