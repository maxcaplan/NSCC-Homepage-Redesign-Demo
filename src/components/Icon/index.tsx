import type { IconKeys } from "./icons"
import { icon_map } from "./icons"

export interface IconProps {
	/** Name of the icon to render */
	icon: IconKeys
}

/** SVG icon component */
export function Icon(props: IconProps) {
	const IconElement = icon_map[props.icon || 0]
	return <IconElement />
}
