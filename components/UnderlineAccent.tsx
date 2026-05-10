import clsx from "clsx";

interface UnderlineAccentProps {
  strong?: boolean;
}

export default function UnderlineAccent({ strong = false }: Readonly<UnderlineAccentProps>) {
  return (
    <span
      className={clsx(
        "absolute left-0 w-full h-3 bg-gradient-to-r -skew-x-12 z-0",
        strong
          ? "-bottom-1 from-[#2563eb]/50 to-[#10b981]/50"
          : "-bottom-2 from-[#2563eb]/30 to-[#10b981]/30",
      )}
    />
  );
}
