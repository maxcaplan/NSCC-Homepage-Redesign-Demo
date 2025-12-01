import "@/scss/components/Tabs/_TabPanel.scss"
import { append_classes } from "@/util/classes"
import type { ComponentChildren } from "preact"
import { useContext } from "preact/hooks"
import { TabsContext } from "."

export interface TabPanelProps {
	/** Id of element that labels this tab panel */
	labelledby?: string
	/** Active state of the tab panel */
	active?: boolean
	/** id attribute value for div element */
	id?: string
	/** id attribute value for div element */
	class?: string
	/** Children elements of TabPanel component */
	children?: ComponentChildren
}

export function TabPanel(props: TabPanelProps) {
	const { active_id } = useContext(TabsContext)

	// Determin active state from context or props
	const is_panel_active = active_id === undefined ? props.active || false : active_id === props.id

	return (
		<div
			role="tabpanel"
			aria-labelledby={props.labelledby}
			id={props.id}
			class={append_classes(
				"tab-panel",
				props.class,
				is_panel_active ? undefined : "hidden"
			)}
		>
			{props.children}
		</div>
	)
}
