import type { ImgHTMLAttributes } from "preact";

/** Image source with image type */
export interface ImageSourceType {
	/** Image source */
	src: string,
	/** Image type */
	type: string
}

/** Source data for image */
export interface ImageSource {
	/** Src value for image source or multiple image sources */
	srcset: string | ImageSourceType[],
	/** Viewport size for image */
	media?: 'small' | 'medium' | 'large',
	/** Custom media query for image display. Overrides media values */
	custom_media?: string
	/** width attribute value of img tag */
	width?: string | number;
	/** height attribute value of img tag */
	height?: string | number;
}

export interface ImageProps {
	/** src attribute value of img tag */
	src?: string;
	/** Alternate sources for image */
	sources?: ImageSource[]
	/** alt attribute value of img tag. defaults to "" */
	alt?: string;
	/** loading attribute value of img tag */
	loading?: ImgHTMLAttributes['loading']
	/** fetchpriority attribute value of img tag */
	fetchpriority?: ImgHTMLAttributes['fetchpriority'];
	/** id attribute value of img tag */
	id?: string;
	/** class attribute value of img tag */
	class?: string;
	/** width attribute value of img tag */
	width?: string | number;
	/** height attribute value of img tag */
	height?: string | number;
}

/** Responsive image component */
export function Image(props: ImageProps) {
	const source_media_query = (
		media: ImageSource['media'],
		custom_media: ImageSource['custom_media']
	) => {
		if (custom_media !== undefined) {
			return custom_media
		}

		switch (media) {
			case "small":
				return "(max-width: 767px)"
			case "medium":
				return "(min-width: 768px)"
			case "large":
				return "(min-width: 1200px)"
			default:
				return undefined
		}
	}

	/** Create array of source elements for component sources prop */
	const image_sources = (sources: ImageProps['sources']) => {
		if (sources === undefined) {
			return undefined
		}

		return sources.flatMap((source) => {
			const media = source_media_query(source.media, source.custom_media)

			if (typeof source.srcset === "string") {
				return [(
					<source
						srcset={source.srcset}
						media={media}
						width={source.width}
						height={source.height}
					/>
				)]
			}

			return source.srcset.map((image_source) => {
				return (
					<source
						srcset={image_source.src}
						media={media}
						type={image_source.type}
						width={source.width}
						height={source.height}
					/>
				)
			})
		})
	}

	return (
		<picture>
			{image_sources(props.sources)}

			<img
				src={props.src}
				alt={props.alt || ""}
				loading={props.loading}
				fetchpriority={props.fetchpriority}
				id={props.id}
				class={props.class}
				width={props.width}
				height={props.height}
			/>
		</picture>
	)
}
