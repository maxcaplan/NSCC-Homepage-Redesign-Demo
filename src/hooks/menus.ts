import { useState } from "preact/hooks"

/** Menu state toggle method type */
export type ToggleMenuCallback<MenuType> = (menu: MenuType) => void
/** Menu state close method type */
export type CloseMenuCallback<MenuType> = (menu?: MenuType) => void

/** Header menu state hook */
export function useMenuState<MenuType>(
	initialState: MenuType | null
): [MenuType | null, ToggleMenuCallback<MenuType>, CloseMenuCallback<MenuType>] {
	const [open_menu, set_open_menu] = useState<MenuType | null>(initialState)

	/** Set the open menu to a provided menu, if menu is already open, close it */
	const toggle_menu: ToggleMenuCallback<MenuType> = (menu) => {
		if (open_menu === menu) {
			set_open_menu(null)
		} else {
			set_open_menu(menu)
		}
	}

	/** Close the open menu */
	const close_menu: CloseMenuCallback<MenuType> = (menu) => {
		if (menu === undefined) {
			set_open_menu(null)
		} else if (menu === open_menu) {
			set_open_menu(null)
		}
	}

	return [open_menu, toggle_menu, close_menu]
}
