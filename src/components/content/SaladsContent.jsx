import { Card } from '../items/Card';
import { saladsCardsContent } from '../../helpers/saladsCardsContent';

export const SaladsContent = () => {
	return (
		<div className="  flex flex-col   bg-gray-100 pb-12 ">
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
