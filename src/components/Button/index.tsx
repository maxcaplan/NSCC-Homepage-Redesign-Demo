import "@/scss/components/Button/_index.scss"
import { append_classes } from "@/util/classes";
import type { AnchorHTMLAttributes, AriaRole, ComponentChildren, MouseEventHandler } from "preact";

export type ButtonColor = "neutral" | "light" | "primary" | "secondary" | "accent"
export type ButtonStyle = "solid" | "outline"
export type ButtonSize = "md" | "lg" | "xl" | "2xl"

interface BaseButtonProps {
	/** Color off the button */
	color?: ButtonColor;
	/** Style off the button. Defaults to "solid" */
	style?: ButtonStyle;
	/** Size off the button. Defaults to "md" */
	size?: ButtonSize;
	/** Whether to animate button icon on hover. Defaults to false */
	"animate-icon"?: boolean;
	/** Element label */
	label?: string;
	/** Element pressed state. For button acting as a toggle */
	pressed?: boolean | "mixed";
	/** Element id */
	id?: string;
	/** Element class */
	class?: string;
	/** Element role */
	role?: AriaRole
	/** Component children */
	children?: ComponentChildren
}

interface ButtonProps extends BaseButtonProps {
	type?: "button" | "submit" | "reset"
	/** onClick attribute value for element */
	onClick?: MouseEventHandler<HTMLButtonElement>
}

interface LinkButtonProps extends BaseButtonProps {
	/** Element href */
	href?: string
	/** Element target */
	target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"]
	/** onClick attribute value for element */
	onClick?: MouseEventHandler<HTMLAnchorElement>
}

/** Link button props type guard */
function is_link_button_props(
	props: ButtonProps | LinkButtonProps
): props is LinkButtonProps {
	return Object.hasOwn(props, 'href')
}

/** Button component */
export function Button(props: ButtonProps | LinkButtonProps) {
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

	if (is_link_button_props(props)) {
		return (
			<a
				href={props.href}
				target={props.target}
				aria-label={props.label}
				aria-pressed={props.pressed}
				id={props.id}
				class={append_classes(
					"button",
					color_class(props.color),
					style_class(props.style),
					size_class(props.size),
					animation_class(props["animate-icon"]),
					props.class
				)}
				role={props.role}
				onClick={props.onClick}
			>
				{props.children}
			</a>
		)
	} else {
		return (
			<button
				aria-label={props.label}
				aria-pressed={props.pressed}
				id={props.id}
				class={append_classes(
					"button",
					color_class(props.color),
					style_class(props.style),
					size_class(props.size),
					animation_class(props["animate-icon"]),
					props.class
				)}
				role={props.role}
				type={props.type}
				onClick={props.onClick}
			>
				{props.children}
			</button>
		)
	}
}
