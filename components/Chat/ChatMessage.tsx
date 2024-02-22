/** @format */

import { Message } from "@/types";
import { FC } from "react";

interface Props {
	message: Message; 
}

export const ChatMessage: FC<Props> = ({ message }) => {
	return (
		<div
			className={`flex flex-col ${
				message.role === "assistant" ? "items-start" : "items-end"
			}`}>
			{/* If the message is from the assistant set the color to pink and if from ther user set the color to blue */}
			<div
				className={`flex items-center ${
					message.role === "assistant"
						? "bg-pink-500 text-white"
						: "bg-blue-500 text-white"
				} rounded-2xl px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
				style={{ overflowWrap: "anywhere" }}>
				{/* Display the message content  */}
				<div>{message.content}</div> 
			</div>
		</div>
	);
};
