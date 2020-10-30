import { FooterEmailSignupBox } from './FooterEmailSignupBox ';
import { FooterSocialMediaBox } from './FooterSocialMediaBox';

export const FooterPart1 = () => {
	return (
		<div className="flex flex-1 flex-col sm:flex-row justify-center md:justify-between ">
			<FooterEmailSignupBox />
			<FooterSocialMediaBox />
		</div>
	);
};
