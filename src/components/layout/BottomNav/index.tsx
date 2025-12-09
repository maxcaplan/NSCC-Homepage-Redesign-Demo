import { AppNavMultiMenu } from '@/components/navigation/AppNavMultiMenu'
import { BottomNavLink } from '@/components/navigation/bottom_navigation/BottomNavLink'
import { BottomNavMenuToggle } from '@/components/navigation/bottom_navigation/BottomNavMenuToggle'
import { LoginMenu } from '@/components/navigation/menus/LoginMenu'
import '@/scss/components/layout/_BottomNav.scss'
import { useContext } from 'preact/hooks'

/** Bottom navigation page layout component */
export function BottomNav() {
	const { close_menu } = useContext(AppNavMultiMenu.context)

	return (
		<div class="bottom-nav">
			<nav
				aria-label="Utility Navigation"
				id="bottom-utility-navigation"
				class="container"
			>
				<ul class="bottom-nav-links">
					<BottomNavLink
						href='#'
						active={false}
						icon='gift-solid'
					>
						Donate
					</BottomNavLink>

					<BottomNavLink
						href='#'
						active={false}
						icon='calendar-x-solid'
					>
						Closures
					</BottomNavLink>

					<BottomNavLink
						href='#'
						active={false}
						icon='book-open-solid'
					>
						Libraries
					</BottomNavLink>

					<BottomNavMenuToggle
						menu='bottom-login'
						menu-id='bottom-login-menu'
						active={false}
					>
						<BottomNavMenuToggle.Button
							label='Toggle login menu'
							icon='lock-solid'
						>
							Login
						</BottomNavMenuToggle.Button>

						<BottomNavMenuToggle.Menu
							class="bottom-login-menu"
						>
							<BottomNavMenuToggle.Consumer>
								{({ focus_ref }) => (
									<LoginMenu
										close_menu={close_menu}
										focus_ref={focus_ref}
									/>
								)}
							</BottomNavMenuToggle.Consumer>
						</BottomNavMenuToggle.Menu>
					</BottomNavMenuToggle>
				</ul>
			</nav>
		</div>
	)
}
