/** @format */

import { FC } from "react";
import { Button } from "../UI/button";

interface Props {
	onReset: () => void; // Callback function to reset
}

export const ResetChat: FC<Props> = ({ onReset }) => {
	return (
		<div className="flex flex-row items-center">
			<Button
				className="text-sm font-semibold rounded-lg px-2 py-2 mb-8 focus:outline-none focus:ring-1 focus:ring-neutral-300 sm:text-base"
				onClick={() => onReset()}>
				Reset
			</Button>
		</div>
	);
};
