import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type containerSize = "large" | "medium";

type ContainerProps = PropsWithChildren<{
   className?: string;
   size?: containerSize;
}>;

const sizeVariants = {
   large: "max-w-7xl",
   medium: "max-w-5xl",
};

export const LayoutContainer: React.FC<ContainerProps> = ({
   children,
   className,
   size = "medium",
}) => <div className={cn(sizeVariants[size], "mx-auto p-4", className)}>{children}</div>;
