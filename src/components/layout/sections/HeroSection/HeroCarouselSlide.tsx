import { Icon } from "@/components/Icon";
import { Image, type ImageProps } from "@/components/Image"
import "@/scss/components/layout/sections/HeroSection/_HeroCarouselSlide.scss"
import type { ComponentChildren } from "preact"

export interface HeroCarouselSlideProps extends ImageProps {
	/** Title of the slide */
	title: string;
	/** Index of the slide */
	slide_index?: number;
	/** Total number of slides in carousel */
	slide_total?: number;
	/** Body children of the slide */
	children?: ComponentChildren
}

export function HeroCarouselSlide(props: HeroCarouselSlideProps) {
	const { title, slide_index, slide_total, children, ...image_props } = props

	/** Create slide id from index */
	const slide_id = (slide_index?: string | number) => {
		if (slide_index === undefined) {
			return undefined
		}

		return `slide-${slide_index}`
	}

	/** Info of the current slide and the remaining slides */
	const slide_count_info = (index?: string | number, total?: string | number) => {
		if (index === undefined) {
			return undefined
		}

		let message = `Slide ${index}`

		if (total !== undefined) {
			message += ` of ${total}`
		}

		return message
	}

	const title_id = `slide-${props.slide_index}-title`

	return (
		<li
			aria-labelledby={title_id}
			class="carousel-slide"
			id={slide_id(slide_index)}
		>
			<div class="carousel-slide-top">
				<Image {...image_props} />
			</div>
			<div class="carousel-slide-body">
				<h3
					id={title_id}
					class="carousel-slide-title">
					<span class="visually-hidden">
						{`${slide_count_info(props.slide_index, props.slide_total)}: `}
					</span>
					{title}
				</h3>

				<hr />

				{children}

				<noscript>
					<p class="carousel-slide-no-script" aria-hidden="true">

						{(props.slide_index && props.slide_index > 1) &&
							<Icon icon="caret-left-solid" size="lg" />
						}
						{slide_count_info(props.slide_index, props.slide_total)}
						{(props.slide_index && props.slide_total && props.slide_index < props.slide_total) &&
							<Icon icon="caret-right-solid" size="lg" />
						}
					</p>
				</noscript>
			</div>
		</li>
	)
}
