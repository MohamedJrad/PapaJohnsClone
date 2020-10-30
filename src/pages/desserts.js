import { Card } from '../components/content/Card';

const Desserts = () => {
	return (
		<div className="  flex flex-col   bg-gray-100 pb-12 min-h-screen  ">
			<h1 className="text-4xl font-bold mt-6 ml-8 ">Desserts</h1>
			<div className="flex">
				<div className="flex  flex-wrap justify-center items-center sm:justify-start ">
					{dessertsCardsContent.map((content) => {
						return <Card content={content} />;
					})}
				</div>
				<div className="hidden  xl:block xl:w-72 " />
			</div>
		</div>
	);
};

export default Desserts;

const dessertsCardsContent = [
	{
		imageUrl: require('../assets/images/desserts/1.jpg'),
		title: 'COOKIE',
		description: 'Un délicieux cookie au chocolat préparé au four à la texture authentique.'
	},
	{
		imageUrl: require('../assets/images/desserts/2.jpg'),
		title: 'TIRAMISU',
		description: 'Une alternance entre un cake parfumé au café, et du mascarpone. Le tout saupoudré de chocolat.'
	},
	{
		imageUrl: require('../assets/images/desserts/3.jpg'),
		title: 'BROWNIE',
		description: 'Brownie au chocolat au four au coeur moelleux.'
	},
	{
		imageUrl: require('../assets/images/desserts/5.jpg'),
		title: 'RED FRUITS CHEESECAKE',
		description: 'Le succulent mélange entre le goût des fruits rouges et le classique cheescake'
	}
];
