import type { ComponentChild, VNode } from "preact";

/** Determin whether component child is a vnode */
export function child_is_vnode(
	child?: ComponentChild
): child is VNode {
	if (child === null || typeof child !== "object") {
		return false
	}

	return Object.hasOwn(child, "type") &&
		Object.hasOwn(child, "props") &&
		Object.hasOwn(child, "key")
}
