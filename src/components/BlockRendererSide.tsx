import { Block } from "../types";
import FormularioPrueba from "./laUniversidad/Pruebas/FormularioPrueba";
import CarruselServer from "./laUniversidad/CarruselServer";

function BlockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "component.carrousel":
      return <CarruselServer {...block} key={index} />
    case "layout.formulario":
      return <FormularioPrueba {...block} key={index} />
    default:
      return null;
  }
}

export function BlockRendererSide({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => BlockRenderer(block, index));
}
