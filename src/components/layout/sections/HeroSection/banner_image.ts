import type { ImageProps } from "@/components/Image"

import banner_large from "/images/banner/banner-large.jpg"
import banner_medium from "/images/banner/banner-medium.jpg"
import banner_small from "/images/banner/banner-small.jpg"

export const banner_image: ImageProps = {
	sources: [
		{
			srcset: banner_large,
			media: "large",
			width: 947,
			height: 364,
		},
		{
			srcset: banner_medium,
			media: "medium",
			width: 1275,
			height: 490,
		},
		{
			srcset: banner_small,
			media: "small",
			width: 490,
			height: 490
		}
	],
	src: banner_small,
	width: 1275,
	height: 490
}
