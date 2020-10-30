import { NavbarButton } from './NavbarButton';
import { NavbarLogo } from './NavbarLogo';

export const DesktopNavbar = ({ items }) => {
	return (
		<div className="hidden md:block">
			<nav className="flex h-12 sm:h-24 bg-red-700">
				<div className="hidden  sm:flex  flex-1   justify-start items-center">
					<NavbarLogo size="big" />
					<div className="  flex justify-center ml-4 ">
						{items.map((item) => {
							return <NavbarButton key={item.name} name={item.name} path={item.path} />;
						})}
					</div>
				</div>
			</nav>
		</div>
	);
};
