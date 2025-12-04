import { Icon } from "@/components/Icon"
import "@/scss/components/layout/sections/NewsAndEventsSection/_Event.scss"
import type { ComponentChildren } from "preact"
import type { JSX } from "preact/jsx-runtime"
import { format_date, format_time, leading_zero, type DateObject, type EventTime } from "@/util/time_and_date"

interface EventProps {
	/** Event title */
	title: string
	/** Event date */
	date: DateObject
	/** Event end date */
	["end-date"]?: DateObject
	/** Event time */
	time?: EventTime
	/** Event end time */
	["end-time"]?: EventTime
	/** Event id */
	["event-id"]?: string
	/** Event children */
	children?: ComponentChildren
}

interface FooterPillsProps {
	/** Event date */
	date: DateObject
	/** Event end date */
	["end-date"]?: DateObject
	/** Event time */
	time?: EventTime
	/** Event end time */
	["end-time"]?: EventTime
}

/** Event footer time pills */
const FooterPills = (props: FooterPillsProps) => {
	let elements: JSX.Element[] = []

	if (props["end-date"] === undefined) {
		elements.push(
			<span class="event-pill">
				{format_date(props.date)}
			</span>
		)
	} else {
		elements.push(
			<span class="event-pill">
				{format_date(props.date, 'month')} - {format_date(props["end-date"])}
			</span>
		)
	}

	if (props.time) {
		if (props["end-time"] === undefined) {
			elements.push(
				<span class="event-pill">
					{format_time(props.time)}
				</span>
			)
		} else {
			const same_meridiem = props.time.meridiem === props["end-time"].meridiem
			elements.push(
				<span class="event-pill">
					{format_time(props.time, !same_meridiem)} - {format_time(props["end-time"])}
				</span>
			)
		}
	}

	return <>{elements}</>
}

/** Event card component */
export function Event(props: EventProps) {
	return (
		<article
			aria-labelledby={props["event-id"]}
			class="event"
		>
			<a href="#" class="event-content">
				<div class="event-date">
					<p class="event-month">
						{props.date.month}
					</p>
					<p class="event-day">
						{leading_zero(props.date.day)}
					</p>
				</div>

				<div class="event-body">
					<div class="event-header">

						<h3
							id={props["event-id"]}
						>
							{props.title}
						</h3>
					</div>

					<div class="event-description">
						{props.children}
					</div>

					<div class="event-footer">
						<FooterPills
							date={props.date}
							end-date={props["end-date"]}
							time={props.time}
							end-time={props["end-time"]}
						/>
					</div>
				</div>
				<div class="event-icon">
					<Icon icon="chevron-right" size="lg" />
				</div>
			</a>
		</article>
	)
}
