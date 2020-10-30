import { Card } from '../components/content/Card';

const Salads = () => {
	return (
		<div className="  flex flex-col   bg-gray-100 pb-12  min-h-screen">
			<h1 className="text-4xl font-bold mt-6 ml-8 ">Salads</h1>
			<div className="flex">
				<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
					{saladsCardsContent.map((content) => {
						return <Card content={content} />;
					})}
				</div>
				<div className="hidden  xl:block xl:w-72 " />
			</div>
		</div>
	);
};

export default Salads;

const saladsCardsContent = [
	{
		imageUrl: require('../assets/images/salads/1.jpg'),
		title: 'GREEK SALAD',
		description:
			'Des tomates cerises, des tranches de concombre, des oignons, des olives noires, du fromage feta sur un lit de laitue mixte et le tout arrosé de notre sauce spéciale.'
	},
	{
		imageUrl: require('../assets/images/salads/2.jpg'),
		title: 'CAESAR SALAD',
		description:
			'Des Tomates cerises et des croûtons servis sur un lit de laitue fraiche avec du parmesan et une sauce César.'
	},
	{
		imageUrl: require('../assets/images/salads/3.jpg'),
		title: 'GARDEN SALAD',
		description:
			'Tomates fraiches, oignons, olives noires, poivrons, des tranches de concombre servis sur un lit de laitue fraiche et dressés avec la sauce de votre choix.'
	},
	{
		imageUrl: require('../assets/images/salads/4.jpg'),
		title: 'SHRIMP CAESAR SALAD',
		description:
			'Des crevettes, des tomates cerises et des croûtons servis sur un lit de laitue fraiche avec du parmesan. Le tout dressé avec une sauce César.'
	},
	{
		imageUrl: require('../assets/images/salads/5.jpg'),
		title: 'CHICKEN CAESAR SALAD',
		description:
			'De tendres Morceaux de poulet pané, des tomates cerises, des croûtons servi sur un lit de laitue fraiche avec du parmesan. Le tout dressé avec une sauce César.'
	}
];
