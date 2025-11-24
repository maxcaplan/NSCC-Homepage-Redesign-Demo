/**
 * Appends one or more classes to a base class
 * @param base - Base class to append classes to
 * @param classes - Classes to append to base
 */
export function append_classes(
	base: string,
	...classes: (string | undefined)[]
): string {
	classes = classes.filter((value) => value !== undefined)
	if (classes.length === 0) {
		return base
	}

	return `${base} ${classes.join(" ")}`
}
