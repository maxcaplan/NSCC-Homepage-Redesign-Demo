/**
 * Appends one or more classes to one or more base class
 * @param base - Base class to append classes to
 * @param classes - Classes to append to base
 */
export function append_classes(
	base: string | undefined,
	...classes: (string | undefined)[]
): string | undefined {
	classes = classes.filter((value) => value !== undefined)
	if (classes.length === 0) {
		return base
	}

	if (base === undefined) {
		return classes.join(" ")
	} else {
		return `${base} ${classes.join(" ")}`
	}
}
