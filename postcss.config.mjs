import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

export default () => {
	return {
		plugins: [
			purgeCSSPlugin({
				content: ["./**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
			})
		]
	}
}
