import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
export const FooterSocialMediaBox = () => {
	return (
		<div className="
		
			 flex  flex-1 md:flex-none flex-col  md:flex-row justify-center
				  p-4   items-center font-bold text-lg text-center
				   bg-red-800 text-white rounded-lg 
				   m-1
				  md:m-2 
				   
	">
			Connectez-vous à Papa John's
			<SocialMediaIcons />
		</div>
	);
};

const SocialMediaIcons = () => {
	return (
		<div className="flex ">
			<a
				href="https://www.facebook.com/papajohnstn/"
				target="_blank"
				className="mx-2 w-8 h-8 hover:h- hover:w-12 hover:bg-red-600"
			>
				<TiSocialFacebook className="w-full h-full" />
			</a>
			<a
				href="https://twitter.com/papajohns_tn"
				target="_blank"
				className="mx-2 w-8 h-8 hover:h- hover:w-12 hover:bg-red-600"
			>
				{' '}
				<TiSocialTwitter className="w-full h-full" />
			</a>
			<a
				href="https://www.instagram.com/papajohnstn/"
				target="_blank"
				className="mx-2 w-8 h-8 hover:h- hover:w-12 hover:bg-red-600"
			>
				{' '}
				<TiSocialInstagram className="w-full h-full" />
			</a>
		</div>
	);
};
