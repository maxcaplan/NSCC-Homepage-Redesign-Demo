import { Image, type ImageProps } from "@/components/Image";
import "@/scss/components/layout/sections/HeroSection/_HeroCarouselThumbnail.scss"
import { append_classes } from "@/util/classes";
import type { MouseEventHandler } from "preact";

interface HeroCarouselThumbnailProps {
	"slide-index"?: number
	image: ImageProps
	active?: boolean
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export function HeroCarouselThumbnail(props: HeroCarouselThumbnailProps) {
	return (
		<button
			class={append_classes("hero-carousel-thumbnail", props.active ? "active" : undefined)}
			aria-label={`Scroll to slide ${props["slide-index"]}`}
			onClick={props.onClick}
		>
			<Image {...props.image} />
		</button>
	)
}
