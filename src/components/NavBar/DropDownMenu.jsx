import { useState } from 'react';
import { MenuButton } from './MenuButton';
import { NavbarMenu } from './NavbarMenu';
import { MenuBackground } from './MenuBackground';

export const DropDownMenu = ({ items }) => {
	const [ menuState, setMenuState ] = useState(false);

	return (
		<div className=" ">
			<MenuButton setMenuState={setMenuState} menuState={menuState} />
			<div>
				{menuState && (
					<div className="">
						<MenuBackground setMenuState={setMenuState} />
						<NavbarMenu setMenuState={setMenuState} menuState={menuState} items={items} />
					</div>
				)}
			</div>
		</div>
	);
};
