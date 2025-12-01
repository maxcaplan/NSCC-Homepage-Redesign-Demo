import "@/scss/components/Tabs/_index.scss"
import { append_classes } from "@/util/classes"
import { createContext, type VNode } from "preact"
import { TabPanel, type TabPanelProps } from "./TabPanel"
import { Tab, type TabProps } from "./Tab"
import { TabList } from "./TabList"
import { useEffect, useState, type Dispatch, type StateUpdater } from "preact/hooks"
import { for_each_or_one } from "@/util/arrays"

export type TabChild = VNode<TabProps>
export type TabChildren = TabChild | TabChild[]

export type TabPanelChild = VNode<TabPanelProps>
export type TabPanelChildren = TabPanelChild | TabPanelChild[]

export type TabsChild = TabChild | TabPanelChild
export type TabsChildren = TabsChild | TabsChild[]

export interface TabsContextType {
	/** Id of the active tab panel */
	active_id?: string,
	/** Active id setter */
	set_active_id?: Dispatch<StateUpdater<string | undefined>>
	/** Id of the focused tab */
	focus_id?: string
	/** Focus id setter */
	set_focus_id?: Dispatch<StateUpdater<string | undefined>>
}

export const TabsContext = createContext<TabsContextType>({})

interface TabsProps {
	/** id attribute value for div element */
	id?: string
	/** id attribute value for div element */
	class?: string
	/** Tabs component TabPanel children */
	children?: TabsChildren
}

/** Tab child type guard */
export function is_tab_child(child?: VNode): child is TabChild {
	return child !== undefined && child.type === Tab
}

/** TabPanel child type guard */
export function is_tab_panel_child(child?: VNode): child is TabPanelChild {
	return child !== undefined && child.type === TabPanel
}

/** Get all children of component that are tab components */
const get_tab_children = (children?: TabsChildren) => {
	if (children === undefined) {
		return undefined
	}

	if (Array.isArray(children)) {
		return children.filter((child) => is_tab_child(child))
	}

	if (!is_tab_child(children)) {
		return undefined
	}

	return children
}

/** Get all children of component that are tab panel components */
const get_panel_children = (children?: TabsChildren) => {
	if (children === undefined) {
		return undefined
	}

	if (Array.isArray(children)) {
		return children.filter((child) => is_tab_panel_child(child))
	}

	if (!is_tab_panel_child(children)) {
		return undefined
	}

	return children
}

/** Create tab panel id from index and parent id */
const panel_id = (parent_id?: string, index: number = 0) => {
	return `${parent_id ? `${parent_id}-` : ""}panel-${index}`
}

/** Set the controls prop for tabs if unset */
const init_tab_controls = (tabs?: TabChildren, parent_id?: string) => {
	if (tabs === undefined) {
		return
	}

	for_each_or_one(tabs, (tab, index) => {
		if (tab.props.controls === undefined) {
			tab.props.controls = panel_id(parent_id, index)
		}
	})
}

/** Set the id prop for panels if unset */
const init_panel_ids = (panels?: TabPanelChildren, parent_id?: string) => {
	if (panels === undefined) {
		return
	}

	for_each_or_one(panels, (panel, index) => {
		if (panel.props.id === undefined) {
			panel.props.id = panel_id(parent_id, index)
		}
	})
}

/** Get id of active tab from tabs children */
const get_active_id_from_children = (
	tabs?: TabChildren,
	panels?: TabPanelChildren
): string | undefined => {
	if (tabs === undefined && panels === undefined) {
		return undefined
	}

	let first_id: string | undefined

	// Check if any tabs are marked active
	if (tabs !== undefined) {
		first_id = Array.isArray(tabs) ? tabs[0].props.controls : tabs.props.controls

		let active_tab: string | undefined

		for_each_or_one(tabs, (tab) => {
			if (active_tab === undefined && tab.props.active) {
				active_tab = tab.props.controls
			}
		})

		if (active_tab !== undefined) {
			return active_tab
		}
	}

	// Check if any panels are marked active
	if (panels !== undefined) {
		if (first_id === undefined) {
			first_id = Array.isArray(panels) ? panels[0].props.id : panels.props.id
		}

		let active_panel: string | undefined

		for_each_or_one(panels, (panel) => {
			if (active_panel === undefined && panel.props.active) {
				active_panel = panel.props.id
			}
		})

		if (active_panel !== undefined) {
			return active_panel
		}
	}

	// Return controls or id of first tab or panel respectively if none are active
	return first_id
}

/** Initialize children props */
const init_children = (tabs?: TabChildren, panels?: TabPanelChildren, parent_id?: string) => {
	init_tab_controls(tabs, parent_id)
	init_panel_ids(panels, parent_id)
}

/** Tabs layout component */
export function Tabs(props: TabsProps) {
	const [tab_children, set_tab_children] = useState<TabChild | TabChild[] | undefined>(
		get_tab_children(props.children)
	)
	const [panel_children, set_panel_children] = useState<TabPanelChild | TabPanelChild[] | undefined>(
		get_panel_children(props.children)
	)

	init_children(tab_children, panel_children, props.id)

	const [active_id, set_active_id] = useState<string | undefined>(
		get_active_id_from_children(tab_children, panel_children)
	)

	const [focus_id, set_focus_id] = useState<string | undefined>()

	// Update tab and panel children when component children change
	useEffect(() => {
		set_tab_children(get_tab_children(props.children))
		set_panel_children(get_panel_children(props.children))
	}, [props.children])

	return (
		<div
			id={props.id}
			class={append_classes("tabs", props.class)}
		>
			<TabsContext.Provider
				value={{
					active_id,
					set_active_id,
					focus_id,
					set_focus_id,
				}}
			>
				<TabList>
					{tab_children}
				</TabList>

				{panel_children}
			</TabsContext.Provider>
		</div>
	)
}
