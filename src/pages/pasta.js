import { Card } from '../components/content/Card';

const Pasta = () => {
	return (
		<div className="  flex flex-col   bg-gray-100 pb-12 sm:min-h-screen  ">
			<h1 className="text-4xl font-bold mt-6 ml-8 ">Pasta</h1>
			<div className="flex">
				<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
					{pastaCardsContent.map((content) => {
						return <Card content={content} />;
					})}
				</div>
				<div className="hidden  xl:block xl:w-72 " />
			</div>
		</div>
	);
};

export default Pasta;

const pastaCardsContent = [
	{
		imageUrl: require('../assets/images/pasta/1.jpg'),
		title: 'FISHERMEN CATCH',
		description:
			'Tagliatelle ou penne au calamars, crevettes, champignons, oignons, et des tomates. Le tout servi avec notre sauce tomate spéciale et du parmesan.'
	},
	{
		imageUrl: require('../assets/images/pasta/2.jpg'),
		title: 'CHICKEN FLORENTINE',
		description:
			'Tagliatelle ou penne au poulet, tomates, olives noires, oignons, champignons avec notre sauce spéciale Alfredo. Le tout parsemé de parmesan.'
	},
	{
		imageUrl: require('../assets/images/pasta/3.jpg'),
		title: 'DIABLO BURST',
		description:
			'Tagliatelle ou penne aux saucisses italiennes, champignons, oignons, poivrons rouges, avec notre sauce tomate spéciale. Le tout parsemé de parmesan.'
	}
];
