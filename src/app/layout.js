import { Poppins } from "next/font/google";
import "./globals.css";
import "./themes.css";
import { Analytics } from "@vercel/analytics/next";
import "@radix-ui/themes/styles.css";
import { themes } from "./themes";
import { ThemeProvider } from "next-themes";
const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Sam Art Studio",
	description: "Sam Art Studio profile company.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="id" suppressHydrationWarning>
			<body className={`${poppins.variable} antialiased font-[family-name:var(--font-poppins)]`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange themes={themes.map((t) => t.value)}>
					<Analytics />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
