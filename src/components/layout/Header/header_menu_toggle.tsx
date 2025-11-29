import { Icon } from "@/components/Icon";
import "@/scss/components/layout/Header/_HeaderMenuToggle.scss";
import type { MouseEventHandler } from "preact";

interface HeaderMenuToggleProps {
	/** Open state of navigation */
	open?: boolean;
	/** Id of the menu this toggle controls */
	controls?: string;
	/** onClick event handler for button element */
	onClick?: MouseEventHandler<HTMLButtonElement>
}

/** Header menu toggle */
export function HeaderMenuToggle(props: HeaderMenuToggleProps) {
	return (
		<button
			aria-label="Toggle navigation menu"
			aria-haspopup="true"
			aria-controls={props.controls}
			aria-expanded={props.open || false}
			class="header-menu-toggle"
			onClick={props.onClick}
		>
			Menu
			<Icon icon="menu-solid" size="lg" class="menu-icon" />
		</button>
	)
}
