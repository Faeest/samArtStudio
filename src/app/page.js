"use client";
import { Button } from "@/components/ui/button";
import { ThemeDropdown } from "./theme-dropdown";
import { Sidebar } from "./sidebar";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
export default function Home() {
	const [{ x, y }, scrollTo] = useWindowScroll();
	return (
		<main className="w-full max-w-10xl min-h-screen bg-muted flex flex-col mx-auto">
			<div id="navbar" className={cn(y > 0 ? "scrolled !bg-background" : "", "group shadow-lg not-[.scrolled]:shadow-transparent transition-all w-full max-w-10xl py-5 px-10 bg-transparent fixed flex justify-center z-60 mx-auto")}>
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
			<div id="content" className="w-full flex flex-col z-50">
				<div id="home" className="h-screen max-h-10xl flex flex-col justify-center items-center bg-transparent overflow-hidden relative">
					<div className="overlay absolute top-0 left-0 right-0 h-screen bg-[url('/main-sam-art-new-dim.webp')] bg-cover bg-center brightness-80 -z-10"></div>
					<div className="w-full max-w-6xl flex flex-col justify-between gap-5 px-10">
						<div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl not-sm:text-center text-neutral-200 font-medium md:leading-tight">
							Empowering Your Digital Identity with <span className="text-amber-400 font-bold">Professional</span> Web Solutions
						</div>
						<div className="md:text-lg text-sm text-neutral-300 max-w-lg sm:text-left text-center">We craft modern, responsive, and user-focused websites that help companies stand out online and grow their digital presence.</div>
						<Button className="not-sm:mx-auto not-sm:mt-5 w-fit rounded-full bg-amber-400 text-neutral-800 hover:bg-amber-500 hover:[&>*]:last:scale-150 hover:!px-6 hover:gap-4 !px-5 transition-all [&>*]:transition-all cursor-pointer flex justify-between items-center gap-2" variant={"default"}>
							<span>Learn More</span> <MoveRightIcon />
						</Button>
					</div>
				</div>
				<div id="about-us" className="h-screen min-h-fit max-h-10xl bg-background flex flex-col justify-center items-center pt-10 pb-10">
					<div className="w-full max-w-6xl flex lg:flex-row flex-col justify-between lg:gap-16 px-10">
						<div className="lg:w-[65%] shrink flex flex-col gap-5 py-16">
							<div className="w-full lg:text-5xl md:text-4xl sm:text-3xl text-2xl sm:text-left text-center text-foreground font-medium">Professional Websites for Modern Businesses</div>
							<div className="w-full lg:text-lg sm:text-base text-xs sm:text-left text-center text-muted-foreground leading-relaxed tracking-wide">SamArt Studio is a creative web development team that specializes in designing professional company profile websites to help businesses establish a strong digital presence. Combining expertise in UI/UX, CMS, and full-stack development, we deliver clean, functional, and responsive websites tailored to each client’s identity. With a collaborative approach and commitment to quality, we strive to turn every project into a powerful and lasting digital representation of your brand. </div>
						</div>
						<div className="lg:w-[35%] grow flex w-full mx-auto lg:h-auto sm:h-80 h-svw transition-all">
							<Image priority width={667} height={1000} src="/aboutus-sam-art-new-dim.webp" alt="Sam Art Studio" className="w-full h-full object-cover rounded-lg" />
						</div>
					</div>
				</div>
				<div id="service" className="h-screen max-h-10xl bg-lime-400"></div>
				<div id="project" className="h-screen max-h-10xl bg-blue-400"></div>
				<div id="contact" className="h-screen max-h-10xl bg-fuchsia-400"></div>
			</div>
			<div id="footer" className="p-10 bg-muted"></div>
		</main>
	);
}
