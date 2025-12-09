import "@/scss/components/navigation/menus/_LoginMenu.scss"
import { MenuLinkItem, type MenuLinkItemProps } from "../MenuLinkItem"
import { Icon } from "@/components/Icon"
import type { Ref } from "preact"
import { append_classes } from "@/util/classes"

interface LoginMenuProps {
	class?: string
	close_menu?: () => void
	focus_ref?: Ref<HTMLElement>
}

/** Top navigation login popup menu component */
export function LoginMenu(props: LoginMenuProps) {
	const menu_link_items: MenuLinkItemProps[] = [
		{
			label: "NSCC student and employee intranet",
			class: "connect-menu-item",
			focus_ref: props.focus_ref,
			children: (
				<span class="connect-menu-item-body">
					<span class="connect-menu-item-heading">
						Connect
					</span>
					<span class="connect-menu-item-subheading">
						NSCC's student and employee intranet. Find services, supports and campus-related info.
					</span>
				</span>
			)
		},
		{
			secondary: true,
			children: (
				<>
					<Icon
						icon="envelope-solid"
						size="md"
						class="login-menu-icon"
					/>

					Webmail
				</>
			)
		},
		{
			secondary: true,
			children: (
				<>
					<Icon
						icon="d2l-solid"
						size="md"
						class="login-menu-icon"
					/>

					Brightspace
				</>
			)
		},
		{
			secondary: true,
			children: (
				<>
					<Icon
						icon="microsoft"
						size="md"
						class="login-menu-icon"
					/>

					Microsoft 365
				</>
			)
		},

		{
			secondary: true,
			children: (
				<>
					<Icon
						icon="user-solid"
						size="md"
						class="login-menu-icon"
					/>

					MyNSCC
				</>
			)
		},
		{
			secondary: true,
			children: (
				<>
					<Icon
						icon="lock-solid"
						size="md"
						class="login-menu-icon"
					/>

					Password Management
				</>
			)
		},
		{
			secondary: true,
			children: (
				<>
					<Icon
						icon="question-solid"
						size="md"
						class="login-menu-icon"
					/>

					Service Desk
				</>
			)
		},
	]

	return (
		<ul
			class={append_classes(
				"login-menu",
				props.class
			)}
		>
			{menu_link_items.map((item) => <MenuLinkItem {...item} close_menu={props.close_menu} />)}
		</ul>
	)
}
