import { Icon } from "@/components/Icon";
import type { IconKeys } from "@/components/Icon/icons";
import "@/scss/components/navigation/bottom_navigation/_bottom_nav_menu_toggle.scss"
import { append_classes } from "@/util/classes";
import type { ComponentChildren, MouseEventHandler } from "preact";

export interface BottomNavMenuToggleProps {
	/** Icon to render for the nav link */
	icon: IconKeys;
	/** Icon to render for the nav link when it is active */
	"active-icon"?: IconKeys;
	/** Label for button element */
	label?: string;
	/** Active state of navigation */
	active?: boolean;
	/** Open state of the menu toggle */
	open?: boolean;
	/** onClick event handler for button element */
	onClick?: MouseEventHandler<HTMLButtonElement>
	/** Component children */
	children?: ComponentChildren
}

/** Bottom navigation menu toggle component */
export function BottomNavMenuToggle(props: BottomNavMenuToggleProps) {
	return (
		<button
			role="switch"
			aria-label={props.label}
			aria-checked={props.open || false}
			class={append_classes("bottom-nav-menu-toggle", props.active ? "active" : undefined)}
			onClick={props.onClick}
		>
			<div class="link-body">
				<div class="link-content">
					<Icon
						icon={props.icon}
						size="lg"
					/>
					{props.children}
				</div>

				<Icon icon="caret-down-solid" class="open-icon" />
				<Icon icon="caret-up-solid" class="close-icon" />
			</div>
		</button>
	)
}
