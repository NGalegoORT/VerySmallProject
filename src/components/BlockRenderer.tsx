import type { Block } from "@/types";

import { HeroSection } from "./laUniversidad/HeroSection";
import Autores from "./laUniversidad/Autores";
import CarruselCard from "./infoCards/CarruselCard";
import InitialCard from "./infoCards/InitialCard";
import CarruselServer from "./laUniversidad/CarruselServer";
import Formulario from "./laUniversidad/Formulario";
import LandingCards from "./laUniversidad/LandingCards";
import Sedes from "./laUniversidad/Sedes";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.info-block":
      return <Autores {...block} key={index} />;
    case "blocks.featured-article":
      return <CarruselCard {...block} key={index} />;
    case "blocks.subscribe":
      return <InitialCard {...block} key={index} />;
    case "blocks.heading":
      return <CarruselServer {...block} key={index} />;
    case "blocks.paragraph-with-image":
      return <Formulario {...block} key={index} />;
    case "blocks.paragraph":
      return <LandingCards {...block} key={index} />;
    case "blocks.full-image":
      return <Sedes {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
