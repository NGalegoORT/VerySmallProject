import { STRAPI_BASE_URL } from "@/src/app/lib/strapi";
import { CarruselClient } from "./Carrusel";
import { CarruselProps } from "@/src/types";


export default function CarruselServer({
  id,
  title,
  image = [],
}: Readonly<CarruselProps>) {

  // Map through the image array to generate full URLs
  const fullImageUrls = image?.map((item )=> `${STRAPI_BASE_URL}${item.url}`);
  //console.log("fullImageUrls after mapping:", fullImageUrls)

  return (
    <>
      <CarruselClient images={fullImageUrls}/>
    </>
  );
}
