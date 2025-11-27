import "@/scss/components/_Button.scss"
import { append_classes } from "@/util/classes";
import type { AriaRole, ComponentChildren, MouseEventHandler } from "preact";

export type ButtonColor = "neutral" | "light" | "primary" | "secondary" | "accent"
export type ButtonStyle = "solid" | "outline"
export type ButtonSize = "md" | "lg" | "xl" | "2xl"

interface ButtonProps {
	/** Color off the button */
	color?: ButtonColor;
	/** Style off the button. Defaults to "solid" */
	style?: ButtonStyle;
	/** Size off the button. Defaults to "md" */
	size?: ButtonSize;
	/** Whether to animate button icon on hover. Defaults to false */
	"animate-icon"?: boolean;
	/** Button element label */
	label?: string;
	/** Button element role */
	role?: AriaRole;
	/** Button element checked. For button acting as a switch */
	checked?: boolean;
	/** id attribute value for button element */
	id?: string;
	/** class attribute value for button element */
	class?: string;
	/** onClick attribute value for button element */
	onClick?: MouseEventHandler<HTMLButtonElement>
	/** Component children */
	children?: ComponentChildren
}

/** Button component */
export function Button(props: ButtonProps) {
	/** Select color class for button */
	const color_class = (color?: ButtonColor) => {
		switch (color) {
			case "neutral":
				return "button-neutral"
			case "light":
				return "button-light"
			case "primary":
				return "button-primary"
			case "secondary":
				return "button-secondary"
			case "accent":
				return "button-accent"

			default:
				return undefined;
		}
	}

	/** Select style class for button */
	const style_class = (color?: ButtonStyle) => {
		return color === "outline" ? "button-outline" : undefined
	}

	/** Seclect size class for button */
	const size_class = (size?: ButtonSize) => {
		switch (size) {
			case "lg":
				return "button-lg"
			case "xl":
				return "button-xl"
			case "2xl":
				return "button-2xl"
			default:
				return undefined
		}
	}

	/** Seclect animation class for button */
	const animation_class = (animate_icon?: boolean) => {
		return animate_icon === true ? "button-animate-icon" : undefined
	}

	return (
		<button
			role={props.role}
			aria-label={props.label}
			aria-checked={props.checked}
			id={props.id}
			class={append_classes(
				"button",
				color_class(props.color),
				style_class(props.style),
				size_class(props.size),
				animation_class(props["animate-icon"]),
				props.class
			)}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}
