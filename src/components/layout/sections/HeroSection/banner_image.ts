import type { ImageProps } from "@/components/Image"

export const banner_image: ImageProps = {
	sources: [
		{
			srcset: "/images/banner/banner-large.jpg",
			media: "large",
			width: 947,
			height: 364,
		},
		{
			srcset: "/images/banner/banner-medium.jpg",
			media: "medium",
			width: 1275,
			height: 490,
		},
		{
			srcset: "/images/banner/banner-small.jpg",
			media: "small",
			width: 490,
			height: 490
		}
	],
	src: "/images/banner/banner-medium.jpg",
	width: 1275,
	height: 490
}
