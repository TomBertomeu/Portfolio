import clsx from "clsx";
import UnderlineAccent from "./UnderlineAccent";

interface TitleProps {
    text: string;
    className?: string;
    centered?: boolean;
}

export default function Title({ text, className, centered = false }: Readonly<TitleProps>) {
    return (
        <div className={clsx("flex flex-col mb-8 md:mb-10", centered ? "items-center" : "items-start")}>
            <h2 className={clsx("font-handwritten text-5xl md:text-7xl font-bold relative inline-block", className)}>
                <span className="relative z-10">{text}</span>
                <UnderlineAccent strong />
            </h2>
        </div>
    );
}