"use client";
import { Button } from "@/components/ui/button";
import { ThemeDropdown } from "./theme-dropdown";
import { Sidebar } from "./sidebar";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ButtonStarted } from "@/components/ui/button_started";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconBrandFacebook, IconBrandInstagram, IconBrandPinterest, IconBrandX, IconCode, IconMailFilled, IconPaperclip, IconPhone, IconPhoneFilled } from "@tabler/icons-react";
import { CircleUser, Paintbrush } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useRef } from "react";
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
	const topRef = useRef(null);
	const [{ x, y }, scrollTo] = useWindowScroll();
	return (
		<main className="w-full max-w-10xl min-h-screen bg-muted flex flex-col mx-auto">
			<div id="navbar" className={cn(y > 0 ? "scrolled !bg-background" : "", "group shadow-lg not-[.scrolled]:shadow-transparent transition-all w-full max-w-10xl py-5 px-10 bg-transparent fixed flex justify-center z-30 mx-auto")}>
				<div className="w-full max-w-6xl flex justify-between items-center gap-5">
					<div className="md:text-2xl text-lg group-[:not(.scrolled)]:text-neutral-100 delay-75">Sam Art Studio</div>
					<div className="lg:flex lg:gap-2 hidden">
						<Button asChild variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							<a href="#home">Home</a>
						</Button>
						<Button asChild variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							<a href="#about-us">About Us</a>
						</Button>
						<Button asChild variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							<a href="#service">Service</a>
						</Button>
						<Button asChild variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							<a href="#project">Project</a>
						</Button>
						<Button asChild variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							<a href="#contact">Contact</a>
						</Button>
						<Button asChild variant="ghost" className="group-[:not(.scrolled)]:text-neutral-100 delay-75">
							<a href="https://studiosamart.blogspot.com/">News</a>
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
						<motion.div viewport={{ root: topRef }} transition={{ ease: "easeOut" }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl not-sm:text-center text-neutral-200 font-medium md:leading-tight">
							Empowering Your Digital Identity with <span className="text-amber-400 font-bold">Professional</span> Web Solutions
						</motion.div>
						<motion.div viewport={{ root: topRef }} transition={{ ease: "easeOut", delay: 0.2 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
							<div className="md:text-lg text-sm text-neutral-300 max-w-lg sm:text-left text-center">We craft modern, responsive, and user-focused websites that help companies stand out online and grow their digital presence.</div>
						</motion.div>
						<motion.div viewport={{ root: topRef }} transition={{ ease: "easeOut", delay: 0.4 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
							<ButtonStarted className="not-sm:mx-auto not-sm:mt-5">Learn More</ButtonStarted>
						</motion.div>
						<div ref={topRef} className="w-full"></div>
					</div>
				</div>
				<div id="about-us" className="h-screen min-h-fit max-h-10xl bg-background flex flex-col justify-center items-center pt-10">
					<div className="w-full max-w-6xl flex lg:flex-row flex-col justify-between lg:gap-16 px-10">
						<div className="lg:w-[65%] shrink flex flex-col gap-5 py-16">
							<motion.div transition={{ ease: "easeOut" }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="w-full lg:text-5xl md:text-4xl sm:text-3xl text-2xl sm:text-left text-center text-foreground font-medium">
								Professional Websites for Modern Businesses
							</motion.div>
							<motion.div transition={{ ease: "easeOut", delay: 0.2 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="w-full lg:text-base sm:text-base text-xs sm:text-left text-center text-muted-foreground leading-relaxed tracking-wide">
								SamArt Studio is a creative web development team that specializes in designing professional company profile websites to help businesses establish a strong digital presence. Combining expertise in UI/UX, CMS, and full-stack development, we deliver clean, functional, and responsive websites tailored to each client’s identity. With a collaborative approach and commitment to quality, we strive to turn every project into a powerful and lasting digital representation of your brand.{" "}
							</motion.div>
						</div>
						<motion.div transition={{ ease: "easeOut", delay: 0.4 }} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-[35%] grow flex w-full mx-auto lg:h-auto sm:h-80 h-svw transition-all">
							<Image priority width={667} height={1000} src="/aboutus-sam-art-new-dim.webp" alt="Sam Art Studio" className="w-full h-full object-cover rounded-lg" />
						</motion.div>
					</div>
				</div>
				<div id="service" className="h-screen min-h-fit max-h-10xl bg-background flex flex-col justify-center items-center pt-20 pb-20 relative">
					<div className={cn("absolute inset-0", "[background-size:20px_20px]", "[background-image:radial-gradient(var(--secondary)_1px,transparent_1px)]")} />
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:linear-gradient(0deg,transparent_20%,black)]"></div>
					<div className="w-full max-w-6xl flex flex-col justify-between lg:gap-16 px-10 z-80 gap-10 pt-5">
						<motion.div transition={{ ease: "easeOut" }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="w-full text-center text-foreground text-5xl">
							Our Services
						</motion.div>
						<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-10 bg-transparent">
							{servicesBento.map((item, i) => (
								<motion.div className={item.className} key={"service-" + i} transition={{ ease: "easeOut", delay: i * 0.1 + 0.1 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
									<BentoGridItem title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} />
								</motion.div>
							))}
						</BentoGrid>
					</div>
				</div>
				<div id="project" className="h-screen min-h-fit max-h-10xl bg-card dark:bg-card/50 flex flex-col justify-center items-center pt-10 pb-20 relative">
					<div className="w-full flex flex-col justify-between lg:gap-16 px-10 z-80 gap-10 pt-5">
						<motion.div transition={{ ease: "easeOut" }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="w-full text-center text-foreground text-5xl">
							Projects
						</motion.div>
						<BentoGrid className="md:max-w-none max-w-4xl mx-auto md:auto-rows-[20rem] z-10 bg-transparent xl:!grid-cols-4 lg:!grid-cols-3 md:!grid-cols-2">
							{projectsBento.map((item, i) => (
								<motion.div className={item.className} key={"project-" + i} transition={{ ease: "easeOut", delay: i * 0.1 + 0.1 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
									<BentoGridItem title={item.title} description={item.description} header={item.header} className={"bg-popover"} icon={item.icon} />
								</motion.div>
							))}
						</BentoGrid>
					</div>
				</div>
				<div id="contact" className="h-screen min-h-fit max-h-10xl bg-muted lg:p-20 pb-20">
					<div className="w-full flex flex-col lg:flex-row justify-between px-10 z-80 lg:p-6 pt-10">
						<div className="grow flex flex-col bg-card p-6 w-full shadow-lg">
							<motion.div transition={{ ease: "easeOut", delay: 0 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
								Get in touch with us
							</motion.div>
							<div className="grid w-full grid-cols-2 gap-5 my-5">
								<motion.div transition={{ ease: "easeOut", delay: 0.1 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="grid items-center gap-3 col-span-1">
									<Label htmlFor="email">Email</Label>
									<Input type="email" id="email" placeholder="john_doe@gmail.com" />
								</motion.div>
								<motion.div transition={{ ease: "easeOut", delay: 0.2 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="grid items-center gap-3 col-span-1">
									<Label htmlFor="email">Name</Label>
									<Input type="email" id="email" placeholder="John Doe" />
								</motion.div>
								<motion.div transition={{ ease: "easeOut", delay: 0.3 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="grid items-center gap-3 col-span-2">
									<Label htmlFor="email">Subject</Label>
									<Input type="email" id="email" placeholder="Subject" />
								</motion.div>
								<motion.div transition={{ ease: "easeOut", delay: 0.4 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="grid items-center gap-3 col-span-2">
									<Label htmlFor="email">Message</Label>
									<Textarea type="email" id="email" placeholder="Message" />
								</motion.div>
								<motion.div transition={{ ease: "easeOut", delay: 0.5 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="flex justify-end col-span-2">
									<Button className="w-fit cursor-pointer">Send Message</Button>
								</motion.div>
							</div>
						</div>
						<div className="shrink flex justify-center items-center p-3 dark:bg-yellow-500 bg-yellow-400 shadow-lg">
							<motion.div transition={{ ease: "easeOut", delay: 0.6 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-full overflow-hidden lg:w-md lg:max-w-sm w-full h-full not-lg:max-h-92 aspect-square">
								<div id="gmap-canvas" className="h-full w-full max-w-full">
									<iframe style={{ height: "100%", width: "100%", border: 0 }} frameBorder="0" src="https://www.google.com/maps/embed/v1/search?q=skiti+malang&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			<div id="footer" className="p-10 dark:bg-yellow-500 bg-yellow-400 flex flex-wrap md:flex-row flex-col justify-center items-baseline gap-10">
				<div className="socials flex flex-col text-neutral-950 not-md:w-full">
					<span className="font-bold not-md:text-center w-full">SAM ART STUDIO</span>
					<div className="flex gap-2 md:justify-start justify-center">
						<IconBrandInstagram />
						<IconBrandFacebook />
						<IconBrandX />
						<IconBrandPinterest />
					</div>
				</div>
				<div className="explore flex flex-col text-neutral-950 not-md:w-full">
					<span className="font-bold not-md:text-center w-full">EXPLORE</span>
					<a className="not-md:text-center w-full" href="#home">
						Home
					</a>
					<a className="not-md:text-center w-full" href="#about-us">
						About Us
					</a>
					<a className="not-md:text-center w-full" href="#service">
						Service
					</a>
					<a className="not-md:text-center w-full" href="#project">
						Project
					</a>
					<a className="not-md:text-center w-full" href="#contact">
						Contact
					</a>
				</div>
				<div className="explore flex flex-col text-neutral-950 not-md:w-full gap-1">
					<span className="font-bold not-md:text-center w-full">CONTACT</span>
					<div className="max-w-64 not-md:text-center mx-auto mb-1">Jl. Raya Tidar No.100, Karangbesuki, Kec. Sukun, Kota Malang, Jawa Timur 65146</div>
					<a href="#" className="flex items-center gap-1 not-md:justify-center w-full">
						<IconPhoneFilled /> +6200000000
					</a>
					<a href="#" className="flex items-center gap-1 not-md:justify-center w-full">
						<IconMailFilled /> samartstudio@gmail.com
					</a>
				</div>
				<div className="explore flex flex-col text-neutral-950 not-md:w-full gap-1">
					<span className="font-bold not-md:text-center w-full">GET LATEST NEWS FROM US</span>
					<Input type="email" placeholder="Enter your email" className="w-full mb-2 rounded-full !placeholder-neutral-800" />
					<Button className="rounded-full w-fit">Subscribe</Button>
				</div>
				<div className="w-full border border-black/20"></div>
				<div className="w-full text-center text-neutral-950 not-md:text-left">
					<span className="font-semibold">© 2024 Sam Art Studio. All rights reserved.</span>
				</div>
			</div>
		</main>
	);
}
