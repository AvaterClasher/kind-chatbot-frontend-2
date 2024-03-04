/** @format */

import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import Head from "next/head";
import { Navbar } from "@/components/UI/Navbar";
import { Footer } from "@/components/UI/Footer";
import { Chat } from "@/components/Chat/Chat-Provider";
import { Message } from "@/types";
import { FC, useState, useRef, useEffect } from "react";

export default function chat_interface() {
	const [messages, setMessages] = useState<Message[]>([]); // State variable for the message element
	const [loading, setLoading] = useState<boolean>(false); // State variable for loading state

	const messagesEndRef = useRef<HTMLDivElement>(null); // Ref to the last message element

	// Function to scroll to the bottom of the chat list smoothly
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// Function to reset the chat conversation to its initial state
	const handleReset = () => {
		setMessages([
			{
				role: "assistant",
				content: `Hi there! I'm KindBot, an AI assistant. (" Please try writing Should Kindness Hire Soumyadip Moni ? ")`,
			},
		]);
	};

	// Function to send a new message from the user to the chatbot
	const handleSend = async (message: Message) => {
		const updatedMessages = [...messages, message]; // Update messages with the new message

		setMessages(updatedMessages); // Update state with the new messages
		setLoading(true); // Set loading state to true

		const response = await fetch(
			// Change Me please {Either with a ngrok_domain/chat or with a http://127.0.0.1:8000/chat}
			// Please add a /chat at the end
			"https://4bd0-103-161-223-11.ngrok-free.app/chat",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user_message: message.content,
				}),
			}
		);

		// Handle potential errors from the API call
		if (!response.ok) {
			setLoading(false);
			throw new Error(response.statusText);
		}

		const data = await response.json();

		setLoading(false); // Set loading state to false after receiving response

		setMessages((messages) => [
			// Update messages with the response from the chatbot
			...messages,
			{
				role: "assistant",
				content: data.chatbot_response,
			},
		]);
	};

	// Effect hook to scroll to the bottom after new messages are received
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	// Effect hook to initialize the chat with a welcome message from the assistant
	useEffect(() => {
		setMessages([
			{
				role: "assistant",
				content: `Hi there! I'm Kindbot, an AI assistant. (" Please try writing Should Kindness Hire Soumyadip Moni ? ")`,
			},
		]);
	}, []);

	return (
		<>
			<Head>
				<title>Kindbot</title>
				<meta name="description" content="Kind-Chatbot" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${GeistSans.className}`}>
				<div className="flex flex-col h-screen">
					<Navbar />
					<div className="flex-1 overflow-auto pb-4 sm:px-10 sm:pb-10">
						<div className="max-w-[800px] mx-auto mt-4 sm:mt-12">
							<Chat
								messages={messages}
								loading={loading}
								onSend={handleSend}
								onReset={handleReset}
							/>
							<div ref={messagesEndRef} />
						</div>
					</div>
					<Footer />
				</div>
			</main>
		</>
	);
}
