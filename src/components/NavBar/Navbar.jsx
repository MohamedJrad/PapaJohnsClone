import { MobileNavbar } from './MobileNavbar';
import { DesktopNavbar } from './DesktopNavbar';
export const Navbar = () => {
	return (
		<div>
			<DesktopNavbar items={menuItems} />
			<MobileNavbar items={menuItems} />
		</div>
	);
};

const menuItems = [
	{ name: 'PIZZAS', path: 'pizzas' },
	{ name: 'SIDES', path: 'sides' },
	{ name: 'PASTA', path: 'pasta' },
	{ name: 'SALADS', path: 'salads' },
	{ name: 'DESSERTS', path: 'desserts' },
	{ name: 'ABOUT US', path: 'aboutus' }
];
