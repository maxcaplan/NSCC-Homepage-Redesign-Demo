import "@/scss/components/layout/Header/_index.scss";

import { Logo } from "../../Logo"
import { TopNavLink } from "@/components/navigation/top_navigation/TopNavLink"
import { SearchBox } from "@/components/SearchBox"
import { TopNavMenuToggle } from "@/components/navigation/top_navigation/TopNavMenuToggle"
import { Icon } from "@/components/Icon"
import { SearchMenuToggle } from "./search_menu_toggle"
import { HeaderMenuToggle } from "./header_menu_toggle";
import { createContext } from "preact";
import { useMenuState, type ToggleMenuCallback, type CloseMenuCallback } from "@/hooks/menus";

/** Top navigation menu identifier */
export type MenuName = "programs" | "admissions" | "student" | "campuses" | "about" | "login" | "hamburger" | "search"

interface MenusContextType {
	/** Menu that is currently open */
	open_menu?: MenuName | null
	/** Open a menu, if already open, close it */
	toggle_menu?: ToggleMenuCallback<MenuName>
	/** Close open menu */
	close_menu?: CloseMenuCallback<MenuName>
}

/** Header menus state context */
export const MenusContext = createContext<MenusContextType>({})

interface HeaderProps {
	/** Whether the header is sticking to the top of the window while scrolling */
	sticking?: boolean
}

/** Page layout header component */
export function Header(props: HeaderProps) {
	/** Menu that is currently open */
	const [open_menu, toggle_menu, close_menu] = useMenuState<MenuName | null>(null)

	return (
		<header id="header" class={props.sticking ? "header-sticking" : ""}>
			<MenusContext.Provider
				value={{
					open_menu,
					toggle_menu,
					close_menu,
				}}
			>
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

								<SearchMenuToggle
									onClick={() => toggle_menu("search")}
								/>

								<HeaderMenuToggle
									onClick={() => toggle_menu("hamburger")}
								/>
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
										label="Toggle Programs & courses menu"
										menu="programs"
									>
										Programs &amp; courses
									</TopNavMenuToggle>

									<TopNavMenuToggle
										label="Toggle Admissions menu"
										menu="admissions"
									>
										Admissions
									</TopNavMenuToggle>

									<TopNavMenuToggle
										label="Toggle Student experience menu"
										menu="student"
									>
										Student experience
									</TopNavMenuToggle>

									<TopNavMenuToggle
										label="Toggle Campuses menu"
										menu="campuses"
									>
										Campuses
									</TopNavMenuToggle>

									<TopNavMenuToggle
										label="Toggle About menu"
										menu="about"
									>
										About
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
										label="Toggle Login menu"
										menu="login"
										menu-id="top-login-menu"
									>
										<Icon icon="lock-solid" size="md" />

										Login
									</TopNavMenuToggle>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</MenusContext.Provider>
		</header>
	)
}
