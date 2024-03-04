/** @format */

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Github } from "lucide-react";
import Kindbot from "@/public/2kindbot.png";
import { Button } from "@/components/UI/button";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/UI/Navbar";

export default function Home() {
	return (
		<main className={`${GeistSans.className}`}>
			<div className="mx-auto min-h-screen w-full flex-col items-center justify-center md:py-4">
				<Navbar />
				<div className="flex pt-[130px] w-full flex-col items-center justify-center">
					<div className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center py-20">
						<div className="flex h-full w-full flex-col items-center justify-center text-center">
							<Image
								src={Kindbot}
								alt="Kindbot"
								width={75}
								height={75}
								priority
							/>
							<h2 className="font-cal text-xl md:text-2xl">
								Kindbot
							</h2>

							<h1 className="mt-8 font-cal text-3xl md:text-5xl">
								Kill 'em
								<br />
								with kindness
							</h1>

							<p className="mt-4 text-lg md:text-xl">
								Chat with the KindBot for free
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
