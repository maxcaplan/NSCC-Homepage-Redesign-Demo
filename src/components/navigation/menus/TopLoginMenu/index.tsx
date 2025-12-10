import { LoginMenu } from "../LoginMenu";
import { AppNavMultiMenu } from "../../AppNavMultiMenu";
import { TopNavMenuToggle } from "../../top_navigation/TopNavMenuToggle";

/** Top navigation login menu component */
export function TopLoginMenu() {
	return (
		<TopNavMenuToggle.Menu>
			<AppNavMultiMenu.Consumer>
				{({ close_menu }) => (
					<TopNavMenuToggle.Consumer>
						{({ focus_ref }) => (
							<LoginMenu
								close_menu={close_menu}
								focus_ref={focus_ref}
							/>
						)}
					</TopNavMenuToggle.Consumer>
				)}
			</AppNavMultiMenu.Consumer>
		</TopNavMenuToggle.Menu>
	)
}
