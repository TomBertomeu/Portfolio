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
        <div className="flex flex-col items-start mb-4 md:mb-6">
            <span className={clsx("text-3xl md:text-5xl font-bold", className)}>{text}</span>
            <span className="mt-2 w-12 h-1 rounded-full bg-blue-500 block" />
        </div>
    );
}