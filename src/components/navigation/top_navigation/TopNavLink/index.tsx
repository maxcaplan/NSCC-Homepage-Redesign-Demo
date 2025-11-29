import "@/scss/components/navigation/top_navigation/_TopNavLink.scss"
import { append_classes } from "@/util/classes";
import type { ComponentChildren } from "preact";

interface TopNavLinkProps {
	/** href attribute value for anchor element */
	href: string;
	/** Label for anchor element */
	label?: string;
	/** Active state of navigation */
	active?: boolean;
	/** id attribute value for anchor element */
	id?: string;
	/** Component children */
	children?: ComponentChildren
}

/** Top navigation link component */
export function TopNavLink(props: TopNavLinkProps) {
	return (
		<a
			href={props.href}
			aria-label={props.label}
			id={props.id}
			class={append_classes("top-nav-link", props.active ? "active" : undefined)}
		>
			{props.children}
		</a>
	)
}
