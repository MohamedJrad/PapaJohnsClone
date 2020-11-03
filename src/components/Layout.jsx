import { Navbar } from './NavBar/Navbar';
import { Footer } from './Footer/Footer';
import ScrollArrow from './items/ScrollArrow';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col ">
			<Navbar />
			<div className="mb-auto">{children}</div>
			<Footer className="flex flex-1 h-full  self-end" />
			<ScrollArrow />
		</div>
	);
};

export default Layout;

//min-h-3/4
