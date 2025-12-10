import { createContext, type ComponentChildren, type Consumer, type Context, type RefObject } from "preact";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import { append_classes } from "@/util/classes";
import type { JSX } from "preact/jsx-runtime";
import { createMenu, type MenuType } from "../Menu";
import type { MultiMenu } from "../MultiMenu";

export interface MenuToggleContextType<MenuKeyType> {
	/** Name of menu associated with this toggle context */
	menu?: MenuKeyType
	/** Open state associated with this toggle */
	is_open?: boolean
	/** Id of menu element associated with this toggle context */
	menu_id?: string
	/** Reference to element to focus when this menu is opened */
	focus_ref?: RefObject<HTMLElement>
}

interface MenuToggleProps<MenuKeyType> {
	/** Name of the menu associated with this toggle */
	menu: MenuKeyType
	/** Id of the menu this toggle controls */
	"menu-id"?: string
	/** Element id */
	id?: string
	/** Element class */
	class?: string
	/** Component children */
	children?: ComponentChildren
}

interface MenuToggleButtonProps {
	/** Label for button element */
	label?: string
	/** Element id */
	id?: string
	/** Element class */
	class?: string
	/** Component children */
	children?: ComponentChildren
}

export type MenuToggleButtonType = (props: MenuToggleButtonProps) => JSX.Element

export interface MenuToggleType<MenuKeyType> {
	(props: MenuToggleProps<MenuKeyType>): JSX.Element
	/** Menu toggle internal button component */
	Button: MenuToggleButtonType
	/** Menu wrapper component */
	Menu: MenuType
	/** Menu toggle context */
	context: Context<MenuToggleContextType<MenuKeyType>>
	/** Menu toggle context consumer */
	Consumer: Consumer<MenuToggleContextType<MenuKeyType>>
}

/** Create menu toggle components for a multi menu */
export function createMenuToggle<MenuKeyType>(
	/** Multi menu to create menu toggle for */
	multi_menu: MultiMenu<MenuKeyType>,
	/** Hover in time to open the menu toggle */
	hover_open_delay: number = 150,
	/** Hover out time to close the menu toggle */
	hover_close_delay: number = 300,
) {
	const MenuToggleContext = createContext<MenuToggleContextType<MenuKeyType>>({})

	/** Menu toggle wrapper component */
	const MenuToggle: MenuToggleType<MenuKeyType> = (props) => {
		const { open_menu } = useContext(multi_menu.context)

		const [is_open, set_is_open] = useState<boolean | undefined>(open_menu === props.menu)
		const [is_mouse_over, set_is_mouse_over] = useState(false)
		const [is_hovering, set_is_hovering] = useState<boolean>(false)

		const hover_timer_ref = useRef<number | null>(null)
		const focus_ref = useRef<HTMLElement>(null)
		const is_mouse_over_ref = useRef<boolean>()

		const clear_hover_timeout = (hover_timer_ref: RefObject<number | null>) => {
			if (hover_timer_ref.current !== null) {
				clearTimeout(hover_timer_ref.current)
				hover_timer_ref.current = null
			}
		}

		const hover_timer_callback = () => {
			set_is_hovering(is_mouse_over_ref.current === true)
		}

		// Update open state when open menu changes
		useEffect(() => {
			set_is_open(open_menu === props.menu)
		}, [props.menu, open_menu])

		// Update hover timer on mouse over change
		useEffect(() => {
			is_mouse_over_ref.current = is_mouse_over

			clear_hover_timeout(hover_timer_ref)

			if (is_open) {
				set_is_hovering(false)
				return
			}

			hover_timer_ref.current = setTimeout(
				hover_timer_callback,
				is_mouse_over ? hover_open_delay : hover_close_delay
			)
		}, [is_open, is_mouse_over])

		useEffect(() => {
			console.log(is_hovering)
		}, [is_hovering])

		// Clear hover timer on unmount
		useEffect(() => {
			return () => {
				if (hover_timer_ref.current !== null) {
					hover_timer_ref.current = null
				}
			}
		}, [])

		return (
			<li
				id={props.id}
				class={append_classes(
					"menu-toggle",
					is_open ? "menu-toggle-open" : undefined,
					is_hovering && !is_open ? "menu-toggle-hovered" : undefined,
					props.class,
				)}
				onMouseEnter={() => set_is_mouse_over(true)}
				onMouseLeave={() => set_is_mouse_over(false)}
			>
				<MenuToggleContext.Provider
					value={{
						menu: props.menu,
						menu_id: props["menu-id"],
						is_open,
						focus_ref,
					}}
				>
					{props.children}
				</MenuToggleContext.Provider>
			</li >
		)
	}

	/** Menu toggle button component */
	const Button: MenuToggleButtonType = (props: MenuToggleButtonProps) => {
		const { toggle_menu } = useContext(multi_menu.context)
		const { is_open, menu, menu_id } = useContext(MenuToggleContext)

		/** Button click event handler */
		const handle_click = () => {
			if (toggle_menu === undefined || menu === undefined) {
				return
			}

			toggle_menu(menu)
		}

		return (
			<button
				aria-label={props.label}
				aria-haspopup="true"
				aria-controls={menu_id}
				aria-expanded={is_open || false}
				onClick={handle_click}
				class={append_classes(
					"menu-toggle-button",
					props.class
				)}
			>
				{props.children}
			</button>
		)
	}

	MenuToggle.Button = Button
	MenuToggle.Menu = createMenu(multi_menu, MenuToggleContext)
	MenuToggle.Consumer = MenuToggleContext.Consumer
	MenuToggle.context = MenuToggleContext

	return MenuToggle
}
