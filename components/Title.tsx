import clsx from "clsx";
import UnderlineAccent from "./UnderlineAccent";

interface TitleProps {
    text: string;
    className?: string;
}

export default function Title({ text, className }: Readonly<TitleProps>) {
    return (
        <div className="flex flex-col items-start mb-8 md:mb-10">
            <h2 className={clsx("text-3xl md:text-5xl font-bold relative inline-block", className)}>
                <span className="relative z-10">{text}</span>
                <UnderlineAccent strong />
            </h2>
        </div>
    );
}