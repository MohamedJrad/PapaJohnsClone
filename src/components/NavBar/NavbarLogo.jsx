import Link from 'next/link';

export const NavbarLogo = ({ size }) => {
	return (
		<Link href="/">
			<a>
				{size === 'big' ? (
					<img
						className=" sm:h-32 sm:w-40  lg:h-40 lg:w-48  mr-2 ml-2 md:m-4   lg:ml-12 transform -translate-y-4 "
						src={require('../../assets/logos/papa-johns-logo.png')}
						alt="logo"
					/>
				) : (
					<img
						className=" h-16  w-32 mt-6 pb-2 mr-4 ml-2 transform -translate-y-4 "
						src={require('../../assets/logos/logo-small.png')}
						alt="logo"
					/>
				)}
			</a>
		</Link>
	);
};
