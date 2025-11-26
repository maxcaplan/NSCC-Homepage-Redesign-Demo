import { BottomNav } from "./components/layout/BottomNav";
import { Header } from "./components/layout/Header";

export function App() {
	return (
		<>
			<Header />
			<BottomNav />

			<section class="section">
				<div class="container">
					<h1>Hello World</h1>
					<p>Lorem ipsum dolar</p>
				</div>
			</section>
		</>
	)
}
