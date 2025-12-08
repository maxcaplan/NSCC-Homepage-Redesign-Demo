import { useEffect, useRef, useState } from "preact/hooks";
import { BottomNav } from "./components/layout/BottomNav";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { FindAProgramSection } from "./components/layout/sections/FindAProgramSection";
import { HeroSection } from "./components/layout/sections/HeroSection";
import { LandAcknowledgementSection } from "./components/layout/sections/LandAcknowledgementSection";
import { NewsAndEventsSection } from "./components/layout/sections/NewsAndEventsSection";
import { QuickLinks } from "./components/layout/sections/QuickLinksSection";
import { StoriesAndHighlightsSection } from "./components/layout/sections/StoriesAndHighlightsSection";

export function App() {
	/** Number of pixels of scroll before header is marked as "sticking" */
	const header_sticking_offset = 26

	/** Whether the header is currently sticking to the top of the viewport while scrolling */
	const [is_header_sticking, set_is_header_sticking] = useState(false)

	/** Refrence to page main element */
	const main_ref = useRef<HTMLElement>(null)

	/** Handle scroll event for page */
	const handle_page_scroll = () => {
		set_is_header_sticking(window.pageYOffset > header_sticking_offset)
	}

	// Attach scroll event listener to document
	useEffect(() => {
		if (main_ref.current === null) {
			return
		}

		document.addEventListener("scroll", handle_page_scroll)

		return () => {
			if (main_ref.current === null) {
				return
			}

			document.removeEventListener("scroll", handle_page_scroll)
		}
	})

	return (
		<>
			{/* Website navigation */}
			<Header sticking={is_header_sticking} />
			<BottomNav />

			<main ref={main_ref}>
				{/* Page sections */}
				<HeroSection />
				<FindAProgramSection />
				<StoriesAndHighlightsSection />
				<QuickLinks />
				<LandAcknowledgementSection />
				<NewsAndEventsSection />
			</main>

			<Footer />
		</>
	)
}
