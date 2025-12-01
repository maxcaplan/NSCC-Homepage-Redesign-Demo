import "@/scss/components/Tabs/_Tab.scss"
import { append_classes } from "@/util/classes"
import type { ComponentChildren, MouseEventHandler, TargetedKeyboardEvent, TargetedMouseEvent } from "preact"
import { useContext, useEffect, useRef } from "preact/hooks"
import { TabsContext, type TabsContextType } from "."

type TabClickEventHandler = MouseEventHandler<HTMLButtonElement>
type TabKeyDownEventHandler = (event: TargetedKeyboardEvent<HTMLButtonElement>, controls_id: string) => void

export interface TabProps {
	/** Active state of the tab */
	active?: boolean
	/** id of the element this tab controls */
	controls?: string
	/** id attribute value for button element */
	id?: string
	/** id attribute value for button element */
	class?: string
	/** onClick attribute value for button element */
	onClick?: TabClickEventHandler
	/** onKeyDown attribute value for button element */
	onKeyDown?: TabKeyDownEventHandler
	/** Children elements of TabPanel component */
	children?: ComponentChildren
}

/** Event handler for tab click */
const handle_click = (
	event: TargetedMouseEvent<HTMLButtonElement>,
	controls?: string,
	set_active_id?: TabsContextType["set_active_id"],
	onClick?: TabClickEventHandler,
) => {

	if (onClick !== undefined) {
		onClick(event)
	}
	if (set_active_id !== undefined && controls !== undefined) {
		set_active_id(controls)
	}
}

/** Event handler for tab key down */
const handle_key_down = (
	event: TargetedKeyboardEvent<HTMLButtonElement>,
	controls?: string,
	onKeyDown?: TabKeyDownEventHandler
) => {
	if (onKeyDown !== undefined && controls !== undefined) {
		onKeyDown(event, controls)
	}
}

/** Tab button component for tabs layout component */
export function Tab(props: TabProps) {
	const { active_id, set_active_id, focus_id } = useContext(TabsContext)
	const ref = useRef<HTMLButtonElement>(null)

	// Grab focus if tabs is focused and focus_id context equals controls prop
	useEffect(() => {
		if (ref.current === null) {
			return
		}

		if (focus_id === props.controls) {
			ref.current.focus()
		}
	}, [focus_id])

	// Determin active state from context or props
	const is_tab_active = active_id === undefined ? props.active || false : active_id === props.controls

	return (
		<button
			role="tab"
			aria-controls={props.controls}
			aria-selected={is_tab_active}
			tabindex={is_tab_active ? undefined : -1}
			id={props.id}
			class={append_classes("tab", props.class)}
			onClick={(e) => handle_click(
				e,
				props.controls,
				set_active_id,
				props.onClick,
			)}
			onKeyDown={(e) => handle_key_down(e, props.controls, props.onKeyDown)}
			ref={ref}
		>
			{props.children}
		</button>
	)
}
