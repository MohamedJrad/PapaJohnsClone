import { useState } from 'react';

export const MenuBackground = ({ setMenuState }) => {
	var parent = document.getElementById('__next');
	var parentHeight = parseInt(window.getComputedStyle(parent).height) + 'px';

	//	const [ height, setHeight ] = useState(parentHeight);
	return (
		<div className="absolute  inset-0   ">
			<button
				style={{ height: `${parentHeight}` }}
				className="  relative z-20 w-full   bg-black opacity-50 cursor-default"
				onClick={() => setMenuState(false)}
			/>
		</div>
	);
};
