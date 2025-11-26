import "@/scss/components/layout/Header/_SearchMenuToggle.scss";
import { Icon } from "@/components/Icon";
import type { MouseEventHandler } from "preact";

interface SearchMenuButtonProps {
	/** Open state of navigation */
	open?: boolean;
	/** onClick event handler for button element */
	onClick?: MouseEventHandler<HTMLButtonElement>
}

/** Header search menu toggle component */
export function SearchMenuToggle(props: SearchMenuButtonProps) {
	return (
		<button
			role="switch"
			aria-checked={props.open || false}
			aria-label="Toggle search box menu"
			class="search-menu-toggle"
			onClick={props.onClick}
		>
			<Icon icon="magnifying-glass-solid" size="md" class="search-menu-icon" />
		</button>
	)
}
