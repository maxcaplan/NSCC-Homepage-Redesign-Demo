import { createContext, type ComponentChildren, type Consumer, type Context, type RefObject } from "preact";
import { useContext } from "preact/hooks";
import { append_classes } from "@/util/classes";
import type { JSX } from "preact/jsx-runtime";
import { createMenu, type MenuType } from "../Menu";
import type { MultiMenu } from "../MultiMenu";
import { useMenuToggleState } from "@/hooks/menus";

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
	/** Disable hover behaviour for this toggle */
	disable_hover?: boolean
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

export interface CreateMenuToggleOptions {
	disable_hover: boolean,
	/** Hover in time to open the menu toggle */
	hover_open_delay: number,
	/** Hover out time to close the menu toggle */
	hover_close_delay: number,
}

/** Create menu toggle components for a multi menu */
export function createMenuToggle<MenuKeyType>(
	/** Multi menu to create menu toggle for */
	multi_menu: MultiMenu<MenuKeyType>,
	/** Menu toggle options */
	options: CreateMenuToggleOptions = {
		disable_hover: false,
		/** Hover in time to open the menu toggle */
		hover_open_delay: 150,
		/** Hover out time to close the menu toggle */
		hover_close_delay: 300,
	}
) {
	const MenuToggleContext = createContext<MenuToggleContextType<MenuKeyType>>({})

	/** Menu toggle wrapper component */
	const MenuToggle: MenuToggleType<MenuKeyType> = (props) => {
		const [
			is_open,
			is_hovered,
			focus_ref,
			handle_mouse_enter,
			handle_mouse_exit
		] = useMenuToggleState(
			multi_menu,
			props.menu,
			{
				hover_open_delay: options.hover_open_delay,
				hover_close_delay: options.hover_close_delay,
				disable_hover: options.disable_hover || props.disable_hover || false
			}
		)

		return (
			<li
				id={props.id}
				class={append_classes(
					"menu-toggle",
					is_open ? "menu-toggle-open" : undefined,
					is_hovered && !is_open ? "menu-toggle-hovered" : undefined,
					props.class,
				)}
				onMouseEnter={handle_mouse_enter}
				onMouseLeave={handle_mouse_exit}
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
