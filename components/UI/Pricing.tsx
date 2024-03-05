/** @format */

import { useState } from "react";
import Link from "next/link";
import { Check, HelpCircle, X } from "lucide-react";
import Confetti from "react-dom-confetti";
import { Badge } from "@/components/UI/badge";
import { Button } from "@/components/UI/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/UI/tooltip";
import { PLANS } from "@/lib/plans";

type Billing = "monthly" | "annually";

export const PricingCards = ({ billing }: { billing: Billing }) => {
	return (
		<div
			id="pricing"
			className="flex w-full flex-col gap-6 md:grid md:grid-cols-2">
			{PLANS.map((plan) => (
				<div
					key={plan.name}
					className="flex w-full flex-col rounded-lg border border-border bg-background px-6 py-3 md:px-8">
					<p className="font-cal text-2xl">{plan.name}</p>

					<p className="mt-1 text-muted-foreground">
						{plan.description}
					</p>

					<p className="mt-3 font-cal text-6xl">
						$
						{plan.price[billing as keyof typeof plan.price]
							?.amount / (billing === "annually" ? 12 : 1)}
					</p>

					<p className="mt-2 text-muted-foreground">
						per month
						{billing === "annually" && <>, billed annually</>}
					</p>

					<div className="mt-4 flex w-full flex-col gap-2 text-left">
						{plan.features.map((f, idx) => (
							<span
								key={idx}
								className="inline-flex items-center">
								{f.notAvailable ? (
									<X
										className="mr-4 inline-block text-muted-foreground"
										size={16}
									/>
								) : (
									<Check
										className="mr-4 inline-block text-green-500"
										size={16}
									/>
								)}
								{f.text}
								{f.tooltip && (
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger className="ml-2">
												<HelpCircle
													className="inline-block text-muted-foreground"
													size={16}
												/>
											</TooltipTrigger>
											<TooltipContent>
												<p>{f.tooltip}</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								)}
							</span>
						))}
					</div>

					<div className="my-auto" />

					{plan.footer && (
						<p className="mt-4 text-xs text-muted-foreground">
							{plan.footer}
						</p>
					)}
				</div>
			))}
		</div>
	);
};

export default function Pricing() {
	const [billing, setBilling] = useState<Billing>("monthly");

	return (
		<div className="flex w-full flex-col mb-20">
			<h1 className="font-cal text-3xl md:text-5xl">
				Simple, transparent
				<br />
				pricing
			</h1>

			<p className="mt-4 text-lg md:text-xl">
				Start with a free plan and upgrade as you grow.
			</p>

			<Tabs
				defaultValue="monthly"
				value={billing}
				onValueChange={(v) => setBilling(v as Billing)}
				className="mt-8 flex w-full flex-col items-center">
				<Confetti
					active={billing === "annually"}
					config={{ elementCount: 250, spread: 100 }}
				/>
				<TabsList className="w-max">
					<TabsTrigger value="monthly">Monthly</TabsTrigger>
					<TabsTrigger value="annually" className="gap-x-2">
						Annually
						<Badge>2 months free</Badge>
					</TabsTrigger>
				</TabsList>

				<TabsContent value="monthly" className="mt-4 w-full">
					<PricingCards billing="monthly" />
				</TabsContent>

				<TabsContent value="annually" className="mt-4 w-full">
					<PricingCards billing="annually" />
				</TabsContent>

				<div className="mt-6 flex w-full flex-col rounded-lg border border-border bg-background px-3 py-3 text-center md:px-8">
					<p className="font-cal text-2xl">Enterprise</p>

					<p className="mt-1 text-muted-foreground">
						Need more? Contact us for a custom free plan for your
						company completely free of cost.
					</p>

					<Link
						href="https://calendly.com/avater-clasher/30min"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-5">
						<Button>Schedule call</Button>
					</Link>
				</div>
			</Tabs>
		</div>
	);
}
