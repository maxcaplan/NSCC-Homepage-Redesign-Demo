/** Perform a specified action for each element of an array or single element */
export function for_each_or_one<T>(
	/** Value(s) to perform the action on */
	values: T | T[],
	/** Callback function action */
	callbackfn: (value: T, index: number, arr: T[]) => void,
	/** Alternative callback for single value */
	single_callbackfn?: (value: T) => void,
) {
	if (Array.isArray(values)) {
		values.forEach(callbackfn)

	} else {
		if (single_callbackfn === undefined) {
			callbackfn(values, 0, [])

		} else {
			single_callbackfn(values)
		}
	}
}
