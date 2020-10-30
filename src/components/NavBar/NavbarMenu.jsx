import { NavbarMenuItem } from './NavbarMenuItem';

export const NavbarMenu = ({ setMenuState, menuState, items }) => {
	return (
		<div className="absolute inset-x-0  m-6">
			{menuState && (
				<div className="  relative z-20 bg-red-700  rounded shadow-lg  ">
					<div class="divide-y-2 divide-gray-100 divide-dashed">
						{items.map((item) => {
							return <NavbarMenuItem item={item} setMenuState={setMenuState} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
};
