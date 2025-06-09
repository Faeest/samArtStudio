import { LoginForm } from "@/components/login-form";
export default function Home() {
	return (
		<main className="w-full min-h-screen bg-muted flex flex-col">
			<div id="navbar" className="w-full p-10 bg-primary"></div>
			<div id="content" className="w-full flex flex-col">
				<div id="home" className="min-h-screen bg-amber-400"></div>
				<div id="about-us" className="min-h-screen bg-red-400"></div>
				<div id="service" className="min-h-screen bg-lime-400"></div>
				<div id="project" className="min-h-screen bg-blue-400"></div>
				<div id="contact" className="min-h-screen bg-fuchsia-400"></div>
			</div>
			<div id="footer" className="p-10 bg-muted"></div>
		</main>
	);
}
