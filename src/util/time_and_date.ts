export type Month =
	"jan" |
	"feb" |
	"mar" |
	"apr" |
	"may" |
	"jun" |
	"jul" |
	"aug" |
	"sep" |
	"oct" |
	"nov" |
	"dec"

export interface DateObject {
	year: number
	month: Month
	day: number
}

export interface EventTime {
	hour: number
	minute?: number
	meridiem?: 'am' | 'pm'
}

/** Add leading zero to numbers less than 10 */
export function leading_zero(number: number) {
	let num_string = number.toString()

	if (number < 10) {
		num_string = '0' + num_string
	}

	return num_string
}

/** Create string from date */
export function format_date(
	date: DateObject,
	/** Maximum date field to include in date string */
	format: 'day' | 'month' | 'year' = 'year'
) {
	const month = `${date.month.slice(0, 1).toUpperCase()}${date.month.slice(1)}`

	switch (format) {
		case 'day':
			return leading_zero(date.day)

		case 'month':
			return `${month} ${date.day}`

		case 'year':
			return `${month} ${date.day}, ${date.year}`
	}
}

/** Create string from time */
export function format_time(time: EventTime, with_meridiem: boolean = true) {
	let time_string = time.hour.toString()

	if (time.minute !== undefined && time.minute > 0) {
		time_string += `:${leading_zero(time.minute)}`
	}

	if (with_meridiem) {
		return time_string + (time.meridiem === "pm" ? " pm" : " am")
	} else {
		return time_string
	}
}
