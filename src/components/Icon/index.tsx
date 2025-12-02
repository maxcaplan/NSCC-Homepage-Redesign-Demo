import { append_classes } from "@/util/classes"
import type { IconKeys } from "./icons"
import { icon_map } from "./icons"
import "@/scss/components/_Icon.scss"

export type IconSize = "xs" |
	"sm" |
	"md" |
	"lg" |
	"xl" |
	"label" |
	"heading" |
	"title-3" |
	"title-2" |
	"title-1" |
	"display-2" |
	"display-1"

export interface IconProps {
	/** Name of the icon to render */
	icon: IconKeys
	/** Size of the icon */
	size?: IconSize
	/** class attribute value for svg element */
	class?: string
}

/** SVG icon component */
export function Icon(props: IconProps) {
	const IconElement = icon_map[props.icon || 0]
	const size_class = () => {
		switch (props.size) {
			case "xs": return "icon-xs"
			case "sm": return "icon-sm"
			case "md": return "icon-md"
			case "lg": return "icon-lg"
			case "xl": return "icon-xl"
			case "label": return "icon-label"
			case "heading": return "icon-heading"
			case "title-3": return "icon-title-3"
			case "title-2": return "icon-title-2"
			case "title-1": return "icon-title-1"
			case "display-2": return "icon-display-2"
			case "display-1": return "icon-display-1"

			default: return undefined
		}
	}

	return (
		<IconElement
			class={append_classes("icon", size_class(), props.class)}
		/>
	)
}
