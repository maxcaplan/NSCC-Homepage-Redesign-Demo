import "@/scss/components/_SearchBox.scss"
import { Icon } from "../Icon";

/** Website search box form component */
export function SearchBox() {
	return (
		<form class="search-box">
			<label for="nscc-search" class="visually-hidden">
				Search nscc.ca
			</label>
			<input
				id="nscc-search"
				name="search-nscc"
				title="Search nscc.ca"
				type="text"
				placeholder="Search nscc.ca..."
				class="search-input"
			/>

			<button
				title="Submit search"
				type="submit"
				aria-label="Submit search"
				class="search-submit"
			>
				<Icon icon="magnifying-glass-solid" class="search-icon" />
			</button>
		</form>
	)
}
