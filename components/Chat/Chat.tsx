/** @format */

import { Message } from "@/types";
import { FC } from "react";
import { ResetChat } from "./ResetChat";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface Props {
	messages: Message[];
	loading: boolean;
	onSend: (message: Message) => void;
	onReset: () => void;
}

export const Chat: FC<Props> = ({ messages, loading, onSend, onReset }) => {
	return (
		<>
			<div className="flex flex-row justify-between items-center mb-4">
				<ResetChat onReset={onReset} />
			</div>

			<div className="flex flex-col rounded-lg px-2 border-neutral-300">
				{messages.map((message, index) => (
					<div key={index} className="my-1">
						<ChatMessage message={message} />
					</div>
				))}

				<div className="mt-4 bottom-[56px] left-0 w-full">
					<ChatInput onSend={onSend} />
				</div>
			</div>
		</>
	);
};
