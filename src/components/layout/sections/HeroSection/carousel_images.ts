import type { ImageProps } from "@/components/Image";

export const thumbnail_images: ImageProps[] = [
	{
		src: "/images/carousel/slide-1/slide-1-thumb.jpg",
		width: 947,
		height: 364
	},
	{
		src: "/images/carousel/slide-2/slide-2-thumb.jpg",
		width: 947,
		height: 364
	},
	{
		src: "/images/carousel/slide-3/slide-3-thumb.jpg",
		width: 947,
		height: 364
	},
]

export const slide_1_image: ImageProps = {
	sources: [
		{
			srcset: "/images/carousel/slide-1/slide-1-large.jpg",
			width: 520,
			height: 200,
			media: "large",
		},
		{
			srcset: "/images/carousel/slide-1/slide-1-medium.jpg",
			width: 1200,
			height: 461,
			media: "medium",
		},
		{
			srcset: "/images/carousel/slide-1/slide-1-small.jpg",
			width: 464,
			height: 178,
			media: "small",
		},
	],
	src: "/images/carousel/slide-1/slide-1-medium.jpg",
	width: 1200,
	height: 461,
}

export const slide_2_image: ImageProps = {
	sources: [
		{
			srcset: "/images/carousel/slide-2/slide-2-large.jpg",
			width: 520,
			height: 200,
			media: "large",
		},
		{
			srcset: "/images/carousel/slide-2/slide-2-medium.jpg",
			width: 1200,
			height: 461,
			media: "medium",
		},
		{
			srcset: "/images/carousel/slide-2/slide-2-small.jpg",
			width: 464,
			height: 178,
			media: "small",
		},
	],
	src: "/images/carousel/slide-2/slide-2-medium.jpg",
	width: 1200,
	height: 461,
}

export const slide_3_image: ImageProps = {
	sources: [
		{
			srcset: "/images/carousel/slide-3/slide-3-large.jpg",
			width: 520,
			height: 200,
			media: "large",
		},
		{
			srcset: "/images/carousel/slide-3/slide-3-medium.jpg",
			width: 1200,
			height: 461,
			media: "medium",
		},
		{
			srcset: "/images/carousel/slide-3/slide-3-small.jpg",
			width: 464,
			height: 178,
			media: "small",
		},
	],
	src: "/images/carousel/slide-3/slide-3-medium.jpg",
	width: 1200,
	height: 461,
}

export const slide_images: ImageProps[] = [
	slide_1_image,
	slide_2_image,
	slide_3_image
]
