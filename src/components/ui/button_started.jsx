import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ButtonStarted = (props, ref) => {
	const { className, size = "lg", children = "Get Started", iconSize = 16, iconStrokeWidth = 2, ...restProps } = props;

	return (
		<Button ref={ref} size={size} variant="default" className={cn("group relative overflow-hidden bg-neutral-200 hover:bg-neutral-200 w-fit rounded-full text-neutral-800", className)} {...restProps}>
			<span className="mr-8 transition-opacity duration-300 group-hover:opacity-0">{children}</span>
			<span className="absolute right-1 top-1 bottom-1 rounded-full z-10 flex items-center justify-center w-1/4 transition-all duration-300 bg-amber-400 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95" aria-hidden="true">
				<ChevronRight className="not-sm:hidden" size={iconSize} strokeWidth={iconStrokeWidth} />
				<ChevronDown className="sm:hidden" size={iconSize} strokeWidth={iconStrokeWidth} />
			</span>
		</Button>
	);
};


export { ButtonStarted };
