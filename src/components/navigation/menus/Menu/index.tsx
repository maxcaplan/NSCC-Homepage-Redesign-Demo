import "@/scss/components/navigation/menus/_Menu.scss"

import { append_classes } from "@/util/classes"
import type { ComponentChildren, Context } from "preact"
import { useContext, useEffect, useRef, useState } from "preact/hooks"
import type { JSX } from "preact/jsx-runtime"
import type { MultiMenu } from "../MultiMenu"
import type { MenuToggleContextType } from "../MenuToggle"

export interface MenuProps {
	/** Element class */
	class?: string
	children?: ComponentChildren
}

export type MenuType = (props: MenuProps) => JSX.Element

/** Create multi menu menu wrapper component */
export function createMenu<MenuKeyType>(
	multi_menu: MultiMenu<MenuKeyType>,
	toggle_context: Context<MenuToggleContextType<MenuKeyType>>
) {
	/** Navigation multi menu menu wrapper component */
	const Menu: MenuType = (props: MenuProps) => {
		const { close_menu } = useContext(multi_menu.context)
		const { is_open, menu, menu_id, focus_ref } = useContext(toggle_context)

		const [outside_click, set_outside_click] = useState(false)
		const [is_focus_in, set_is_focus_in] = useState(false)

		const menu_ref = useRef<HTMLDivElement>(null)

		/** Focus menu focus element */
		const focus_menu = () => {
			if (focus_ref === undefined || focus_ref.current === null) {
				return
			}

			focus_ref.current.focus()
			set_is_focus_in(true)
		}

		const handle_mouse_down = (e: MouseEvent) => {
			e.preventDefault()
		}

		/** Document click event handler */
		const handle_click = (event: PointerEvent) => {
			if (event.target === null || menu_ref.current === null) {
				return
			}

			if (menu_ref.current === event.target) {
				set_outside_click(false)
			} else {
				set_outside_click(!menu_ref.current.contains(event.target as Node))
			}
		}

		/** Document focus event handler */
		const handle_focus = (event: FocusEvent) => {
			if (event.target === null || menu_ref.current === null) {
				return
			}

			set_is_focus_in(menu_ref.current.contains(event.target as Node))
		}

		// Update focus, listeners, and state on menu open state change
		useEffect(() => {
			if (is_open) {
				focus_menu()

				document.addEventListener("mousedown", handle_mouse_down)
				// Add click event handler
				document.addEventListener("click", handle_click)
				// Add focus event handler
				document.addEventListener("focus", handle_focus, true)

			} else {
				document.removeEventListener("mousedown", handle_mouse_down)
				// Remove click event handler
				document.removeEventListener("click", handle_click)
				// Remove focus event handler
				document.removeEventListener("focus", handle_focus, true)

				// Reset outside click state
				set_outside_click(false)
				set_is_focus_in(false)
			}

			return () => {
				document.removeEventListener("mousedown", handle_mouse_down)
				document.removeEventListener("click", handle_click)
				document.removeEventListener("focus", handle_focus, true)
			}

		}, [is_open])

		// Close menu on click outside menu
		useEffect(() => {
			if (is_open && outside_click && close_menu !== undefined) {
				close_menu(menu)
			}
		}, [outside_click])

		// Close menu on focus leave menu
		useEffect(() => {
			if (is_open && !is_focus_in && close_menu !== undefined) {
				close_menu(menu)
			}
		}, [is_focus_in])

		return (
			<div
				id={menu_id}
				class={append_classes(
					"menu",
					is_open ? undefined : "menu-closed",
					props.class
				)}
				ref={menu_ref}
			>
				{props.children}
			</div>
		)
	}

	return Menu
}
