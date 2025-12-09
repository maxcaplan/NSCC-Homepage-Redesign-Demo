import "@/scss/components/navigation/menus/_MenuLinkItem.scss"
import { Icon } from "@/components/Icon";
import { append_classes } from "@/util/classes";
import type { ComponentChildren, Ref } from "preact";

export interface MenuLinkItemProps {
	/** Menu item link label */
	label?: string
	/** Secondary menu item styling */
	secondary?: boolean
	/** Sub menu item styling */
	"sub-item"?: boolean
	/** Active state of menu item */
	active?: boolean
	/** Element class */
	class?: string
	/** Refrence for focusable element of menu item */
	focus_ref?: Ref<HTMLElement>
	/** Method to close the current menu */
	close_menu?: () => void;
	children?: ComponentChildren
}

/** Menu link item component */
export function MenuLinkItem(props: MenuLinkItemProps) {

	/** Menu link click event handler */
	const handle_click = () => {
		if (props.close_menu !== undefined) {
			props.close_menu()
		}
	}

	return (
		<li
			class={append_classes(
				"menu-link-item",
				props.secondary !== undefined ? "secondary-menu-link-item" : undefined,
				props["sub-item"] !== undefined ? "sub-menu-link-item" : undefined,
				props.class
			)}
		>
			<a
				aria-label={props.label}
				href="#"
				ref={props.focus_ref as (Ref<HTMLAnchorElement> | undefined)}
				onClick={handle_click}
			>
				{props.children}

				<span class="menu-link-item-icon">
					<Icon icon="chevron-right" size="md" />
				</span>
			</a>
		</li>
	)
}
