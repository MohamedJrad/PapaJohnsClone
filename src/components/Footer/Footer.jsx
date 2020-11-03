import React from 'react';
import { FooterPart1 } from './FooterPart1';
import { FooterPart2 } from './FooterPart2';
import { FooterBase } from './FooterBase';

export const Footer = () => {
	return (
		<div className="  flex flex-col  bg-red-700  w-full    ">
			<div className="mx-8 my-4 divide-y-2 divide-red-500 divide-solide">
				<FooterPart1 />
				<FooterPart2 />
			</div>
			<FooterBase />
		</div>
	);
};
