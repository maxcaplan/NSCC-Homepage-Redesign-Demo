import { Icon } from "@/components/Icon";
import type { IconKeys } from "@/components/Icon/icons";
import "@/scss/components/navigation/bottom_navigation/_bottom_nav_link.scss"
import { append_classes } from "@/util/classes";
import type { ComponentChildren } from "preact";

export interface BottomNavLinkProps {
	/** href attribute value for anchor element */
	href: string;
	/** Icon to render for the nav link */
	icon: IconKeys;
	/** Icon to render for the nav link when it is active */
	"active-icon"?: IconKeys;
	/** Label for anchor element */
	label?: string;
	/** Active state of navigation */
	active?: boolean;
	/** Component children */
	children?: ComponentChildren
}

/** Bottom navigation link component */
export function BottomNavLink(props: BottomNavLinkProps) {
	return (
		<a
			href={props.href}
			aria-label={props.label}
			class={append_classes("bottom-nav-link", props.active ? "active" : undefined)}
		>
			<div class="link-body">
				<Icon
					icon={props.icon}
					size="lg"
				/>
				{props.children}
			</div>
		</a>
	)
}
