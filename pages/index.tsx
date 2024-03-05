/** @format */

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Github } from "lucide-react";
import Kindbot from "@/public/2kindbot.png";
import { Button } from "@/components/UI/button";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/UI/Navbar";
import Background from "@/components/UI/background/background";
import { RoughNotation } from "react-rough-notation";
import LocalFont from "next/font/local";
import Pricing from "@/components/UI/Pricing";
import { useEffect } from "react";

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function Home() {
	useEffect(() => {
		console.info(
			`Taking a peek huh? Check out the source code: https://github.com/AvaterClasher/kind-chatbot-frontend-2 \n\n`
		);
	}, []);

	return (
		<main className={`${GeistSans.className} ${calSans.variable}`}>
			<Background />
			<div className="mx-auto min-h-screen w-full flex-col items-center justify-center ">
				<Navbar />
				<div className="flex pt-[130px] w-full flex-col items-center justify-center">
					<div className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center">
						<div className="flex h-full w-full flex-col items-center justify-center text-center">
							<Image
								src={Kindbot}
								alt="Kindbot"
								width={100}
								height={100}
								priority
							/>
							<h2 className="text-xl md:text-2xl font-cal">
								Kindbot
							</h2>

							<h1 className="mt-8 text-3xl md:text-5xl font-cal">
								Kill &apos;em
								<br />
								with kindness
							</h1>

							<RoughNotation
								type="underline"
								strokeWidth={3}
								animationDuration={1500}
								color="rgb(139 8 9)"
								animate
								show>
								<p className="mt-4 text-lg md:text-xl">
									Chat with the KindBot for free
								</p>
							</RoughNotation>

							<div className="mt-12 flex items-center gap-x-4">
								<Link href="/chat" passHref>
									<Button className="min-w-full whitespace-nowrap">
										Start Chatting
									</Button>
								</Link>

								<Link
									href="https://github.com/AvaterClasher/kindbot-frontend-2"
									target="_blank"
									rel="noopener noreferrer"
									passHref>
									<Button className="whitespace-nowrap">
										<Github size={24} className="mr-2" />
										Star on Github
									</Button>
								</Link>
							</div>

							<Button
								variant="link"
								size="sm"
								asChild
								className="mt-2 transition-transform ease-in-out active:scale-95">
								<Link
									href="https://kindness.ai"
									target="_blank"
									rel="noopener noreferrer">
									Check out the real Kindness team
									<ChevronRight size={12} className="ml-2" />
								</Link>
							</Button>

							<div className="my-12" />
							<Pricing />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
