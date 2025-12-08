import { createContext, type RefObject } from "preact"

export interface MenuToggleContextType {
	/** Name of menu associated with this toggle context */
	menu?: string
	/** Open state associated with this toggle */
	is_open?: boolean
	/** Id of menu element associated with this toggle context */
	menu_id?: string
	/** Reference to element to focus when this menu is opened */
	focus_ref?: RefObject<HTMLElement>
}

export const MenuToggleContext = createContext<MenuToggleContextType>({})
