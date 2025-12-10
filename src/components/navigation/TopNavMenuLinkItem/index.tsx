import { useContext } from "preact/hooks";
import { AppNavMultiMenu } from "../AppNavMultiMenu";
import { MenuLinkItem, type MenuLinkItemProps } from "../menus/MenuLinkItem";

/** Menu link item with top menu close method */
export function TopMenuLinkItem(
	props: Omit<MenuLinkItemProps, "close_menu">
) {
	const { close_menu } = useContext(AppNavMultiMenu.context)

	return (
		<MenuLinkItem
			{...props}
			close_menu={close_menu}
		>
			{props.children}
		</MenuLinkItem>
	)
}
