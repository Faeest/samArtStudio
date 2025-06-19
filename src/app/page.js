"use client";
import { Button } from "@/components/ui/button";
import { ThemeDropdown } from "./theme-dropdown";
import { Sidebar } from "./sidebar";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ButtonStarted } from "@/components/ui/button_started";
import { BentoGridCustom } from "@/components/bento-2-grid";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "radix-ui";
import { Input } from "@base-ui-components/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconCode, IconPaperclip } from "@tabler/icons-react";
import { CircleUser, Paintbrush } from "lucide-react";
const projectsBento = [
	{
		title: "Web Design & Development",
		description: "Modern, responsive websites tailored for performance and usability.",
		header: <div className={cn("dark:brightness-80 dark:contrast-125 contrast-110 flex flex-1 w-full h-full min-h-[9rem] rounded-sm bg-[url('/service-1.jpg')] bg-cover")}></div>,
		className: "md:col-span-1",
		icon: <IconCode className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "CMS Integration",
		description: "Easy-to-manage websites using platforms like WordPress and Joomla.",
		header: <div className={cn("dark:brightness-80 contrast-110 brightness-95 flex flex-1 w-full h-full min-h-[9rem] rounded-sm bg-[url('/service-2.jpg')] bg-cover")}></div>,
		className: "md:col-span-1",
		icon: <IconPaperclip className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "Ui/UX Development",
		description: "Clean, intuitive designs to enhance user experience and engagement.",
		header: <div className={cn("dark:brightness-70 dark:contrast-110 contrast-80 brightness-95 flex flex-1 w-full h-full min-h-[9rem] rounded-sm bg-[url('/service-3.jpg')] bg-cover")}></div>,
		className: "md:col-span-1",
		icon: <Paintbrush className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "Digital Brand Consulting",
		description: "Strategic branding support to grow your presence in the digital world.",
		header: <div className={cn("dark:brightness-80 dark:contrast-120 flex flex-1 w-full h-full min-h-[9rem] rounded-sm bg-[url('/service-4.jpg')] bg-cover")}></div>,
		className: "md:col-span-1",
		icon: <CircleUser className="h-4 w-4 text-muted-foreground" />,
	},
];
const servicesBento = [
	{
		title: "Web Design & Development",
		description: "Modern, responsive websites tailored for performance and usability.",
		header: <div className={cn("dark:brightness-80 dark:contrast-125 contrast-110 flex flex-1 w-full h-full min-h-[9rem] rounded-sm bg-[url('/service-1.jpg')] bg-cover")}></div>,
		className: "md:col-span-2 shrink",
		icon: <IconCode className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "CMS Integration",
		description: "Easy-to-manage websites using platforms like WordPress and Joomla.",
		header: <div className={cn("dark:brightness-80 contrast-110 brightness-95 flex flex-1 w-full h-full min-h-[9rem] rounded-sm bg-[url('/service-2.jpg')] bg-cover")}></div>,
		className: "md:col-span-1",
		icon: <IconPaperclip className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "Ui/UX Development",
		description: "Clean, intuitive designs to enhance user experience and engagement.",
		header: <div className={cn("dark:brightness-70 dark:contrast-110 contrast-80 brightness-95 flex flex-1 w-full h-full min-h-[9rem] rounded-sm bg-[url('/service-3.jpg')] bg-cover")}></div>,
		className: "md:col-span-1",
		icon: <Paintbrush className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "Digital Brand Consulting",
		description: "Strategic branding support to grow your presence in the digital world.",
		header: <div className={cn("dark:brightness-80 dark:contrast-120 flex flex-1 w-full h-full min-h-[9rem] rounded-sm bg-[url('/service-4.jpg')] bg-cover")}></div>,
		className: "md:col-span-2 shrink",
		icon: <CircleUser className="h-4 w-4 text-muted-foreground" />,
	},
];
export default function Home() {
	const [{ x, y }, scrollTo] = useWindowScroll();
	return (
		<main className="w-full max-w-10xl min-h-screen bg-muted flex flex-col mx-auto">
			<div id="navbar" className={cn(y > 0 ? "scrolled !bg-background" : "", "group shadow-lg not-[.scrolled]:shadow-transparent transition-all w-full max-w-10xl py-5 px-10 bg-transparent fixed flex justify-center z-30 mx-auto")}>
				<div className="w-full max-w-6xl flex justify-between items-center gap-5">
					<div className="md:text-2xl text-lg group-[:not(.scrolled)]:text-neutral-100 delay-75">Sam Art Studio</div>
					<div className="lg:flex lg:gap-2 hidden">
						<Button variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							Home
						</Button>
						<Button variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							About Us
						</Button>
						<Button variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							Service
						</Button>
						<Button variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							Project
						</Button>
						<Button variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							Contact
						</Button>
						<ThemeDropdown className="group-[:not(.scrolled)]:text-neutral-100 delay-75" />
					</div>
					<div className="lg:hidden flex">
						<Sidebar className="group-[:not(.scrolled)]:text-neutral-100 delay-75 z-80" />
					</div>
				</div>
			</div>
			<div id="content" className="w-full flex flex-col z-20 bg-background">
				<div id="home" className="h-screen max-h-10xl flex flex-col justify-center items-center bg-transparent overflow-hidden relative">
					<div className="overlay absolute top-0 left-0 right-0 h-screen bg-[url('/main-sam-art-new-dim.webp')] bg-cover bg-center brightness-80 -z-10"></div>
					<div className="w-full max-w-6xl flex flex-col justify-between gap-5 px-10">
						<div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl not-sm:text-center text-neutral-200 font-medium md:leading-tight">
							Empowering Your Digital Identity with <span className="text-amber-400 font-bold">Professional</span> Web Solutions
						</div>
						<div className="md:text-lg text-sm text-neutral-300 max-w-lg sm:text-left text-center">We craft modern, responsive, and user-focused websites that help companies stand out online and grow their digital presence.</div>
						<ButtonStarted className="not-sm:mx-auto not-sm:mt-5">Learn More</ButtonStarted>
					</div>
				</div>
				<div id="about-us" className="h-screen min-h-fit max-h-10xl bg-background flex flex-col justify-center items-center pt-10 pb-10">
					<div className="w-full max-w-6xl flex lg:flex-row flex-col justify-between lg:gap-16 px-10">
						<div className="lg:w-[65%] shrink flex flex-col gap-5 py-16">
							<div className="w-full lg:text-5xl md:text-4xl sm:text-3xl text-2xl sm:text-left text-center text-foreground font-medium">Professional Websites for Modern Businesses</div>
							<div className="w-full lg:text-base sm:text-base text-xs sm:text-left text-center text-muted-foreground leading-relaxed tracking-wide">SamArt Studio is a creative web development team that specializes in designing professional company profile websites to help businesses establish a strong digital presence. Combining expertise in UI/UX, CMS, and full-stack development, we deliver clean, functional, and responsive websites tailored to each client’s identity. With a collaborative approach and commitment to quality, we strive to turn every project into a powerful and lasting digital representation of your brand. </div>
						</div>
						<div className="lg:w-[35%] grow flex w-full mx-auto lg:h-auto sm:h-80 h-svw transition-all">
							<Image priority width={667} height={1000} src="/aboutus-sam-art-new-dim.webp" alt="Sam Art Studio" className="w-full h-full object-cover rounded-lg" />
						</div>
					</div>
				</div>
				<div id="service" className="h-screen min-h-fit max-h-10xl bg-background flex flex-col justify-center items-center pt-10 pb-20 relative">
					<div className={cn("absolute inset-0", "[background-size:20px_20px]", "[background-image:radial-gradient(var(--secondary)_1px,transparent_1px)]")} />
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:linear-gradient(0deg,transparent_20%,black)]"></div>
					<div className="w-full max-w-6xl flex flex-col justify-between lg:gap-16 px-10 z-80 gap-10 pt-5">
						<div className="w-full text-center text-foreground text-5xl">Our Services</div>
						<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-10 bg-transparent">
							{servicesBento.map((item, i) => (
								<BentoGridItem key={"service-" + i} title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} />
							))}
						</BentoGrid>
					</div>
				</div>
				<div id="project" className="h-screen min-h-fit max-h-10xl bg-card dark:bg-card/50 flex flex-col justify-center items-center pt-10 pb-20 relativ">
					<div className="w-full flex flex-col justify-between lg:gap-16 px-10 z-80 gap-10 pt-5">
						<div className="w-full text-center text-foreground text-5xl">Projects</div>
						<BentoGrid className="md:max-w-none max-w-4xl mx-auto md:auto-rows-[20rem] z-10 bg-transparent xl:!grid-cols-4 lg:!grid-cols-3 md:!grid-cols-2">
							{projectsBento.map((item, i) => (
								<BentoGridItem key={"project-" + i} title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} />
							))}
						</BentoGrid>
					</div>
				</div>
				<div id="contact" className="h-screen max-h-10xl bg-emerald-400"></div>
			</div>
			<div id="footer" className="p-10 bg-muted"></div>
		</main>
	);
}
