import { NavbarLogo } from './NavbarLogo';
import { NavbarMenu } from './NavbarMenu';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';
import { DropDownMenu } from './DropDownMenu';

export const MobileNavbar = ({ items }) => {
	return (
		<div className=" md:hidden">
			<nav className="flex h-16 items-center  bg-red-700">
				<div className="flex flex-1 mt-4 justify-between items-center">
					<NavbarLogo size="small" />
				</div>
				<DropDownMenu items={items} />
			</nav>
		</div>
	);
};
