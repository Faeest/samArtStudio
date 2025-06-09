"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IconCircleFilled } from "@tabler/icons-react";
import { themes } from "./themes";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
function CheckerBadge({ isActive }) {
	return <IconCircleFilled className={cn("ml-auto size-3 text-primary opacity-0 transition-opacity", isActive && "opacity-100")} />;
}
export function ThemeDropdown() {
	const { theme, setTheme } = useTheme();
	const isActive = (value) => theme === value;
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost">Theme</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuGroup>
					{themes.map((theme) => (
						<DropdownMenuItem key={theme.value} onClick={() => setTheme(theme.value)}>
							<theme.icon className="size-4 shrink-0" />
							<span className="truncate">{theme.value}</span>
							<CheckerBadge isActive={isActive(theme.value)} />
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
