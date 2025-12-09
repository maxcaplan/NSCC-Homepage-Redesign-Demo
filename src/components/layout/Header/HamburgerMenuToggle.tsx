import "@/scss/components/layout/Header/_HamburgerMenuToggle.scss";

import { Icon } from "@/components/Icon";
import { createMenuToggle, type MenuToggleContextType } from "@/components/navigation/menus/MenuToggle";
import type { Context } from "preact";
import type { JSX, PropsWithChildren } from "preact/compat";
import { AppNavMultiMenu, type MenuKeys } from "@/components/navigation/AppNavMultiMenu";

interface HamburgerMenuToggleType {
	(props: PropsWithChildren): JSX.Element
	/** Menu toggle internal button component */
	Button: () => JSX.Element
	/** Menu wrapper component */
	Menu: (props: PropsWithChildren) => JSX.Element
	/** Menu toggle context */
	context: Context<MenuToggleContextType<MenuKeys>>
}

const MenuToggle = createMenuToggle(AppNavMultiMenu)

/** Hamburger menu toggle wrapper component */
const HamburgerMenuToggle: HamburgerMenuToggleType = (props) => {
	return (
		<MenuToggle
			menu="hamburger"
			menu-id="hamburger-menu"
			class="hamburger-menu-toggle"
		>
			{props.children}
		</MenuToggle>
	)
}

/** Hamburger menu toggle button component */
const HamburgerMenuToggleButton = () => {
	return (
		<MenuToggle.Button
			label="Toggle hamburger menu"
			class="hamburger-menu-toggle-button"
		>
			Menu
			<Icon icon="menu-solid" size="lg" class="menu-icon" />
		</MenuToggle.Button>
	)
}

/** Hamburger menu wrapper component */
const HamburgerMenu = (props: PropsWithChildren) => {
	return (
		<MenuToggle.Menu>
			{props.children}
		</MenuToggle.Menu>
	)
}

HamburgerMenuToggle.Button = HamburgerMenuToggleButton
HamburgerMenuToggle.Menu = HamburgerMenu
HamburgerMenuToggle.context = MenuToggle.context

export { HamburgerMenuToggle }
