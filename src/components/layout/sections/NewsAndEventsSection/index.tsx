import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import "@/scss/components/layout/sections/NewsAndEventsSection/_index.scss"
import { Event } from "./Event"
import { NewsArticle } from "./NewsArticle"

export function NewsAndEventsSection() {
	return (
		<div
			id="news-and-events-section"
			class="page-section"
		>
			<div class="container">
				<section
					aria-labelledby="events"
					id="events-section"
				>
					<div class="page-section-heading">
						<h2 id="events">
							Events
						</h2>
						<p>
							View a detailed list of all upcoming events at NSCC, including events at specific campuses.
						</p>
					</div>

					<div class="events-section-body">
						<Event
							event-id="event-1"
							title="Daily English: Common winter idioms"
							date={{ day: 8, month: "dec", year: 2025 }}
							time={{ hour: 6, minute: 30, meridiem: "pm" }}
							end-time={{ hour: 7, minute: 30, meridiem: "pm" }}
						>
							EAL Online Workshop.
						</Event>

						<Event
							event-id="event-2"
							title="Program Openings for Winter Term"
							date={{ day: 9, month: "dec", year: 2025 }}
							time={{ hour: 10, meridiem: "am" }}
							end-time={{ hour: 11, meridiem: "am" }}
						>
							Are you interested in starting or continuing your education this Winter?

							Join us for an online info session to learn more about available programs, including campus locations and career options. We’ll also go over admission requirements and give you the details you need to apply. You’ll have the opportunity to ask questions throughout the session.
						</Event>

						<Event
							event-id="event-3"
							title="Info session: Become a student"
							date={{ day: 10, month: "dec", year: 2025 }}
							time={{ hour: 2, meridiem: "pm" }}
							end-time={{ hour: 3, meridiem: "pm" }}
						>
							Join us for an online info session to discover all NSCC has to offer. Explore our wide range of programs and campuses, and see how our unique, hands-on learning environment prepares you for success in the workforce.

							We’ll cover details about tuition and program costs, scholarships, bursaries and awards, what it’s like to be an NSCC student, and we’ll walk you through the application process. You’ll have the opportunity to ask questions throughout the session.
						</Event>
					</div>

					<div class="events-section-footer">
						<Button href="#" color="accent" animate-icon>
							View all events
							<Icon icon="chevron-right" />
						</Button>
					</div>
				</section>

				<section
					aria-labelledby="nscc-in-the-news"
					id="news-section"
				>
					<div class="page-section-heading">
						<h2 id="nscc-in-the-news">
							NSCC in the News
						</h2>
						<p>
							Read all the stories where NSCC has appeared in the news whether a brief mention or a more focused piece.
						</p>
					</div>

					<div class="news-section-body">
						<NewsArticle
							news-id="news-1"
							title="Purple Ribbon Campaign shines light on gender-based violence"
							publisher="The Tri-County Vanguard"
							date={{ month: "nov", day: 26, year: 2025 }}
						>
							Juniper House’s annual Purple Ribbon Campaign honours lives lost to gender-based violence and raises awareness through community activities. NSCC Libraries and Learning Commons has partnered with them to share a curated library collection featuring resources for each day of action.
						</NewsArticle>

						<NewsArticle
							news-id="news-2"
							title="Life of an intern: a summer with OTN’s telemetry operations team"
							publisher="Ocean Tracking Network"
							date={{ month: "nov", day: 24, year: 2025 }}
						>
							Oceans Technology student Jazmine Allan shares insights from her six-month summer internship with the Ocean Tracking Network, highlighting hands-on learning and NSCC’s strong research partnerships.
						</NewsArticle>

						<NewsArticle
							news-id="news-3"
							title="$10k fellowship opportunity for Black and Indigenous journalists"
							publisher="University of King's College"
							date={{ month: "nov", day: 20, year: 2025 }}
						>
							A new $10,000 fellowship prioritizes Black and Indigenous emerging journalists and local, long-form reporting. The fellowship is available for King’s and NSCC journalism students and grads to apply to.
						</NewsArticle>
					</div>

					<div class="news-section-footer">
						<Button href="#" color="accent" animate-icon>
							View all news articles
							<Icon icon="chevron-right" />
						</Button>
					</div>
				</section>
			</div>
		</div>
	)
}
