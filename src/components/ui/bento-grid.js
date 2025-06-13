import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
	return <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>{children}</div>;
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
	return (
		<div className={cn("group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-foreground/15 bg-card p-4 transition duration-200 hover:outline-ring outline-2 outline-offset-4 outline-transparent", className)}>
			{header}
			<div className="transition duration-200 group-hover/bento:translate-x-2">
				{icon}
				<div className="mt-2 mb-2 font-sans font-bold text-foreground">{title}</div>
				<div className="font-sans text-xs font-normal text-muted-foreground">{description}</div>
			</div>
		</div>
	);
};
