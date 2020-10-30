import { Card } from '../components/content/Card';

const Sides = () => {
	return (
		<div className="  flex flex-col   bg-gray-100 pb-12 min-h-screen  ">
			<h1 className="text-4xl font-bold mt-6 ml-8 ">Sides</h1>
			<div className="flex">
				<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
					{sidesCardsContent.map((content) => {
						return <Card content={content} />;
					})}
				</div>
				<div className="hidden  xl:block xl:w-96  " />
			</div>
		</div>
	);
};

export default Sides;

const sidesCardsContent = [
	{
		imageUrl: require('../assets/images/sides/1.jpg'),
		title: 'CHICKEN POPPERS',
		description:
			'Savoureux et tendre, notre blanc de poulet premium est légèrement pané puis cuit au four pour des poppers dorés et croustillants. servis avec la sauce de votre choix'
	},
	{
		imageUrl: require('../assets/images/sides/2.jpg'),
		title: 'COMBO PLATTER',
		description: '6 Chicken Wings, 6 Chicken Poppers et des Patato Weges.'
	},
	{
		imageUrl: require('../assets/images/sides/3.jpg'),
		title: 'BREADSTICKS',
		description: "Des breadsticks délicieux cuits au four servis avec notre pizza sauce et la sauce à l'ail."
	},
	{
		imageUrl: require('../assets/images/sides/4.jpg'),
		title: 'CHICKEN WINGS',
		description:
			"De savoureux ailerons de poulet marinés dans une Buffalo ou Honey-Chipotle sauce, cuits à l'os. Servis avec la sauce de votre choix."
	},
	{
		imageUrl: require('../assets/images/sides/5.jpg'),
		title: 'CHEESESTICKS',
		description:
			"Un savoureux mélange de pâte fraiche, de special sauce à l'ail et de Mozzarella, le tout servi avec notre pizza sauce"
	},
	{
		imageUrl: require('../assets/images/sides/6.jpg'),
		title: 'POTATO WEDGES',
		description:
			'Des pommes de terre assaisonnées cuites, dorées et croustillantes. Servies avec la sauce de votre choix.'
	}
];
