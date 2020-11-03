import { Card } from '../items/Card';
import sidesCardsContent from '../../helpers/sidesCardsContent';

export const SidesContent = () => {
	return (
		<div className="  flex flex-col   bg-gray-100 pb-12   ">
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
