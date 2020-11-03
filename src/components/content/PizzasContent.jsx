import { Card } from '../items/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { classicPizzas, specialtyPizzas, signature } from '../../helpers/pizzasCardsContent';

export const Pizzascontent = () => {
	return (
		<div>
			<NormalView />
			<TabsView />
		</div>
	);
};

const TabsView = () => {
	return (
		<Tabs>
			<div className="sm:hidden ">
				<div className=" mx-4 divide-y-2  divide-green-700 divide-solide ">
					<TabList className="flex justify-around items-center bg-green-100  ">
						<Tab className=" m-2  text-green-700 text-center font-semibold text-lg cursor-pointer ">
							CLASSIC PIZZAS
						</Tab>
						<Tab className=" m-2 text-green-700 text-center font-semibold text-lg cursor-pointer ">
							SPECIALTY PIZZAS
						</Tab>
						<Tab className="  m-2 pr-2 text-green-700 text-center font-semibold text-lg cursor-pointer ">
							SIGNATURE
						</Tab>
					</TabList>

					<TabPanel>
						<h1 className="text-4xl font-bold mt-6 ml-8 mr-6">CLASSIC PIZZAS</h1>
						<div className="flex">
							<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
								{classicPizzas.map((content) => {
									return <Card content={content} />;
								})}
							</div>
							<div className="hidden  xl:block xl:w-96  " />
						</div>
					</TabPanel>
					<TabPanel>
						<h1 className="text-4xl font-bold mt-6 ml-8 mr-6 ">SPECIALTY PIZZAS</h1>
						<div className="flex">
							<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
								{specialtyPizzas.map((content) => {
									return <Card content={content} />;
								})}
							</div>
							<div className="hidden  xl:block xl:w-96  " />
						</div>
					</TabPanel>
					<TabPanel>
						<h1 className="text-4xl font-bold mt-6 ml-8 mr-6 ">SIGNATURE</h1>
						<div className="flex">
							<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
								{signature.map((content) => {
									return <Card content={content} />;
								})}
							</div>
							<div className="hidden  xl:block xl:w-96  " />
						</div>
					</TabPanel>
				</div>
			</div>
		</Tabs>
	);
};

const NormalView = () => {
	return (
		<div className=" hidden sm:flex flex-col   bg-gray-100 pb-12  ">
			<h1 className="text-4xl font-bold mt-6 ml-8 ">CLASSIC PIZZAS</h1>
			<div className="flex">
				<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
					{classicPizzas.map((content) => {
						return <Card content={content} />;
					})}
				</div>
				<div className="hidden  xl:block xl:w-96  " />
			</div>
			<h1 className="text-4xl font-bold mt-6 ml-8 ">SPECIALTY PIZZAS</h1>
			<div className="flex">
				<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
					{specialtyPizzas.map((content) => {
						return <Card content={content} />;
					})}
				</div>
				<div className="hidden  xl:block xl:w-96  " />
			</div>
			<h1 className="text-4xl font-bold mt-6 ml-8 ">SIGNATURE</h1>
			<div className="flex">
				<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
					{signature.map((content) => {
						return <Card content={content} />;
					})}
				</div>
				<div className="hidden  xl:block xl:w-96  " />
			</div>
		</div>
	);
};
