/** @format */

import { Message } from "@/types";
import { FC } from "react";
import { ResetChat } from "./ResetChat";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";

interface Props {
	messages: Message[]; // Array of message objects to display
	loading: boolean; // Indicates whether the chatbot is processing a message
	onSend: (message: Message) => void; // Callback function to send a new message
	onReset: () => void; // Callback function to reset the chat conversation
}

export const Chat: FC<Props> = ({ messages, loading, onSend, onReset }) => {
	return (
		<>
			{/* Reset button for clearing the chat conversation */}
			<div className="flex flex-row justify-between items-center mb-4 sm:mb-8">
				<ResetChat onReset={onReset} />
			</div>

			<div className="flex flex-col rounded-lg px-2 border-neutral-300 sm:p-4 sm:border">
				{/* Render each message from the messages array */}
				{messages.map((message, index) => (
					<div key={index} className="my-1 sm:my-1.5">
						{/* Render the message component with the specific message data */}
						<ChatMessage message={message} />
					</div>
				))}

				{/* Show loading indicator when the chatbot is processing a message */}
				{loading && (
					<div className="my-1 sm:my-1.5">
						<ChatLoader />
					</div>
				)}

				{/* Position the chat input at the bottom with some margin */}
				<div className="mt-4 bottom-[56px] sm:mt-8 left-0 w-full">
					<ChatInput onSend={onSend} />
				</div>
			</div>
		</>
	);
};
