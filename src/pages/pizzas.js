import { Card } from '../components/content/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Pizzas = () => {
	return (
		<div>
			<NormalView />
			<TabsView />
		</div>
	);
};

export default Pizzas;

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

const classicPizzas = [
	{
		imageUrl: require('../assets/images/pizzas/1.jpg'),
		title: 'PEPPERONI',
		description: 'Succulentes tranches de pepperoni et du fromage fondant.'
	},
	{
		imageUrl: require('../assets/images/pizzas/2.jpg'),
		title: 'CHEESE',
		description: `Le mélange parfait de fromage fondant et de la fameuse tomate de Papa John's.`
	},
	{
		imageUrl: require('../assets/images/pizzas/3.jpg'),
		title: 'MARINERA',
		description: 'Thon, oignons, olives noires, champignons et pizza sauce.'
	},
	{
		imageUrl: require('../assets/images/pizzas/4.jpg'),
		title: 'THE HAWAIIAN',
		description: `Notre pizza Hawaienne avec du jambon de dinde recouverte par de savoureuses tranches d'Ananas pour un goût tropical.`
	},
	{
		imageUrl: require('../assets/images/pizzas/5.jpg'),
		title: 'GARDEN SPECIAL',
		description: 'Oignons, poivrons verts, tomates, olives noires, champignons et pizza sauce.'
	}
];

const specialtyPizzas = [
	{
		imageUrl: require('../assets/images/pizzas/6.jpg'),
		title: 'MEXICAN OLE',
		description: 'Poulet, oignons, poivrons verts, piment Jalapenos, tomates, champignons et pizza sauce.'
	},
	{
		imageUrl: require('../assets/images/pizzas/6.jpg'),
		title: 'CHICKEN BBQ',
		description: `De succulents morceaux du savoureux poulet grillé, des champignons, des tranches d'oignon doux sont amoureusement arrosés avec la fameuse BBQ sauce.`
	},
	{
		imageUrl: require('../assets/images/pizzas/8.jpg'),
		title: 'FIESTA SPICE',
		description: 'Du Boeuf, saucisse italienne, poivrons verts, tomates, piments jalapenos et pizza sauce.'
	},
	{
		imageUrl: require('../assets/images/pizzas/9.jpg'),
		title: 'GREEN GARDEN DELIGHT',
		description: 'Tomates, poivrons verts, oignons, olives noires, champignons et alfredo sauce.'
	},
	{
		imageUrl: require('../assets/images/pizzas/10.jpg'),
		title: 'CHICKEN FLORENTINE',
		description: 'Poulet, tomates, Champignons avec la fameuse Alfredo sauce.'
	},
	{
		imageUrl: require('../assets/images/pizzas/11.jpg'),
		title: 'ZESTY JALAPENO & MEATS',
		description: 'Piment jalapeno, pepperoni, saucisses italinnes et pizza sauce.'
	}
];

const signature = [
	{
		imageUrl: require('../assets/images/pizzas/12.jpg'),
		title: `SUPER PAPA'S`,
		description:
			'Du pepperoni, des saucisses italiennes, et du jambon de dinde, Encore plus de saveur avec des champignons frais, des poivrons verts croquants, des oignons finement tranchés et des olives noires.'
	},
	{
		imageUrl: require('../assets/images/pizzas/13.jpg'),
		title: 'SPICY ITALIAN',
		description: `La Papa's Spicy Italian pizza, comme son nom l'infique, à toute passion et la saveur avec doublement de saucisses italiennes et du savoureux pepperoni. Fantastico!`
	},
	{
		imageUrl: require('../assets/images/pizzas/14.jpg'),
		title: 'TUSCAN SIX CHEESE',
		description:
			'Un mélange authentique de parmesan, Romano, Asiago, Fontina, provolone et du fromage fait à partir de Mozzarella.'
	},
	{
		imageUrl: require('../assets/images/pizzas/15.jpg'),
		title: `JOHN'S FAVORITE`,
		description:
			'Pour la fameuse Pizza de John lui même, nous avons sélectionné notre mélange spécial de six fromages italiens, des tranches de pepperoni et des saucisses italiennes.'
	},
	{
		imageUrl: require('../assets/images/pizzas/16.jpg'),
		title: `FISHERMAN'S CATCH`,
		description: 'Crevettes, calamars, Poivrons verts, oignons et sauce à pizza'
	},
	{
		imageUrl: require('../assets/images/pizzas/17.jpg'),
		title: 'ALL THE MEATS',
		description: `Est-ce le piquant pepperoni et succulentes saucisses que nous avons empilé sur cette superbe pizza qui la rend si populaire? Ou s'agit-il du mélange de viande de boeuf, de jambon de dinde et de mozzarella fraiche? Laissez vos papilles en décider.`
	}
];
