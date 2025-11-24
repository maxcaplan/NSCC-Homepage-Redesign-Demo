import "@/scss/components/layout/_Header.scss"

import { Logo } from "../../Logo"
import { TopNavLink } from "@/components/navigation/top_navigation/TopNavLink"
import { SearchBox } from "@/components/SearchBox"
import { TopNavMenuToggle } from "@/components/navigation/top_navigation/TopNavMenuToggle"
import { Icon } from "@/components/Icon"

export function Header() {
	return (
		<header class="header">
			<div class="header-top">
				<div class="container">
					<Logo
						label="Scroll to top"
					/>

					<div class="right-align">
						<SearchBox />
					</div>
				</div>
			</div>

			<div class="header-bottom">
				<div class="container">
					<div class="primary-navigation">
						<TopNavLink
							href="#"
							label="Scroll to top"
							active
						>
							Home
						</TopNavLink>

						<TopNavMenuToggle label="Toggle Programs & courses menu">
							Programs &amp; courses
						</TopNavMenuToggle>

						<TopNavMenuToggle label="Toggle Admissions menu">
							Admissions
						</TopNavMenuToggle>

						<TopNavMenuToggle label="Toggle Student experience menu">
							Student experience
						</TopNavMenuToggle>

						<TopNavMenuToggle label="Toggle Campuses menu">
							Campuses
						</TopNavMenuToggle>

						<TopNavMenuToggle label="Toggle About menu">
							About
						</TopNavMenuToggle>
					</div>

					<div class="secondary-navigation">
						<TopNavLink
							href="#"
							label="Donate"
						>
							<Icon icon="gift-solid" size="md" />

							Donate
						</TopNavLink>

						<TopNavLink
							href="#"
							label="Donate"
						>
							Closures
						</TopNavLink>

						<TopNavLink
							href="#"
							label="Donate"
						>
							Libraries
						</TopNavLink>

						<TopNavMenuToggle label="Toggle Login menu">
							<Icon icon="lock-solid" size="md" />

							Login
						</TopNavMenuToggle>
					</div>
				</div>
			</div>
		</header>
	)
}
