import type { FunctionComponent, JSX } from "preact"

// Icon asset imports
import CaretLeftSolid from "@/assets/icons/caret-left-solid.svg?react"
import CaretRightSolid from "@/assets/icons/caret-right-solid.svg?react"
import CaretUpSolid from "@/assets/icons/caret-up-solid.svg?react"
import CaretDownSolid from "@/assets/icons/caret-down-solid.svg?react"
import ArrowLeft from "@/assets/icons/arrow-left.svg?react"
import ArrowRight from "@/assets/icons/arrow-right.svg?react"
import ArrowUp from "@/assets/icons/arrow-up.svg?react"
import ArrowDown from "@/assets/icons/arrow-down.svg?react"
import MagnifyingGlassSolid from "@/assets/icons/magnifying-glass-solid.svg?react"
import GiftSolid from "@/assets/icons/gift-solid.svg?react"
import LockSolid from "@/assets/icons/lock-solid.svg?react"
import MenuSolid from "@/assets/icons/menu-solid.svg?react"
import CalendarXSolid from "@/assets/icons/calendar-x-solid.svg?react"
import BookOpenSolid from "@/assets/icons/book-open-solid.svg?react"

export type IconComponent = FunctionComponent<JSX.SVGAttributes<SVGSVGElement> & {
	title?: string
}>
export type IconMap = Record<string, IconComponent>

const icons = {
	"caret-left-solid": CaretLeftSolid,
	"caret-right-solid": CaretRightSolid,
	"caret-up-solid": CaretUpSolid,
	"caret-down-solid": CaretDownSolid,
	"arrow-left": ArrowLeft,
	"arrow-right": ArrowRight,
	"arrow-up": ArrowUp,
	"arrow-down": ArrowDown,
	"magnifying-glass-solid": MagnifyingGlassSolid,
	"gift-solid": GiftSolid,
	"lock-solid": LockSolid,
	"menu-solid": MenuSolid,
	"calendar-x-solid": CalendarXSolid,
	"book-open-solid": BookOpenSolid
}

/** Map of icon names to icon svg components */
export const icon_map: IconMap = icons

/** All icon map keys */
export type IconKeys = keyof typeof icons
