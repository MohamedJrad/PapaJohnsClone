import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styled from 'styled-components';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const CustomeSlider = () => {
	return (
		<div className="">
			<MobileContent />
			<DesktopContent />
		</div>
	);
};

const DesktopContent = () => (
	<div className="hidden md:block">
		<Wrapper>
			{' '}
			<AutoplaySlider play interval={5000} className=" mb-16  	  ">
				<img source={require('../../assets/images/desktopslider/bs1.jpg')} />
				<img source={require('../../assets/images/desktopslider/bs2.jpg')} />
				<img source={require('../../assets/images/desktopslider/bs4.jpg')} />
				<img source={require('../../assets/images/desktopslider/bs5.jpg')} />
			</AutoplaySlider>
		</Wrapper>
	</div>
);

const MobileContent = () => (
	<div className="md:hidden">
		<Wrapper>
			{' '}
			<AutoplaySlider
				play
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={6000}
				className=" mb-16  	  "
			>
				<img source={require('../../assets/images/mobileSlider/ss1.jpg')} />
				<img source={require('../../assets/images/mobileSlider/ss2.jpg')} />
				<img source={require('../../assets/images/mobileSlider/ss4.jpg')} />
				<img source={require('../../assets/images/mobileSlider/ss5.jpg')} />
			</AutoplaySlider>
		</Wrapper>
	</div>
);

const Wrapper = styled.div`
	.awssld {
		--control-bullet-color: #fff;
		--control-bullet-active-color: #2f855a;
	}
	.awssld__bullets button {
		width: 25px;
		height: 25px;
		margin: 8px;
		border: 2px solid #2f855a;
	}
	.awssld__bullets {
		bottom: -50px;
	}
`;
