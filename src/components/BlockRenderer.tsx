import { Block } from "../types";

//import { HeroSection } from "./laUniversidad/HeroSection";
import LandingCards from "./laUniversidad/LandingCards";
import InLineCards from "./laUniversidad/InLineCards";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    /*case "layout.hero-section":
      return <HeroSection {...block} key={index} />;*/
    case "component.card":
      return <LandingCards {...block} key={index} />;
    case "component.in-line":
      return( 
        <div className="flex flex-col justify-center items-center pt-4">
        <div className="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">

        <InLineCards {...block} key={index} />
        </div>
        </div>
    );
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
