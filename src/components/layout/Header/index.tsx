import "@/scss/components/layout/Header/_index.scss";

import { Logo } from "../../Logo"
import { TopNavLink } from "@/components/navigation/top_navigation/TopNavLink"
import { SearchBox } from "@/components/SearchBox"
import { TopNavMenuToggle } from "@/components/navigation/top_navigation/TopNavMenuToggle"
import { Icon } from "@/components/Icon"
import { SearchMenuToggle } from "./search_menu_toggle"
import { HeaderMenuToggle } from "./header_menu_toggle";
import { useState } from "preact/hooks";

/** Top navigation menu identifier */
type Menu = "programs" | "admissions" | "student" | "campuses" | "about" | "login" | "hamburger" | "search"

/** Page layout header component */
export function Header() {
	/** Menu that is currently open */
	const [open_menu, set_open_menu] = useState<Menu | null>(null)

	/** Set what menu is open, if menu is already open, close it */
	const toggle_menu = (menu: Menu) => {
		if (open_menu === menu) {
			set_open_menu(null)
		} else {
			set_open_menu(menu)
		}
	}

	return (
		<header class="header">
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
							open={open_menu === "search"}
							onClick={() => toggle_menu("search")}
						/>
						<HeaderMenuToggle
							open={open_menu === "hamburger"}
							onClick={() => toggle_menu("hamburger")}
						/>
					</div>
				</div>
			</div>

			<div class="header-bottom">
				<div class="container">
					<div id="main-navigation" class="primary-navigation">
						<TopNavLink
							href="#"
							label="Scroll to top"
							active
						>
							Home
						</TopNavLink>

						<TopNavMenuToggle
							label="Toggle Programs & courses menu"
							open={open_menu === "programs"}
							onClick={() => toggle_menu("programs")}
						>
							Programs &amp; courses
						</TopNavMenuToggle>

						<TopNavMenuToggle
							label="Toggle Admissions menu"
							open={open_menu === "admissions"}
							onClick={() => toggle_menu("admissions")}
						>
							Admissions
						</TopNavMenuToggle>

						<TopNavMenuToggle
							label="Toggle Student experience menu"
							open={open_menu === "student"}
							onClick={() => toggle_menu("student")}
						>
							Student experience
						</TopNavMenuToggle>

						<TopNavMenuToggle
							label="Toggle Campuses menu"
							open={open_menu === "campuses"}
							onClick={() => toggle_menu("campuses")}
						>
							Campuses
						</TopNavMenuToggle>

						<TopNavMenuToggle
							label="Toggle About menu"
							open={open_menu === "about"}
							onClick={() => toggle_menu("about")}
						>
							About
						</TopNavMenuToggle>
					</div>

					<div id="utility-navigation" class="secondary-navigation">
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

						<TopNavMenuToggle label="Toggle Login menu"
							open={open_menu === "login"}
							onClick={() => toggle_menu("login")}
						>
							<Icon icon="lock-solid" size="md" />

							Login
						</TopNavMenuToggle>
					</div>
				</div>
			</div>
		</header>
	)
}
