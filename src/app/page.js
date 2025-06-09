import { Button } from "@/components/ui/button";
import { ThemeDropdown } from "./theme-dropdown";
export default function Home() {
	return (
		<main className="w-full max-w-10xl min-h-screen bg-muted flex flex-col mx-auto">
			<div id="navbar" className="w-full py-5 px-10 bg-transparent fixed flex justify-center z-10">
				<div className="w-full max-w-6xl flex justify-between items-center">
					<div className="md:text-2xl text-lg">Sam Art Studio</div>
					<div className="flex lg:gap-2">
						<Button variant="ghost" className="">
							Home
						</Button>
						<Button variant="ghost" className="">
							About Us
						</Button>
						<Button variant="ghost" className="">
							Service
						</Button>
						<Button variant="ghost" className="">
							Project
						</Button>
						<Button variant="ghost" className="">
							Contact
						</Button>
						<ThemeDropdown className="" />
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
