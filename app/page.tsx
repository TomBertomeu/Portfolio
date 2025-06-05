import Header from "@/components/Header";
import Badge from "@/components/Badge";
import {HomeIcon} from "lucide-react";

export default function Home() {
    return (
        <>
            <Header />
            <Badge icon={HomeIcon} text="Home" />
        </>
    );
}
