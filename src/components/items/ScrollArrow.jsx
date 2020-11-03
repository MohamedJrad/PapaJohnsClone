import React, { useState } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const ScrollArrow = () => {
	const [ showScroll, setShowScroll ] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 200) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 200) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (typeof window !== 'undefined') {
		// browser code
		window.addEventListener('scroll', checkScrollTop);
	}

	return (
		<FaRegArrowAltCircleUp
			className=" fixed w-12 fill-current   z-30 h-12 bottom-0  right-0 items-center mb-4 mr-4 "
			onClick={scrollTop}
			style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
		/>
	);
};

export default ScrollArrow;
