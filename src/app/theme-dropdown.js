"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IconCircleFilled } from "@tabler/icons-react";
import { themes } from "./themes";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { startCase } from "lodash";
function CheckerBadge({ isActive }) {
	return <IconCircleFilled className={cn("ml-auto size-3 text-primary opacity-0 transition-opacity", isActive && "opacity-100")} />;
}
export function ThemeDropdown({ className }) {
	const { theme, setTheme } = useTheme();
	const isActive = (value) => theme === value;
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className={className} variant="ghost">
					Theme
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 p-0" align="start">
				<DropdownMenuGroup className="">
					{themes.map((theme) => (
						<Button key={theme.value} onClick={() => setTheme(theme.value)} className={cn("dark:hover:backdrop-brightness-0 hover:backdrop-brightness-200 relative flex items-center gap-2 px-2 py-1.5 text-sm w-full cursor-pointer rounded-none")} variant="secondary">
							<theme.icon className="size-4 shrink-0" />
							<span className="truncate">{startCase(theme.value)}</span>
							<CheckerBadge isActive={isActive(theme.value)} />
						</Button>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
