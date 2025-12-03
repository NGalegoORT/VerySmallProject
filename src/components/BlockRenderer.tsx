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
      return <InLineCards {...block} key={index} />
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
