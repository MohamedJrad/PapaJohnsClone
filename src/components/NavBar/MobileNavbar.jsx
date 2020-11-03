import { NavbarLogo } from './NavbarLogo';
import { DropDownMenu } from './DropDownMenu';

export const MobileNavbar = ({ items }) => {
	return (
		<div className=" md:hidden">
			<nav className="flex h-20 items-center  bg-red-700">
				<div className="flex flex-1 mt-4 justify-between items-center">
					<NavbarLogo size="small" />
				</div>
				<DropDownMenu items={items} />
			</nav>
		</div>
	);
};
