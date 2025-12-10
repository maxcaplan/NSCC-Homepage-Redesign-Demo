import { useMenuState, type CloseMenuCallback, type ToggleMenuCallback } from "@/hooks/menus"
import { createContext, type ComponentChildren, type Consumer, type Context } from "preact"
import type { Dispatch, StateUpdater } from "preact/hooks"
import type { JSX } from "preact/jsx-runtime"

interface MultiMenuInternalContextType<MenuKeyType> {
	/** Menu that is currently open */
	open_menu?: MenuKeyType | null
	/** Open a menu, if already open, close it */
	toggle_menu?: ToggleMenuCallback<MenuKeyType>
	/** Close the open menu */
	close_menu?: CloseMenuCallback<MenuKeyType>
	/** Menu that is currently being hovered */
	hovered_menu?: MenuKeyType | null
	/** Set menu that is currently being hovered */
	set_hovered_menu?: Dispatch<StateUpdater<MenuKeyType | null>>
}

export interface MultiMenuProvider<MenuKeyType> {
	(props: { children?: ComponentChildren }): JSX.Element
	context: Context<MultiMenuInternalContextType<MenuKeyType>>
}

export type MultiMenuConsumer<MenuKeyType> = Consumer<MultiMenuInternalContextType<MenuKeyType>>

export interface MultiMenu<MenuKeyType> extends MultiMenuProvider<MenuKeyType> {
	/** Multiple menu control provider component */
	Provider: MultiMenuProvider<MenuKeyType>
	/** Multiple menu control consumer component */
	Consumer: MultiMenuConsumer<MenuKeyType>
}

/** Create a multiple menu control */
export function createMultiMenu<MenuKeyType>(): MultiMenu<MenuKeyType> {
	/** Header menus state context */
	const MultiMenuContext = createContext<MultiMenuInternalContextType<MenuKeyType>>({})

	const Provider: MultiMenuProvider<MenuKeyType> = (props) => {
		const [
			open_menu,
			toggle_menu,
			close_menu,
			hovered_menu,
			set_hovered_menu,
		] = useMenuState<MenuKeyType | null>()

		return (
			<MultiMenuContext.Provider
				value={{
					open_menu,
					toggle_menu,
					close_menu,
					hovered_menu,
					set_hovered_menu,
				}}
			>
				{props.children}
			</MultiMenuContext.Provider>
		)
	}

	Provider.context = MultiMenuContext

	const multi_menu: MultiMenu<MenuKeyType> = (props) => Provider(props)
	multi_menu.Provider = Provider
	multi_menu.Consumer = MultiMenuContext.Consumer
	multi_menu.context = MultiMenuContext

	return multi_menu
}
