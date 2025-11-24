import { append_classes } from "@/util/classes"
import type { IconKeys } from "./icons"
import { icon_map } from "./icons"
import "@/scss/components/_Icon.scss"

export interface IconProps {
	/** Name of the icon to render */
	icon: IconKeys,
	/** Size of the icon */
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "text"
	/** class attribute value for svg element */
	class?: string,
}

/** SVG icon component */
export function Icon(props: IconProps) {
	const IconElement = icon_map[props.icon || 0]
	const size_class = () => {
		switch (props.size) {
			case "xs": return "icon-xs";
			case "sm": return "icon-sm";
			case "md": return "icon-md";
			case "lg": return "icon-lg";
			case "xl": return "icon-xl";
			case "text": return "icon-text";

			default: return undefined;
		}
	}

	return (
		<IconElement
			class={append_classes("icon", size_class(), props.class)}
		/>
	)
}
