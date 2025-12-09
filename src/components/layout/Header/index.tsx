import "@/scss/components/layout/Header/_index.scss";

import { Logo } from "../../Logo"
import { TopNavLink } from "@/components/navigation/top_navigation/TopNavLink"
import { SearchBox } from "@/components/SearchBox"
import { TopNavMenuToggle } from "@/components/navigation/top_navigation/TopNavMenuToggle"
import { Icon } from "@/components/Icon"
import { SearchMenuToggle } from "./SearchMenuToggle"
import { HamburgerMenuToggle } from "./HamburgerMenuToggle";
import { LoginMenu } from "@/components/navigation/menus/LoginMenu";
import { useContext } from "preact/hooks";
import { AppNavMultiMenu } from "@/components/navigation/AppNavMultiMenu";

interface HeaderProps {
	/** Whether the header is sticking to the top of the window while scrolling */
	sticking?: boolean
}

/** Page layout header component */
export function Header(props: HeaderProps) {
	const { close_menu } = useContext(AppNavMultiMenu.context)

	return (
		<header id="header" class={props.sticking ? "header-sticking" : ""}>
			<div class="header-wrapper">
				<div class="header-top">
					<div class="container">
						<a class="header-skip-to" href="#hero-section">
							Skip to main content
						</a>
						<a class="header-skip-to" href="#main-navigation">
							Skip to main site navigation
						</a>
						<a class="header-skip-to" href="#utility-navigation">
							Skip to site utility navigation
						</a>
						<a class="header-skip-to" href="#page-footer">
							Skip to site footer
						</a>

						<Logo
							label="Scroll to top"
						/>

						<div class="right-align">
							<SearchBox />

							<SearchMenuToggle>
								<SearchMenuToggle.Button />
							</SearchMenuToggle>

							<HamburgerMenuToggle>
								<HamburgerMenuToggle.Button />
							</HamburgerMenuToggle>
						</div>
					</div>
				</div>

				<div class="header-bottom">
					<div class="container">
						<nav
							id="main-navigation"
							class="main-navigation"
							aria-label="Main Navigation"
						>
							<ul
								class="main-navigation-links"
							>
								<TopNavLink
									href="#"
									label="Scroll to top"
									active
								>
									Home
								</TopNavLink>

								<TopNavMenuToggle
									menu="programs"
									active={false}
								>
									<TopNavMenuToggle.Button
										label="Toggle Programs & courses menu"
									>
										Programs &amp; courses
									</TopNavMenuToggle.Button>
								</TopNavMenuToggle>

								<TopNavMenuToggle
									menu="admissions"
									active={false}
								>
									<TopNavMenuToggle.Button
										label="Toggle Admissions menu"
									>
										Admissions
									</TopNavMenuToggle.Button>
								</TopNavMenuToggle>

								<TopNavMenuToggle
									menu="student"
									active={false}
								>
									<TopNavMenuToggle.Button
										label="Toggle Student experience menu"
									>
										Student experience
									</TopNavMenuToggle.Button>
								</TopNavMenuToggle>

								<TopNavMenuToggle
									menu="campuses"
									active={false}
								>
									<TopNavMenuToggle.Button
										label="Toggle Campuses menu"
									>
										Campuses
									</TopNavMenuToggle.Button>
								</TopNavMenuToggle>

								<TopNavMenuToggle
									menu="about"
									active={false}
								>
									<TopNavMenuToggle.Button
										label="Toggle About menu"
									>
										About
									</TopNavMenuToggle.Button>
								</TopNavMenuToggle>
							</ul>
						</nav>

						<nav
							aria-label="Utility Navigation"
							id="utility-navigation"
							class="utility-navigation"
						>
							<ul
								class="utility-navigation-links"
							>

								<TopNavLink
									href="#"
									label="Donate"
									active={false}
								>
									<Icon icon="gift-solid" size="md" />

									Donate
								</TopNavLink>

								<TopNavLink
									href="#"
									label="Donate"
									active={false}
								>
									Closures
								</TopNavLink>

								<TopNavLink
									href="#"
									label="Donate"
									active={false}
								>
									Libraries
								</TopNavLink>

								<TopNavMenuToggle
									menu="login"
									menu-id="top-login-menu"
									active={false}
								>
									<TopNavMenuToggle.Button
										label="Toggle Login menu"
									>
										<Icon icon="lock-solid" size="md" />

										Login
									</TopNavMenuToggle.Button>

									<TopNavMenuToggle.Menu>
										<TopNavMenuToggle.Consumer>
											{({ focus_ref }) => (
												<LoginMenu
													focus_ref={focus_ref}
													close_menu={close_menu}
												/>
											)}
										</TopNavMenuToggle.Consumer>
									</TopNavMenuToggle.Menu>
								</TopNavMenuToggle>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}
