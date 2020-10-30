import React from 'react';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Link from 'next/link';

export const FooterEmailSignupBox = () => {
	return (
		<div className=" flex  sm:flex-1 md:flex-none justify-center items-center
		  bg-red-800 rounded-lg hover:bg-red-600 
		  h-24 sm:h-auto
		m-1  md:m-2   ">
			<a
				href="https://us13.list-manage.com/subscribe?u=9e4373a3367dc3499007d4584&id=7c6afbb446"
				target="_blank"
				className="flex justify-center px-4   items-center font-bold text-lg    text-white "
			>
				Email Signup
				<HiOutlineMailOpen className=" h-8 w-8 mx-3" />
			</a>
		</div>
	);
};
