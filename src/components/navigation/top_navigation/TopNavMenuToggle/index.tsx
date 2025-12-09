import "@/scss/components/navigation/top_navigation/_TopNavMenuToggle.scss"
import { Icon } from "@/components/Icon";
import { type ComponentChildren, type Consumer, type Context } from "preact";
import { type MenuType } from "../../menus/Menu";
import { append_classes } from "@/util/classes";
import type { JSX } from "preact/jsx-runtime";
import { createMenuToggle, type MenuToggleContextType } from "../../menus/MenuToggle";
import { AppNavMultiMenu, type MenuKeys } from "../../AppNavMultiMenu";

interface TopNavMenuToggleProps<MenuKeyType> {
	/** Name of the menu associated with this toggle */
	menu: MenuKeyType
	/** Id of the menu this toggle controls */
	"menu-id"?: string
	/** Active state of navigation */
	active?: boolean
	/** Component children */
	children?: ComponentChildren
}

interface TopNavMenuToggleButtonProps {
	/** Label for button element */
	label?: string
	/** Component children */
	children?: ComponentChildren
}

interface TopNavMenuToggleType {
	(props: TopNavMenuToggleProps<MenuKeys>): JSX.Element
	/** Top navigation mega menu toggle button component */
	Button: (props: TopNavMenuToggleButtonProps) => JSX.Element
	/** Top navigation mega menu wrapper component */
	Menu: MenuType
	/** Top navigation toggle context */
	context: Context<MenuToggleContextType<MenuKeys>>
	/** Top navigation toggle context consumer */
	Consumer: Consumer<MenuToggleContextType<MenuKeys>>
}

const MenuToggle = createMenuToggle(AppNavMultiMenu)

/** Top navigation mega menu toggle wrapper component */
const TopNavMenuToggle: TopNavMenuToggleType = (props) => {
	return (
		<MenuToggle
			menu={props.menu}
			menu-id={props["menu-id"]}
			class={append_classes(
				"top-nav-menu-toggle",
				props.active ? "active" : undefined
			)}
		>
			{props.children}
		</MenuToggle>
	)
}

/** Top navigation mega menu toggle button component */
const TopNavMenuToggleButton = (props: TopNavMenuToggleButtonProps) => {
	return (
		<MenuToggle.Button
			label={props.label}
			class="top-nav-menu-toggle-button"
		>
			{props.children}

			<Icon icon="caret-down-solid" size="md" class="open-icon" />
			<Icon icon="caret-up-solid" size="md" class="close-icon" />
		</MenuToggle.Button>
	)
}

// Set TopNavMenuToggle subcomponents
TopNavMenuToggle.Button = TopNavMenuToggleButton
TopNavMenuToggle.Menu = MenuToggle.Menu
TopNavMenuToggle.Consumer = MenuToggle.Consumer
TopNavMenuToggle.context = MenuToggle.context

export { TopNavMenuToggle }

