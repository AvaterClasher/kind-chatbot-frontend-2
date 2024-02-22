/** @format */

import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import Head from "next/head";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Chat } from "@/components/Chat/Chat";
import { Message } from "@/types";
import { FC, useState, useRef, useEffect } from "react";

export default function Home() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const handleReset = () => {
		setMessages([
			{
				role: "assistant",
				content: `Hi there! I'm KindBot, an AI assistant.`,
			},
		]);
	};

	const handleSend = async (message: Message) => {
		const updatedMessages = [...messages, message];

		setMessages(updatedMessages);
		setLoading(true);

		const response = await fetch("https://af1f-103-106-200-60.ngrok-free.app/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user_message: message.content,
			}),
		});

		if (!response.ok) {
			setLoading(false);
			throw new Error(response.statusText);
		}

		const data = await response.json();

		setLoading(false);

		setMessages((messages) => [
			...messages,
			{
				role: "assistant",
				content: data.chatbot_response,
			},
		]);
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		setMessages([
			{
				role: "assistant",
				content: `Hi there! I'm Kindbot, an AI assistant.`,
			},
		]);
	}, []);

	return (
		<>
			<Head>
				<title>Kind-Chatbot</title>
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
