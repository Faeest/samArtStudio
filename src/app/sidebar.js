import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Grip } from "lucide-react";
import { ThemeDropdown } from "./theme-dropdown";
import { cn } from "@/lib/utils";

export function Sidebar({ className }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" className={cn("sm:size-12 size-8", className)} variant="ghost">
					<Grip className="sm:scale-200 scale-125" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className={"w-xs max-w-screen"}>
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className="grid flex-1 auto-rows-min gap-2 px-4">
					<Button variant="ghost" className="text-start">
						Home
					</Button>
					<Button variant="ghost" className="text-start">
						About Us
					</Button>
					<Button variant="ghost" className="text-start">
						Service
					</Button>
					<Button variant="ghost" className="text-start">
						Project
					</Button>
					<Button variant="ghost" className="text-start">
						Contact
					</Button>
					<ThemeDropdown className="text-start" />
				</div>
				<SheetFooter>
					<Button type="submit">Save changes</Button>
					<SheetClose asChild>
						<Button variant="outline">Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
