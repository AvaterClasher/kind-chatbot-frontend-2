/** @format */

import Link from "next/link";
import { Button } from "@/components/UI/button";
import LocalFont from "next/font/local";
import Image from "next/image";
import Kindbot from "@/public/2kindbot.png";

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function Custom404() {
	return (
		<main className={calSans.variable}>
			<div className="container mx-auto flex h-full min-h-screen w-full max-w-3xl flex-col items-center justify-center py-20 text-center">
				<Image
					src={Kindbot}
					alt="Kindbot"
					width={75}
					height={75}
					priority
				/>
				<p className="font-cal text-xl md:text-2xl">404</p>

				<h1 className="mt-8 font-cal text-3xl md:text-5xl">
					This page does not exist.
				</h1>

				<Button className="mt-8">
					<Link href="/" passHref>
						Go to homepage
					</Link>
				</Button>
			</div>
		</main>
	);
}
