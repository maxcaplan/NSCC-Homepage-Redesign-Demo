import { createMultiMenu } from "@/components/navigation/menus/MultiMenu"

/** Top navigation menu keys */
export type MenuKeys = "programs" | "admissions" | "student" | "campuses" | "about" | "login" | "hamburger" | "search" | "bottom-login"

/** App navigation multi menu control */
export const AppNavMultiMenu = createMultiMenu<MenuKeys>()
