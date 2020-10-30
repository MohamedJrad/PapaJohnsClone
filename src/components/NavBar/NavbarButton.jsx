import React from 'react';
import Link from 'next/link';

export const NavbarButton = ({ name, path }) => {
	return (
		<div className="
          flex  font-bold text-white  justify-start rounded-t-sm     
          text-lg    mr-1  ml-1  mt-2   p-1     
          lg:text-xl    lg:mr-3  lg:ml-3  lg:mt-4   lg:p-2    
          xl:text-2xl   xl:mr-4  xl:ml-4  xl:mt-4   xl:p-2   
           focus:outline-none focus:shadow-outline
           border-red-800
           shadow-red-800
          hover:bg-red-600
          active:bg-red-800
          ">
			<Link href={`${path}`}>{name}</Link>
		</div>
	);
};
