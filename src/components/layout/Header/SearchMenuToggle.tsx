import "@/scss/components/layout/Header/_SearchMenuToggle.scss";
import { Icon } from "@/components/Icon";
import type { Context } from "preact";
import type { JSX, PropsWithChildren } from "preact/compat";
import { createMenuToggle, type MenuToggleContextType } from "@/components/navigation/menus/MenuToggle";
import { AppNavMultiMenu, type MenuKeys } from "@/components/navigation/AppNavMultiMenu";


interface SearchMenuToggleType {
	(props: PropsWithChildren): JSX.Element
	/** Menu toggle internal button component */
	Button: () => JSX.Element
	/** Menu wrapper component */
	Menu: (props: PropsWithChildren) => JSX.Element
	/** Menu toggle context */
	context: Context<MenuToggleContextType<MenuKeys>>
}

const MenuToggle = createMenuToggle(AppNavMultiMenu)

/** Search menu toggle wrapper component */
const SearchMenuToggle: SearchMenuToggleType = (props) => {
	return (
		<MenuToggle
			menu="search"
			menu-id="search-menu"
			class="search-menu-toggle"
		>
			{props.children}
		</MenuToggle>
	)
}

/** Search menu toggle button component */
const SearchMenuToggleButton = () => {
	return (
		<MenuToggle.Button
			label="Toggle search menu"
			class="search-menu-toggle-button"
		>
			<Icon icon="magnifying-glass-solid" size="md" class="search-menu-icon" />
		</MenuToggle.Button>
	)
}

/** Hamburger menu wrapper component */
const SearchMenu = (props: PropsWithChildren) => {
	return (
		<MenuToggle.Menu>
			{props.children}
		</MenuToggle.Menu>
	)
}

SearchMenuToggle.Button = SearchMenuToggleButton
SearchMenuToggle.Menu = SearchMenu
SearchMenuToggle.context = MenuToggle.context

export { SearchMenuToggle }
