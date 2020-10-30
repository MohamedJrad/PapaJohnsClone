import { TiThMenu } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';

export const MenuButton = ({ setMenuState, menuState }) => {
	return (
		<button
			onClick={() => {
				setMenuState(!menuState);
			}}
			type="button"
			className=" block  relative z-30 m-2 text-gray-800 hover:text-white focus:text-white focus:outline-none"
		>
			{!menuState ? (
				<TiThMenu className="h-8 w-8  fill-current" />
			) : (
				<div>
					<AiOutlineClose className="h-6 w-6  fill-current" />
				</div>
			)}
		</button>
	);
};
