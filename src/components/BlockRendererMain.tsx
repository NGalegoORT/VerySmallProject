import { Block } from "../types";

//import { HeroSection } from "./laUniversidad/HeroSection";
import LandingCards from "./laUniversidad/LandingCards";
import InLineCards from "./laUniversidad/InLineCards";
import FilaCards from "./laUniversidad/FilaCards";
import Formulario from "./laUniversidad/Formulario";
import FormularioPrueba from "./laUniversidad/Pruebas/FormularioPrueba";

function BlockRenderer(block: Block, index: number) {
  switch (block.__component) {
    /*case "layout.hero-section":
      return <HeroSection {...block} key={index} />;*/
    case "component.card":
      return <LandingCards {...block} key={index} />;
    case "component.in-line":
      return <InLineCards {...block} key={index} />
    case "layout.fila":
      return <FilaCards {...block} key={index} />
    /*case "layout.formulario":
      return <FormularioPrueba {...block} key={index} /> */
    default:
      return null;
  }
}

export function BlockRendererMain({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => BlockRenderer(block, index));
}
