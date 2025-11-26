import "@/scss/components/_Logo.scss"
import NSCCLogo from "@/assets/logo/nscc-logo.svg?react"
import { append_classes } from "@/util/classes";

interface LogoProps {
	/** href attribute value for logo anchor */
	href?: string;
	/** Label for logo anchor */
	label?: string;
	/** Whether to render logo subheading */
	subheading?: boolean;
	/** id attribute for logo container */
	id?: string;
	/** class attribute for logo container */
	class?: string;
}

/** Website logo component */
export function Logo(props: LogoProps) {
	// Set default logo link label
	if (props.label === undefined) {
		props.label = "Return to homepage"
	}

	return (
		<a
			href={props.href || "#"}
			title={props.label}
			aria-label={props.label}
			id={props.id}
			class={append_classes("logo-container", props.class)}
		>
			<NSCCLogo class="logo" />

			{props.subheading || props.subheading === undefined &&
				<p class="logo-subheading">
					Nova Scotia Community College
				</p>
			}
		</a>
	)
}
