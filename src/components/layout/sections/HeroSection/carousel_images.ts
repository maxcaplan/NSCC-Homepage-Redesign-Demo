import type { ImageProps } from "@/components/Image";

import slide_1_thumb from "/images/carousel/slide-1/slide-1-thumb.jpg"
import slide_2_thumb from "/images/carousel/slide-2/slide-2-thumb.jpg"
import slide_3_thumb from "/images/carousel/slide-3/slide-3-thumb.jpg"

import slide_1_large from "/images/carousel/slide-1/slide-1-large.jpg"
import slide_1_medium from "/images/carousel/slide-1/slide-1-medium.jpg"
import slide_1_small from "/images/carousel/slide-1/slide-1-small.jpg"

import slide_2_large from "/images/carousel/slide-2/slide-2-large.jpg"
import slide_2_medium from "/images/carousel/slide-2/slide-2-medium.jpg"
import slide_2_small from "/images/carousel/slide-2/slide-2-small.jpg"

import slide_3_large from "/images/carousel/slide-3/slide-3-large.jpg"
import slide_3_medium from "/images/carousel/slide-3/slide-3-medium.jpg"
import slide_3_small from "/images/carousel/slide-3/slide-3-small.jpg"

export const thumbnail_images: ImageProps[] = [
	{
		src: slide_1_thumb,
		width: 947,
		height: 364
	},
	{
		src: slide_2_thumb,
		width: 947,
		height: 364
	},
	{
		src: slide_3_thumb,
		width: 947,
		height: 364
	},
]

export const slide_1_image: ImageProps = {
	sources: [
		{
			srcset: slide_1_large,
			width: 520,
			height: 200,
			media: "large",
		},
		{
			srcset: slide_1_medium,
			width: 1200,
			height: 461,
			media: "medium",
		},
		{
			srcset: slide_1_small,
			width: 464,
			height: 178,
			media: "small",
		},
	],
	src: slide_1_medium,
	width: 1200,
	height: 461,
}

export const slide_2_image: ImageProps = {
	sources: [
		{
			srcset: slide_2_large,
			width: 520,
			height: 200,
			media: "large",
		},
		{
			srcset: slide_2_medium,
			width: 1200,
			height: 461,
			media: "medium",
		},
		{
			srcset: slide_2_small,
			width: 464,
			height: 178,
			media: "small",
		},
	],
	src: slide_2_medium,
	width: 1200,
	height: 461,
}

export const slide_3_image: ImageProps = {
	sources: [
		{
			srcset: slide_3_large,
			width: 520,
			height: 200,
			media: "large",
		},
		{
			srcset: slide_3_medium,
			width: 1200,
			height: 461,
			media: "medium",
		},
		{
			srcset: slide_3_small,
			width: 464,
			height: 178,
			media: "small",
		},
	],
	src: slide_3_medium,
	width: 1200,
	height: 461,
}


export const slide_images: ImageProps[] = [
	slide_1_image,
	slide_2_image,
	slide_3_image
]
