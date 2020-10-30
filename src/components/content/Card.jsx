import { AiFillStar } from 'react-icons/ai';

export const Card = ({ content }) => {
	return (
		<div className=" flex flex-col  sm:ml-8 m-4  sm:h-84 lg:h-96 sm:w-72 shadow-2xl rounded-xl overflow-hidden border items-center justify-center  ">
			<img className="  self-start overflow-hidden  lg:h-56 " src={content.imageUrl} alt={content.title} />
			<div className=" flex flex-col w-full bg-white overflow-hidden pb-4  ">
				<span className="m-2 text-gray-900 text-lg uppercase font-semibold tracking-wide">{content.title}</span>
				<span className="my-2 mx-2 mb-4 text-gray-600 text-sm ">{content.description}</span>
			</div>
		</div>
	);
};
