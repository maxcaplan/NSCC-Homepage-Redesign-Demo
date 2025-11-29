export interface HeadElement {
	type: string;
	props: Record<string, string>;
	children?: string;
}

declare global {
	var noscript_styles: HeadElement[] | undefined
}
