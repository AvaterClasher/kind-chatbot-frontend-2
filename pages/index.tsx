import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import Head from "next/head";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";

export default function Home() {
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
          <Footer/>
        </div>
      </main>;
		</>
	);
}
