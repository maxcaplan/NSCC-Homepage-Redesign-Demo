import "@/scss/components/navigation/bottom_navigation/_BottomNavMenuToggle.scss"

import { Icon } from "@/components/Icon";
import type { IconKeys } from "@/components/Icon/icons";
import { append_classes } from "@/util/classes";
import type { ComponentChildren, Consumer, Context } from "preact";
import type { JSX } from "preact/jsx-runtime";
import { createMenuToggle, type MenuToggleContextType } from "../../menus/MenuToggle";
import { AppNavMultiMenu, type MenuKeys } from "../../AppNavMultiMenu";
import type { MenuType } from "../../menus/Menu";

export interface BottomNavMenuToggleProps {
	/** Menu key associated with this toggle */
	menu: MenuKeys
	/** Id of menu associated with this toggle */
	"menu-id": string
	/** Active state for navigation */
	active?: boolean
	/** Component children */
	children?: ComponentChildren
}

export interface BottomNavMenuToggleButtonProps {
	/** Icon to render for the nav link */
	icon: IconKeys
	/** Icon to render for the nav link when it is active */
	"active-icon"?: IconKeys
	/** Element label */
	label?: string
	children?: ComponentChildren
}

interface BottomNavMenuToggleType {
	(props: BottomNavMenuToggleProps): JSX.Element
	Button: (props: BottomNavMenuToggleButtonProps) => JSX.Element
	Menu: MenuType
	context: Context<MenuToggleContextType<MenuKeys>>
	Consumer: Consumer<MenuToggleContextType<MenuKeys>>
}

const MenuToggle = createMenuToggle(AppNavMultiMenu)

const BottomNavMenuToggle: BottomNavMenuToggleType = (props) => {
	return (
		<MenuToggle
			menu={props.menu}
			menu-id={props["menu-id"]}
			disable_hover={true}
			class={append_classes(
				"bottom-nav-menu-toggle",
				props.active ? "active" : undefined
			)}
		>
			{props.children}
		</MenuToggle>
	)
}

const BottomNavMenuToggleButton = (props: BottomNavMenuToggleButtonProps) => {
	return (
		<MenuToggle.Button
			label={props.label}
			class="bottom-nav-menu-toggle-button"
		>
			<div class="link-body">
				<div class="link-content">
					<Icon
						icon={props.icon}
						size="lg"
					/>
					{props.children}
				</div>

				<Icon icon="caret-down-solid" class="open-icon" />
				<Icon icon="caret-up-solid" class="close-icon" />
			</div>
		</MenuToggle.Button>
	)
}

BottomNavMenuToggle.Button = BottomNavMenuToggleButton
BottomNavMenuToggle.Menu = MenuToggle.Menu
BottomNavMenuToggle.context = MenuToggle.context
BottomNavMenuToggle.Consumer = MenuToggle.Consumer

export { BottomNavMenuToggle }
