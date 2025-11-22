import type { FunctionComponent } from "preact"

// Icon asset imports
import CaretDownSolid from "./caret-down-solid.svg?react"

export type IconMap = Record<string, FunctionComponent>

/** Map of icon names to icon elements */
export const icon_map: IconMap = {
	"caret-down-solid": CaretDownSolid,
}

/** All icon map keys */
export type IconKeys = keyof typeof icon_map

