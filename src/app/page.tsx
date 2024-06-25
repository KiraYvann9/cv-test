import Image from "next/image";
import {FooterComponent, HeaderComponent, HeroComponent, ContentComponent} from "@/components"

import { raleway } from "@/fonts/font";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn('relative w-full max-w-screen-lg h-[80%] border',raleway.className)}>
      <HeaderComponent/>

    </div>
  );
}
