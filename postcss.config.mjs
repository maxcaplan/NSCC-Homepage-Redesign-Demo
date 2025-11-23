import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

export default () => {
  return {
    plugins: [
      purgeCSSPlugin({
        content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
      })
    ]
  }
}
