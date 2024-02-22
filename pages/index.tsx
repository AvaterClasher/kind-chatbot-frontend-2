import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import Head from "next/head";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Chat } from "@/components/Chat/Chat";
import { Message } from "@/types";
import { FC, useState } from "react";


export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
          <Navbar/>
          <div className="flex-1 overflow-auto pb-4">
            <Chat message={messages} loading={loading}/>
          </div>
          <Footer/>
        </div>
      </main>;
		</>
	);
}
