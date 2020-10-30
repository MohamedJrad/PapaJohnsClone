import Link from 'next/link';
export const FooterPart2 = () => {
	return (
		<div className="mt-2">
			<div className="  hidden  md:flex   my-4  justify-between items-center">
				<div className=" flex justify-center items-center   grid-cols-4 divide-x-2 divide-red-500 ">
					<a
						href="https://www.facebook.com/pg/papajohnstn/reviews/?ref=page_internal"
						target="_blank"
						className=" text-sm text-white font-semibold mr-4  hover:underline"
					>
						Laisser un commentaire
					</a>

					<Link href="/aboutus">
						<span className=" text-sm text-white hover:underline font-semibold mx-4 cursor-pointer ">
							A propos
						</span>
					</Link>
					<Link href="/location">
						<span className=" text-sm text-white hover:underline font-semibold mx-4 cursor-pointer ">
							Nous Trouver
						</span>
					</Link>
				</div>
				<a
					href="https://www.papajohns.com/international/"
					target="_blank"
					className=" my-2 mx-4 text-sm text-white font-semibold"
				>
					Papa John's international
				</a>
			</div>

			<div className=" md:hidden my-2 mx-4 text-lg text-red-100 font-semibold flex flex-col justify-center items-center ">
				<a
					href="https://www.facebook.com/pg/papajohnstn/reviews/?ref=page_internal"
					target="_blank"
					className=" text-lg text-white font-semibold mr-4 ml-4 mt-4 hover:underline text-center"
				>
					Laisser un commentaire
				</a>
				<Link href="/aboutus">
					<span className=" text-lg text-white font-semibold mr-4 ml-4 mt-4 hover:underline text-center">
						A propos
					</span>
				</Link>
				<Link href="/location">
					<span className=" text-lg text-white font-semibold mr-4 ml-4 mt-4 hover:underline text-center">
						Nous Trouver
					</span>
				</Link>
				<a
					href="https://www.papajohns.com/international/"
					target="_blank"
					className=" text-lg text-white font-semibold mr-4 ml-4 mt-4  hover:underline text-center"
				>
					Papa John's international
				</a>
			</div>
		</div>
	);
};
