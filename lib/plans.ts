/** @format */

export const PLANS: {
	name: string;
	description: string;
	price: Record<"monthly" | "annually", { amount: number; priceId?: string }>;
	features: {
		text: string;
		tooltip?: string;
		notAvailable?: boolean;
	}[];
	footer?: string;
}[] = [
	{
		name: "Free",
		description: "Free forever",
		price: {
			monthly: {
				amount: 0,
			},
			annually: {
				amount: 0,
			},
		},
		features: [
			{
				text: "10 prompts",
			},
			{
				text: "Answers",
				tooltip: "Answers for any question",
			},
			{
				text: "Custom API",
				tooltip: "Get you own API key",
				notAvailable: true,
			},
			{
				text: "Remove branding",
				tooltip: "Remove branding from your API responses",
				notAvailable: true,
			},
			{
				text: "Image generation",
				tooltip: "Image generation support also available",
				notAvailable: true,
			},
		],
		footer: "All features might not be available yet",
	},
	{
		name: "Freedom",
		description: "Even More Freedom for the Pro's",
		price: {
			monthly: {
				amount: 0,
			},
			annually: {
				amount: 0,
			},
		},
		features: [
			{
				text: "Unlimited links",
			},
			{
				text: "Advanced analytics",
				tooltip: "See how many people view your links",
			},
			{
				text: "Custom API",
				tooltip: "Get you own API key directly from google",
			},
			{
				text: "Remove branding",
				tooltip: "Remove branding from your API responses",
			},
			{
				text: "Image generation",
				tooltip: "Image generation support also available",
			},
			{
				text: "Priority support",
			},
		],
		footer: "All features might not be available yet",
	},
];
