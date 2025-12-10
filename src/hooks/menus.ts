import type { MultiMenu } from "@/components/navigation/menus/MultiMenu"
import type { RefObject } from "preact"
import { useContext, useEffect, useRef, useState, type Dispatch, type StateUpdater } from "preact/hooks"

/** Menu state toggle method type */
export type ToggleMenuCallback<MenuKeyType> = (menu: MenuKeyType) => void
/** Menu state close method type */
export type CloseMenuCallback<MenuKeyType> = (menu?: MenuKeyType) => void

export type MenuState<MenuKeyType> = [
	MenuKeyType | null,
	ToggleMenuCallback<MenuKeyType>,
	CloseMenuCallback<MenuKeyType>,
	MenuKeyType | null,
	Dispatch<StateUpdater<MenuKeyType | null>>
]

/** Header menu state hook */
export function useMenuState<MenuKeyType>(): MenuState<MenuKeyType> {

	const [open_menu, set_open_menu] = useState<MenuKeyType | null>(null)
	const [hovered_menu, set_hovered_menu] = useState<MenuKeyType | null>(null)

	/** Set the open menu to a provided menu, if menu is already open, close it */
	const toggle_menu: ToggleMenuCallback<MenuKeyType> = (menu) => {
		if (open_menu === menu) {
			set_open_menu(null)
		} else {
			set_open_menu(menu)
		}
	}

	/** Close the open menu */
	const close_menu: CloseMenuCallback<MenuKeyType> = (menu) => {
		if (menu === undefined) {
			set_open_menu(null)
		} else if (menu === open_menu) {
			set_open_menu(null)
		}
	}

	return [
		open_menu,
		toggle_menu,
		close_menu,
		hovered_menu,
		set_hovered_menu,
	]
}

export interface UseMenuToggleStateOptions {
	disable_hover: boolean
	/** Milliseconds to hover toggle before opening the menu */
	hover_open_delay: number
	/** Milliseconds after not hovering toggle before closing the menu */
	hover_close_delay: number
}

/** Menu toggle wrapper element state */
export type MenuToggleState = [
	/** Menu is open state */
	boolean,
	/** Menu is hovered state */
	boolean,
	/** Menu focus element reference */
	RefObject<HTMLElement>,
	/** MenuToggle mouse enter event handler */
	() => void,
	/** MenuToggle mouse exit event handler */
	() => void,
]

/** Menu toggle wrapper element state hook */
export function useMenuToggleState<MenuKeyType>(
	multi_menu: MultiMenu<MenuKeyType>,
	menu: MenuKeyType,
	{
		hover_open_delay = 150,
		hover_close_delay = 150,
		disable_hover = false
	}: UseMenuToggleStateOptions,
): MenuToggleState {

	const { open_menu, hovered_menu, set_hovered_menu } = useContext(multi_menu.context)

	const [is_open, set_is_open] = useState<boolean>(open_menu === menu)
	const [is_mouse_over, set_is_mouse_over] = useState<boolean>(false)
	const [is_hovered, set_is_hovered] = useState<boolean>(false)

	const hover_timer_ref = useRef<number | null>(null)
	const focus_ref = useRef<HTMLElement>(null)
	const is_mouse_over_ref = useRef<boolean>()

	const handle_mouse_enter = () => set_is_mouse_over(true)
	const handle_mouse_exit = () => set_is_mouse_over(false)

	const clear_hover_timeout = (hover_timer_ref: RefObject<number | null>) => {
		if (hover_timer_ref.current !== null) {
			clearTimeout(hover_timer_ref.current)
			hover_timer_ref.current = null
		}
	}

	const hover_timer_callback = () => {
		set_is_hovered(is_mouse_over_ref.current === true)
	}

	// Update open state when open menu changes
	useEffect(() => {
		set_is_open(open_menu === menu)
	}, [menu, open_menu])

	// Update hover timer on mouse over change
	useEffect(() => {
		if (disable_hover) {
			return
		}

		is_mouse_over_ref.current = is_mouse_over

		// If a menu is open, do not start hover timer
		if (open_menu !== null && open_menu !== undefined) {
			clear_hover_timeout(hover_timer_ref)
			set_is_hovered(false)
			return
		}

		// Start hover timer
		hover_timer_ref.current = setTimeout(
			hover_timer_callback,
			is_mouse_over ? hover_open_delay : hover_close_delay
		)
	}, [open_menu, is_mouse_over, hovered_menu])

	// Update multi menu context hovered state on hovered state changed
	useEffect(() => {
		if (set_hovered_menu === undefined) {
			return
		}

		if (is_hovered) {
			set_hovered_menu(menu)
		} else if (hovered_menu === menu) {
			set_hovered_menu(null)
		}
	}, [is_hovered])

	useEffect(() => {
		if (hovered_menu !== menu) {
			set_is_hovered(false)
		}
	}, [hovered_menu])

	// Clear hover timer on unmount
	useEffect(() => {
		return () => {
			if (hover_timer_ref.current !== null) {
				hover_timer_ref.current = null
			}
		}
	}, [])

	return [
		is_open,
		is_hovered,
		focus_ref,
		handle_mouse_enter,
		handle_mouse_exit,
	]
}
