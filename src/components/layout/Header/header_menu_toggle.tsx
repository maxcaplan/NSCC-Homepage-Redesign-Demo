import { Icon } from "@/components/Icon";
import "@/scss/components/layout/Header/_HeaderMenuToggle.scss";
import type { MouseEventHandler } from "preact";

interface HeaderMenuToggleProps {
	/** Open state of navigation */
	open?: boolean;
	/** onClick event handler for button element */
	onClick?: MouseEventHandler<HTMLButtonElement>
}

/** Header menu toggle */
export function HeaderMenuToggle(props: HeaderMenuToggleProps) {
	return (
		<button
			role="switch"
			aria-checked={props.open || false}
			aria-label="Toggle navigation menu"
			class="header-menu-toggle"
			onClick={props.onClick}
		>
			Menu
			<Icon icon="menu-solid" size="lg" class="menu-icon" />
		</button>
	)
}
