import { Icon } from "@/components/Icon"
import { Image, type ImageProps } from "@/components/Image"
import "@/scss/components/layout/sections/StoriesAndHighlightsSection/_Story.scss"
import { append_classes } from "@/util/classes"
import type { ComponentChildren } from "preact"

export interface StoryProps {
	/** Story title */
	title: string
	/** Story image sources */
	["image-sources"]?: ImageProps["sources"]
	/** Story image src */
	["image-src"]?: ImageProps["src"]
	/** Story image width */
	["image-width"]?: ImageProps["width"]
	/** Story image height */
	["image-height"]?: ImageProps["height"]
	/** Story id */
	id?: string
	/** Story class */
	class?: string
	/** Story component children */
	children?: ComponentChildren
}

/** Stories and highlights page section story component */
export function Story(props: StoryProps) {
	const title_id = props.id ? `${props.id}-title` : undefined

	return (
		<article
			id={props.id}
			aria-labelledby={title_id}
			class={append_classes("story", props.class)}
		>
			<Image
				sources={props["image-sources"]}
				src={props["image-src"]}
				width={props["image-width"]}
				height={props["image-height"]}
				loading="lazy"
				class="story-image"
			/>

			<div class="story-container">
				<a href="#" class="story-header">
					<h3
						id={title_id}
					>
						{props.title}
					</h3>

					<Icon icon="chevron-right" size="lg" />
				</a>

				<div class="story-body">
					{props.children}
				</div>

				<a
					href="#"
					class="story-read-more"
				>
					Read more...
				</a>
			</div>
		</article>
	)
}
