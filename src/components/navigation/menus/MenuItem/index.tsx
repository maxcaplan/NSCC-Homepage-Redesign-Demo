import { Icon } from "@/components/Icon";
import { MenusContext } from "@/components/layout/Header";
import "@/scss/components/navigation/menus/_MenuItem.scss"
import { append_classes } from "@/util/classes";
import type { ComponentChildren, Ref } from "preact";
import { useContext } from "preact/hooks";

interface MenuItemProps {
	/** Menu item link label */
	label?: string
	/** Active state of menu item */
	active?: boolean
	/** Element class */
	class?: string
	/** Refrence for focusable element of menu item */
	focus_ref?: Ref<HTMLElement>
	children?: ComponentChildren
}

/** Menu item link component */
export function MenuItem(props: MenuItemProps) {
	const { close_menu } = useContext(MenusContext)

	/** Menu item link click event handler */
	const handle_click = () => {
		if (close_menu !== undefined) {
			close_menu()
		}
	}

	return (
		<li
			class={append_classes("menu-item", props.class)}
		>
			<a
				aria-label={props.label}
				href="#"
				ref={props.focus_ref as (Ref<HTMLAnchorElement> | undefined)}
				onClick={handle_click}
			>
				{props.children}
				<Icon icon="chevron-right" size="md" />
			</a>
		</li>
	)
}
