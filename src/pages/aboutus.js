import Head from 'next/head';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NotreAmbition } from '../components/content/aboutus/NotreAmbition';
import { NosValeurs } from '../components/content/aboutus/NosValeures';
import { NosHistoire } from '../components/content/aboutus/NosHistoire';

const AboutUs = () => {
	return (
		<div className="flex ">
			<div className=" hidden sm:block  ">
				<div className=" flex    mt-10 ">
					<div className=" bg-green-700 flex  items-center w-64 xl:w-96 ">
						<h1 className="  self-center uppercase text-2xl m-2  font-bold text-white">AboutUs</h1>
					</div>

					<div className="arrow-right " />
				</div>
			</div>
			<div className=" hidden sm:block w-2 bg-gray-600" />
			<div className=" flex-col  ">
				<div>
					<h1 className=" ml-6 mt-6 uppercase text-5xl font-bold font-family-">about us</h1>

					<p className="ml-6  mr-12 text-2xl font-semibold text-gray-700	">
						LES SECRETS DE LA QUALITÉ PAPA JOHN'S
					</p>
					<div className="mx-6 my-4">
						<img
							className="h-32 lg:h-56 w-full   object-cover object-center"
							src={require('../assets/images/aboutus/about-hero-works.jpg')}
						/>
					</div>
				</div>
				<div>
					<Tabs>
						<div className=" mx-4 divide-y-2  divide-green-700 divide-solide ">
							<TabList className="flex justify-around items-center bg-green-100  ">
								<Tab className=" m-2  text-green-700 text-center font-semibold text-xl cursor-pointer ">
									NOTRE AMBITION
								</Tab>
								<Tab className=" m-2  text-green-700 text-center font-semibold text-xl cursor-pointer">
									NOS VALEURS
								</Tab>
								<Tab className=" m-2  text-green-700 text-center font-semibold text-xl cursor-pointer">
									NOTRE HISTOIRE
								</Tab>
							</TabList>

							<TabPanel>
								<NotreAmbition />
							</TabPanel>
							<TabPanel>
								<NosValeurs />
							</TabPanel>
							<TabPanel>
								<NosHistoire />
							</TabPanel>
						</div>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
4;
