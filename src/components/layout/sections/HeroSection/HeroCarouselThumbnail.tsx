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

/** Hero carousel slide thumbnail navigation button */
export function HeroCarouselThumbnail(props: HeroCarouselThumbnailProps) {
	return (
		<button
			aria-hidden={true}
			tabindex={-1}
			aria-label={`Scroll to slide ${props["slide-index"]}`}
			class={append_classes("hero-carousel-thumbnail", props.active ? "active" : undefined)}
			onClick={props.onClick}
		>
			<Image {...props.image} />
		</button>
	)
}
