/** @format */

import { Message } from "@/types";
import { CornerDownLeft, CornerDownLeftIcon } from "lucide-react";
import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";

interface Props {
	onSend: (message: Message) => void; // Callback function to send a new message
}

export const ChatInput: FC<Props> = ({ onSend }) => {
	const [content, setContent] = useState<string>(); // State variable to store the message content

	const textareaRef = useRef<HTMLTextAreaElement>(null); // Ref to the textarea element

	// Function to handle changes in the textarea
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		if (value.length > 400) {
			alert("Message limit is 400 characters");
			return;
		}

		setContent(value);
	};

	// Function to send the message to the server
	const handleSend = () => {
		// Check if the message is empty
		if (!content) {
			alert("Please enter a message");
			return;
		}

		// Send message with user role and content
		onSend({ role: "user", content });

		// Clear the message content after sending
		setContent("");
	};

	// Function to handle Enter key press for sending messages
	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	// Effect hook to adjust textarea height based on content
	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = "inherit";
			textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
		}
	}, [content]);

	return (
		<div className="relative">
			{/* Textarea for entering the message content */}
			<textarea
				ref={textareaRef}
				className="min-h-[44px] rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200"
				style={{ resize: "none" }}
				placeholder="Type a message..."
				value={content}
				rows={1} // We dynamically adjust the size
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>

			{/* Send button with Arrow Up icon */}
			<button onClick={() => handleSend()}>
				<CornerDownLeftIcon className="absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-pink-500 text-white hover:bg-blue-500" />
			</button>
		</div>
	);
};
