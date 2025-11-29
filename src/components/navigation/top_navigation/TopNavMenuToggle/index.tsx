import { Icon } from "@/components/Icon";
import "@/scss/components/navigation/top_navigation/_TopNavMenuToggle.scss"
import { append_classes } from "@/util/classes";
import type { ComponentChildren, MouseEventHandler } from "preact";

interface TopNavMenuToggleProps {
	/** Label for button element */
	label?: string;
	/** Open state of navigation */
	open?: boolean;
	/** Id of the menu this toggle controls */
	controls?: string;
	/** Active state of navigation */
	active?: boolean;
	/** onClick event handler for button element */
	onClick?: MouseEventHandler<HTMLButtonElement>
	/** Component children */
	children?: ComponentChildren
}

/** Top navigation mega menu toggle component */
export function TopNavMenuToggle(props: TopNavMenuToggleProps) {
	return (
		<button
			aria-label={props.label}
			aria-haspopup="true"
			aria-controls={props.controls}
			aria-expanded={props.open || false}
			class={append_classes("top-nav-mega-menu-toggle", props.active ? "active" : undefined)}
			onClick={props.onClick}
		>
			{props.children}

			<Icon icon="caret-down-solid" size="md" class="open-icon" />
			<Icon icon="caret-up-solid" size="md" class="close-icon" />
		</button>
	)
}
