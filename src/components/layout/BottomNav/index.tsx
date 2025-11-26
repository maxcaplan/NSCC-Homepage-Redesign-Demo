import { BottomNavLink } from '@/components/navigation/bottom_navigation/BottomNavLink'
import { BottomNavMenuToggle } from '@/components/navigation/bottom_navigation/BottomNavMenuToggle'
import '@/scss/components/layout/_BottomNav.scss'
import { useState } from 'preact/hooks'

/** Bottom navigation page layout component */
export function BottomNav() {
	const [login_open, set_login_open] = useState(false)
	return (
		<div class="bottom-nav">
			<div class="container">
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
					label='Toggle login menu'
					active={false}
					open={login_open}
					icon='lock-solid'
					onClick={() => set_login_open(!login_open)}
				>
					Login
				</BottomNavMenuToggle>
			</div>
		</div>
	)
}
