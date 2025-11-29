import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import autoprefixer from "autoprefixer"

export default () => {
	return {
		plugins: [
			purgeCSSPlugin({
				content: ["./**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
			}),
			autoprefixer()
		]
	}
}
