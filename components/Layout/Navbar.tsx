/** @format */

import { FC } from "react";

export const Navbar: FC = () => {
	return (
		<div className="flex h-[50px] border-b border-neutral-300 py-2 px-2 items-center justify-between sm:h-[60px] sm:px-8">
			<div className="font-bold text-3xl flex items-center">
				<a
					className="ml-2 hover:opacity-50"
					href="https://soumyadipmoni.vercel.app">
					KindBot UI
				</a>
			</div>
		</div>
	);
};
