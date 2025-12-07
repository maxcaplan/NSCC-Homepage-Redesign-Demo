import type { ImageProps } from "@/components/Image"
import "@/scss/components/layout/sections/HeroSection/_HeroCarousel.scss"
import type { VNode } from "preact"
import type { HeroCarouselSlideProps } from "./HeroCarouselSlide"
import { HeroCarouselThumbnail } from "./HeroCarouselThumbnail"
import { useNoscriptStyles } from "@/hooks"
import noscript_styles from "@/scss/components/layout/sections/HeroSection/_HeroCarouselNoscript.scss?inline"
import { useEffect, useRef, useState } from "preact/hooks"
import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"

type HeroCarouselChildren = VNode<HeroCarouselSlideProps> | VNode<HeroCarouselSlideProps>[]


interface HeroCarouselProps {
	/** Thumbnail images for carousel slides */
	thumbnails: ImageProps[]
	/** Child slides of carousel */
	children?: HeroCarouselChildren
}

/** Hero carousel component */
export function HeroCarousel(props: HeroCarouselProps) {
	const [active_slide, set_active_slide] = useState<number>(1)

	const viewport_ref = useRef<HTMLUListElement>(null);

	const increment_slide = (value = 1) => {
		let next_slide = active_slide + value
		let slide_count = Array.isArray(props.children) ? props.children.length : 1;

		if (next_slide <= 0) {
			next_slide = slide_count
		}

		if (next_slide > slide_count) {
			next_slide = 1
		}

		scroll_to_slide(next_slide)
	}

	const scroll_to_slide = (slide: number) => {
		if (viewport_ref.current === null) {
			return
		}

		viewport_ref.current.scrollTo(
			(slide - 1) * viewport_ref.current.clientWidth,
			0
		)
	}

	/** Handle viewport scroll event */
	const handle_scroll = (_e: Event) => {
		if (viewport_ref.current === null) {
			return
		}

		set_active_slide(
			Math.round(viewport_ref.current.scrollLeft / viewport_ref.current.clientWidth) + 1
		)
	}

	// Update active slide on scroll
	useEffect(() => {
		if (viewport_ref.current === null) {
			return
		}

		viewport_ref.current.addEventListener("scroll", handle_scroll)

		return () => {
			if (viewport_ref.current === null) {
				return
			}

			viewport_ref.current.removeEventListener("scroll", handle_scroll)
		}
	}, [])

	// Inject no script styles into page head
	useNoscriptStyles(noscript_styles)

	/** Process carousel slide components */
	const slides = (children?: HeroCarouselChildren) => {
		if (children === undefined) {
			return undefined
		}

		// Set carousel slide ids to slide index
		if (Array.isArray(children)) {
			children.forEach((slide, idx, arr) => {
				slide.props.slide_index = idx + 1
				slide.props.slide_total = arr.length
			})
		} else {
			children.props.slide_index = 1
			children.props.slide_total = 1
		}

		return children
	}

	/** Carousel slide thumbnail components */
	const thumbnails = (thumbnails: ImageProps[]) => {
		return thumbnails.map((thumbnail, idx) => {
			return (
				<HeroCarouselThumbnail
					image={thumbnail}
					slide-index={idx + 1}
					active={active_slide === idx + 1}
					onClick={() => scroll_to_slide(idx + 1)}
				/>
			)
		})
	}

	return (
		<div
			aria-labelledby="hero-carousel-title"
			class="hero-carousel"
		>
			<a
				class="carousel-skip-contents"
				href="#find-a-program"
			>
				Skip carousel contents
			</a>

			<h2 id="hero-carousel-title" class="visually-hidden">
				Announcments Carousel
			</h2>

			<div class="carousel-body">
				<ul ref={viewport_ref} class="carousel-viewport">
					{slides(props.children)}
				</ul>
			</div>
			<div class="carousel-footer">
				<Button
					aria-hidden={true}
					tabindex={-1}
					label="Scroll to previous slide"
					color="neutral"
					style="outline"
					onClick={() => increment_slide(-1)}
				>
					<Icon icon="arrow-left" size="md" />
				</Button>

				<div class="carousel-thumbnails">
					{thumbnails(props.thumbnails)}
				</div>

				<Button
					aria-hidden={true}
					tabindex={-1}
					label="Scroll to next slide"
					color="neutral"
					style="outline"
					onClick={() => increment_slide(1)}
				>
					<Icon icon="arrow-right" size="md" />
				</Button>
			</div>
		</div>
	)
}
