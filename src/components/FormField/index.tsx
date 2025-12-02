import "@/scss/components/_FormField.scss"
import { append_classes } from "@/util/classes"
import type { HTMLInputTypeAttribute, OptionHTMLAttributes, TargetedEvent, VNode } from "preact"
import { Icon } from "../Icon"
import { useState } from "preact/hooks"

type SelectChild = VNode<OptionHTMLAttributes<HTMLOptionElement>>
type SelectChildren = SelectChild | SelectChild[]

type SelectChangeEvent = Event & { target: { value: string } | null }

interface FormFieldProps {
	/** Field label */
	label?: string
	/** Field name */
	name?: string
	/** Field type */
	type?: HTMLInputTypeAttribute | "select"
	/** Field placeholder value */
	placeholder?: string
	/** Field element id */
	"input-id"?: string
	/** Component id */
	id?: string
	/** Component class */
	class?: string
	/** Component children. Only rendered for select field type */
	children?: SelectChildren
}

/** Form input field component */
export function FormField(props: FormFieldProps) {
	const [select_value, set_select_value] = useState<string>("")

	const handle_select_change = (e: TargetedEvent<HTMLSelectElement, SelectChangeEvent>) => {
		if (e.target === null) {
			set_select_value("")
			return
		}

		set_select_value(e.target.value)
	}

	const field_element = (props: FormFieldProps) => {
		if (props.type === "select") {
			return (
				<div class="select-field">
					<select
						id={props["input-id"]}
						name={props.name}
						onChange={handle_select_change}
						class={select_value === "" ? "select-empty" : ""}
					>
						{props.placeholder &&
							<option value={""}>
								{props.placeholder}
							</option>
						}

						{props.children}
					</select>

					<span
						class="select-button"
						aria-hidden="true"
					>
						<Icon icon="chevron-down" size="lg" />
					</span>
				</div>
			)
		} else {
			return (
				<input
					type={props.type}
					id={props["input-id"]}
					name={props.name}
					placeholder={props.placeholder}
				/>
			)
		}
	}

	return (
		<div
			id={props.id}
			class={append_classes("form-field", props.class)}
		>
			{props.name &&
				<label for={props["input-id"]}>
					{props.label}
				</label>
			}

			{field_element(props)}
		</div>
	)
}
