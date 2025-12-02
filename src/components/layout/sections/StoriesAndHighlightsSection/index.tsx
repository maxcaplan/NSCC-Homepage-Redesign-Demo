import "@/scss/components/layout/sections/StoriesAndHighlightsSection/_index.scss"
import { Story, type StoryProps } from "./Story"

import { story_1_image, story_2_image, story_3_image } from "./story_images"
import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"

/** Data for stories */
const story_data: StoryProps[] = [
	{
		title: "Scaling student wellness at NSCC",
		children: "NSCC students are leading a national shift in student mental health and wellbeing with the Student Wellness Champion initiative – the first of its kind in Canada.",
		id: "story-1",
		"image-sources": story_1_image.sources,
		"image-src": story_1_image.src,
		"image-width": story_1_image.width,
		"image-height": story_1_image.height,
	},
	{
		title: "Day in the Life at NSCC",
		children: "Discover what it's like to be an NSCC student and get a first-person perspective in our video and blog series.",
		id: "story-2",
		"image-sources": story_2_image.sources,
		"image-src": story_2_image.src,
		"image-width": story_2_image.width,
		"image-height": story_2_image.height,
	},
	{
		title: "$5M+ in student awards, scholarships and bursaries",
		children: "We offer student awards, scholarships and bursaries to help cover the cost of your studies. Learn how and when to apply.",
		id: "story-3",
		"image-sources": story_3_image.sources,
		"image-src": story_3_image.src,
		"image-width": story_3_image.width,
		"image-height": story_3_image.height,
	},
]

/** Stories and highlights page section component */
export function StoriesAndHighlightsSection() {
	/** Story components */
	const stories = (story_data: StoryProps[]) => {
		return story_data.map((data) => {
			return (
				<Story {...data} />
			)
		})
	}

	return (
		<section
			id="stories-and-highlights-section"
			class="page-section"
			aria-labelledby="stories-and-highlights"
		>
			<div class="container">
				<div class="page-section-heading">
					<h2 id="stories-and-highlights">
						Stories and Highlights
					</h2>
					<p>
						Enjoy stories about student and alumni success, achievements in applied research, and impactful community initiatives.
					</p>
				</div>

				<div class="stories-container">
					{stories(story_data)}
				</div>

				<div class="more-stories-container">
					<Button
						href="#"
						color="accent"
						animate-icon
					>
						View more stories and highlights
						<Icon icon="chevron-right" size="md" />
					</Button>
				</div>
			</div>
		</section>
	)
}
