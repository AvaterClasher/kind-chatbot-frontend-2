/** @format */

import Image from "next/image";
import Link from "next/link";
import OpenBio from "@/public/2kindbot.png";
import { Button } from "@/components/UI/button";

// Navabar Component
export default function Navbar() {
	return (
		<div className="flex h-[50px] border-b border-neutral-300 py-2 px-2 items-center justify-between sm:h-[60px] sm:px-8">
			<Link className="mr-auto" href="/">
				<Image
					src={OpenBio}
					alt="OpenBio"
					width={50}
					height={50}
					loading="eager"
				/>
			</Link>
			<Link className="ml-auto" href="/chat">
				<Button>Go to Chat</Button>
			</Link>
		</div>
	);
}
