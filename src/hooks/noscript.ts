import "@/global"

/** Inject noscript inline styles into the document head */
export function useNoscriptStyles(styles?: string) {
	if (globalThis.noscript_styles === undefined) {
		globalThis.noscript_styles = []
	}

	globalThis.noscript_styles.push(
		{
			type: "noscript",
			props: {},
			children: `<style type="text/css">${styles}</style>`
		}
	)
}
