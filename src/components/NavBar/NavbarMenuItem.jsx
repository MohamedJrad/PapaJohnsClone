import Link from 'next/link';

export const NavbarMenuItem = ({ item, setMenuState }) => {
	return (
		<Link className=" bg-green-500 h-full w-full" href={item.path}>
			<button
				onClick={() => {
					setMenuState(false);
				}}
				className="  flex justify-center items-center mt-1 px-2 w-full text-white text-lg font-semibold   hover:bg-gray-600  "
			>
				{item.name}
			</button>
		</Link>
	);
};
