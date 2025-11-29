import { hydrate, prerender as ssr } from "preact-iso";
import "@/global"
import '@/scss/main.scss'
import InlineStyles from '@/scss/inline/_index.scss?inline'

import { App } from "./app";
import type { HeadElement } from "@/global";

//
// DEV MODE: Hydrate html
//


if (typeof window !== "undefined") {
	import('@/scss/inline/_index.scss')
	const parent = document.querySelector("#app")

	if (parent !== null) {
		hydrate(<App />, parent);
	} else {
		console.error("App container not found")
	}
}


//
// BUILD MODE: Prerender app
//


/* @ts-ignore - types not available for preact prerender plugin */
export async function prerender(data) {
	const { html, links } = await ssr(<App {...data} />)

	let elements: HeadElement[] = [
		{
			type: "style",
			props: { type: "text/css", },
			children: InlineStyles
		}
	]

	if (globalThis.noscript_styles !== undefined) {
		elements.push(...globalThis.noscript_styles)
	}

	return {
		html,
		links,
		head: {
			elements: new Set(elements)
		}
	}
}
