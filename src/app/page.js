"use client";
import { Button } from "@/components/ui/button";
import { ThemeDropdown } from "./theme-dropdown";
import { Sidebar } from "./sidebar";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
export default function Home() {
	const [{ x, y }, scrollTo] = useWindowScroll();
	return (
		<main className="w-full max-w-10xl min-h-screen bg-muted flex flex-col mx-auto">
			<div id="navbar" className={cn(y > 0 ? "scrolled !bg-background !shadow-foreground/10" : "", "group shadow-xl shadow-transparent transition-all w-full max-w-10xl py-5 px-10 bg-transparent fixed flex justify-center z-10 mx-auto")}>
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
						<Sidebar className="group-[:not(.scrolled)]:text-neutral-100 delay-75" />
					</div>
				</div>
			</div>
			<div id="content" className="w-full flex flex-col">
				<div id="home" className="h-screen max-h-10xl bg-[url('/main-sam-art-new.webp')] bg-cover bg-center brightness-25"></div>
				<div id="about-us" className="h-screen max-h-10xl bg-red-400"></div>
				<div id="service" className="h-screen max-h-10xl bg-lime-400"></div>
				<div id="project" className="h-screen max-h-10xl bg-blue-400"></div>
				<div id="contact" className="h-screen max-h-10xl bg-fuchsia-400"></div>
			</div>
			<div id="footer" className="p-10 bg-muted"></div>
		</main>
	);
}
