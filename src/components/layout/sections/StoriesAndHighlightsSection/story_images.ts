import type { ImageProps } from "@/components/Image";

import Story1Large from "/images/stories/story-1/story-1-large.jpg"
import Story2Large from "/images/stories/story-2/story-2-large.jpg"
import Story3Large from "/images/stories/story-3/story-3-large.jpg"

interface StoryImage {
	sources?: ImageProps["sources"]
	src?: ImageProps["src"]
	width?: ImageProps["width"]
	height?: ImageProps["height"]
}

export const story_1_image: StoryImage = {
	src: Story1Large,
	width: 460,
	height: 236,
}

export const story_2_image: StoryImage = {
	src: Story2Large,
	width: 460,
	height: 236,
}

export const story_3_image: StoryImage = {
	src: Story3Large,
	width: 460,
	height: 236,
}

export const story_images: StoryImage[] = [
	story_1_image,
	story_2_image,
	story_3_image
]
