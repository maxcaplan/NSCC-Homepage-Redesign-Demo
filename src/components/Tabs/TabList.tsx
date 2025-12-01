import "@/scss/components/Tabs/_TabList.scss"
import { append_classes } from "@/util/classes"
import { type VNode } from "preact"
import { type TabProps } from "./Tab"
import { useContext, useEffect } from "preact/hooks"
import { for_each_or_one } from "@/util/arrays"
import { TabsContext } from "."

type TabListChild = VNode<TabProps>
type TabListChildren = TabListChild | TabListChild[]

export interface TabListTab {
	/** Index of the tab in the tab list */
	index: number
	/** id of the element the tab controls */
	controls_id?: string
}

type NextTabEventHandler = (current_controls_id: string) => void
type PreviousTabEventHandler = (current_controls_id: string) => void

export interface TabListProps {
	/** id attribute value for div element */
	id?: string
	/** id attribute value for div element */
	class?: string
	/** Event handler for next tab event */
	onNextTab?: NextTabEventHandler
	/** Event handler for previous tab event */
	onPreviousTab?: PreviousTabEventHandler
	/** Children elements of TabPanel component */
	children?: TabListChildren
}


/** Tab buttons list component for Tabs layout component */
export function TabList(props: TabListProps) {
	const { set_active_id, set_focus_id } = useContext(TabsContext)

	useEffect(() => {
		connect_tabs(props.children)
	}, [props.children])

	/** key down event handler for tab */
	const handle_tab_key_down = (event: KeyboardEvent, current_controls_id: string) => {
		if (set_active_id === undefined || set_focus_id === undefined) {
			return
		}

		if (!Array.isArray(props.children)) {
			return
		}

		// Get index of current tab
		let tab_index = props.children.findIndex(
			(child) => child.props.controls === current_controls_id
		)

		// Return if current tab index is not found
		if (tab_index <= -1) {
			return
		}

		switch (event.key) {
			case 'ArrowLeft':
				tab_index -= 1
				break;

			case 'ArrowRight':
				tab_index += 1
				break;

			// If no valid key is pressed, return
			default:
				return
		}

		let tab_count = props.children.length

		if (tab_index < 0) {
			tab_index = tab_count - 1
		}

		if (tab_index >= tab_count) {
			tab_index = 0
		}

		let new_active_id = props.children[tab_index].props.controls

		if (new_active_id !== undefined) {
			set_active_id(new_active_id)
			set_focus_id(new_active_id)
		}

		event.stopPropagation()
		event.preventDefault()
	}

	/** Connect event handlers to tabs */
	const connect_tabs = (children?: TabListChildren) => {
		if (children === undefined) {
			return
		}

		for_each_or_one(children, (child) => {
			child.props.onKeyDown = (event, controls_id) => handle_tab_key_down(event, controls_id)
		})
	}

	// Set tabs event handlers
	connect_tabs(props.children)

	return (
		<div
			id={props.id}
			class={append_classes("tab-list", props.class)}
		>
			{props.children}
		</div>
	)
}
