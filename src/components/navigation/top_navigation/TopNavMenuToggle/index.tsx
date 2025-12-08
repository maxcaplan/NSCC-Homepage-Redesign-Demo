import { Icon } from "@/components/Icon";
import "@/scss/components/navigation/top_navigation/_TopNavMenuToggle.scss"
import { child_is_vnode } from "@/util/children";
import { type ComponentChildren } from "preact";
import { Menu } from "../../menus/Menu";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import { MenusContext, type MenuName } from "@/components/layout/Header";
import { MenuToggleContext } from "../../menus/MenuToggleContext";

interface TopNavMenuToggleProps {
	/** Label for button element */
	label?: string
	/** Name of the menu associated with this toggle */
	menu: MenuName
	/** Id of the menu this toggle controls */
	"menu-id"?: string
	/** Active state of navigation */
	active?: boolean
	/** Component children */
	children?: ComponentChildren
}

const filter_children = (
	children?: ComponentChildren
): {
	children?: ComponentChildren,
	menu_children?: ComponentChildren
} => {
	if (children === undefined) {
		return {}
	}

	if (Array.isArray(children)) {
		const non_menu_children = children
			.filter((child) => !(child_is_vnode(child) && child.type === Menu))
		const menu_children = children
			.filter((child) => child_is_vnode(child) && child.type === Menu)

		return {
			children: non_menu_children,
			menu_children
		}

	} else {
		if (child_is_vnode(children) && children.type === Menu) {
			return {
				menu_children: children
			}
		}

		return { children }
	}
}

/** Top navigation mega menu toggle component */
export function TopNavMenuToggle(props: TopNavMenuToggleProps) {
	const { open_menu, toggle_menu } = useContext(MenusContext)
	const [is_open, set_is_open] = useState<boolean | undefined>(open_menu === props.menu)

	const focus_ref = useRef<HTMLElement>(null)

	const { children, menu_children } = filter_children(props.children)

	const handle_click = () => {
		if (toggle_menu === undefined) {
			return
		}

		toggle_menu(props.menu)
	}

	// Update open state when open menu changes
	useEffect(() => {
		set_is_open(open_menu === props.menu)
	}, [props.menu, open_menu])

	return (
		<li class="top-nav-menu-toggle">
			<MenuToggleContext.Provider
				value={{
					menu: props.menu,
					menu_id: props["menu-id"],
					is_open,
					focus_ref,
				}}
			>
				<button
					aria-label={props.label}
					aria-haspopup="true"
					aria-controls={props["menu-id"]}
					aria-expanded={props.menu === open_menu || false}
					class={props.active ? "active" : undefined}
					onClick={handle_click}
				>
					{children}

					<Icon icon="caret-down-solid" size="md" class="open-icon" />
					<Icon icon="caret-up-solid" size="md" class="close-icon" />
				</button>

				{menu_children}
			</MenuToggleContext.Provider>
		</li >
	)
}
