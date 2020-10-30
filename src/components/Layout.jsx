import { Navbar } from './NavBar/Navbar';
import { Footer } from './Footer/Footer';
import ScrollArrow from './content/ScrollArrow';

const Layout = ({ children }) => {
	return (
		<div className="  max-w-full  min-h-screen ">
			<Navbar />
			{children}
			<Footer className="flex flex-1 h-full" />
			<ScrollArrow />
		</div>
	);
};

export default Layout;
