interface TitleProps {
    text: string;
}

export default function Title({ text }: Readonly<TitleProps>) {
    return (
        <div className="flex flex-col items-start mb-4 md:mb-6">
            <span className="text-3xl md:text-5xl font-bold">{text}</span>
            <span className="mt-2 w-12 h-1 rounded-full bg-blue-500 block" />
        </div>
    );
}