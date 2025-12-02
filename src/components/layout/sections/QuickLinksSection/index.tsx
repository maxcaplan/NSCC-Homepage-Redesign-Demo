import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Image } from "@/components/Image"
import "@/scss/components/layout/sections/QuickLinksSection/_index.scss"

import ImportantDatesLarge from "/images/quick-links/important-dates/important-dates-large.jpg"
import ImportantDatesSmall from "/images/quick-links/important-dates/important-dates-small.jpg"
import ExploreOurCampusesLarge from "/images/quick-links/explore-our-campuses/explore-our-campuses-large.jpg"
import ExploreOurCampusesSmall from "/images/quick-links/explore-our-campuses/explore-our-campuses-small.jpg"

/** Quick links page section component */
export function QuickLinks() {
	return (
		<section
			aria-labelledby="quick-links"
			id="quick-links-section"
			class="page-section"
		>
			<div class="container">
				<div class="page-section-heading">
					<h2 id="quick-links">
						Quick Links
					</h2>
				</div>

				<div class="quick-links-container">
					<div
						aria-labelledby="important-dates"
						class="quick-links-card"
					>
						<Image
							sources={[
								{
									srcset: ImportantDatesLarge,
									media: "large",
									width: 174,
									height: 200,
								},
								{
									srcset: ImportantDatesSmall,
									media: "medium",
									width: 580,
									height: 190,
								},
								{
									srcset: ImportantDatesSmall,
									media: "small",
									width: 580,
									height: 190,
								}
							]}
							src={ImportantDatesLarge}
							width={174}
							height={200}
							loading="lazy"
							class="quick-links-card-image"
						/>

						<div class="quick-links-card-body">
							<h3 id="important-dates">
								Important dates for applicants and students
							</h3>

							<p>
								See academic dates, College closures and holidays.
							</p>

							<div class="quick-links-card-footer">
								<Button
									href="#"
									color="accent"
									animate-icon
								>
									View our academic calendar
									<Icon icon="chevron-right" />
								</Button>
							</div>
						</div>
					</div>

					<div
						aria-labelledby="explore-our-campuses"
						class="quick-links-card"
					>
						<Image
							sources={[
								{
									srcset: ExploreOurCampusesLarge,
									media: "large",
									width: 174,
									height: 200,
								},
								{
									srcset: ExploreOurCampusesSmall,
									media: "medium",
									width: 580,
									height: 190,
								},
								{
									srcset: ExploreOurCampusesSmall,
									media: "small",
									width: 580,
									height: 190,
								}
							]}
							src={ExploreOurCampusesLarge}
							width={174}
							height={200}
							class="quick-links-card-image"
						/>

						<div class="quick-links-card-body">
							<h3 id="explore-our-campuses">
								Explore our campuses
							</h3>

							<p>
								Get hands-on career training in 17 communities across Nova Scotia and online.
							</p>

							<div class="quick-links-card-footer">
								<Button
									href="#"
									color="accent"
									animate-icon
								>
									Find a campus
									<Icon icon="chevron-right" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
