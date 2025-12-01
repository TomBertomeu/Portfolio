interface TitleProps {
    text: string;
}

import clsx from "clsx";

interface TitleProps {
    text: string;
    className?: string;
}

export default function Title({ text, className }: Readonly<TitleProps>) {
    return (
        <div className="flex flex-col items-start mb-8 md:mb-10">
            <h2 className={clsx("text-3xl md:text-5xl font-bold relative inline-block", className)}>
                <span className="relative z-10">{text}</span>
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-[#2563eb]/50 to-[#10b981]/50 -skew-x-12 z-0"></span>
            </h2>
        </div>
    );
}