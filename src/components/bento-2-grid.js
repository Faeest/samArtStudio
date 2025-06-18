import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconCode, IconPaperclip } from "@tabler/icons-react";
import { CircleUser, Paintbrush } from "lucide-react";
import { cn } from "@/lib/utils";

export function BentoGridCustom() {
	const Skeleton = () => <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl [mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)] border border-transparent bg-muted"></div>;
	const items = [
		{
			title: "Web Design & Development",
			description: "Modern, responsive websites tailored for performance and usability.",
			header: <div className={cn("dark:brightness-80 dark:contrast-125 contrast-110 flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[url('/service-1.jpg')] bg-cover")}></div>,
			className: "md:col-span-2",
			icon: <IconCode className="h-4 w-4 text-muted-foreground" />,
		},
		{
			title: "CMS Integration",
			description: "Easy-to-manage websites using platforms like WordPress and Joomla.",
			header: <div className={cn("dark:brightness-80 contrast-110 brightness-95 flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[url('/service-2.jpg')] bg-cover")}></div>,
			className: "md:col-span-1",
			icon: <IconPaperclip className="h-4 w-4 text-muted-foreground" />,
		},
		{
			title: "Ui/UX Development",
			description: "Clean, intuitive designs to enhance user experience and engagement.",
			header: <div className={cn("dark:brightness-70 dark:contrast-110 contrast-80 brightness-95 flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[url('/service-3.jpg')] bg-cover")}></div>,
			className: "md:col-span-1",
			icon: <Paintbrush className="h-4 w-4 text-muted-foreground" />,
		},
		{
			title: "Digital Brand Consulting",
			description: "Strategic branding support to grow your presence in the digital world.",
			header: <div className={cn("dark:brightness-80 dark:contrast-120 flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[url('/service-4.jpg')] bg-cover")}></div>,
			className: "md:col-span-2",
			icon: <CircleUser className="h-4 w-4 text-muted-foreground" />,
		},
	];

	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-10 bg-background">
			{items.map((item, i) => (
				<BentoGridItem key={i} title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} />
			))}
		</BentoGrid>
	);
}
