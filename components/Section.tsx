import React from "react";

export default function Section(
    {
        children,
        id
    }: Readonly<{
        children: React.ReactNode;
        id?: string;
    }>
) {
    return (
        <section id={id} className="px-8 md:px-0 mb-16 md:mb-32 md:h-screen flex flex-col justify-center">
            {children}
        </section>
    )
}