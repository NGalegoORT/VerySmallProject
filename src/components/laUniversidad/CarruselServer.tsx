import { getCaruselData, STRAPI_BASE_URL } from "@/src/app/lib/strapi";
import { CarruselClient } from "./Carrusel";
import { CarruselProps } from "@/src/types";

/*
export default async function CarruselServer() {
  const relativePaths = await getCaruselData('/api/la-universidads?populate[carusel][populate]=*');
  //console.log("relativePaths from fetch:", relativePaths)

  if (!relativePaths || relativePaths.length === 0) {
    return <div>Error loading carousel images</div>;
  }

  // Transform relative paths to full URLs
  const fullImageUrls = relativePaths.map((path: string) => `${STRAPI_BASE_URL}${path}`);
  console.log("fullImageUrls after mapping:", fullImageUrls)

  return <CarruselClient images={fullImageUrls} />;
}
*/


export default function CarruselServer({
  id,
  title,
  image = [],
}: Readonly<CarruselProps>) {

  // Map through the image array to generate full URLs
  const fullImageUrls = image?.map((item )=> `${STRAPI_BASE_URL}${item.url}`);
  console.log("fullImageUrls after mapping:", fullImageUrls)

  return (
    <>
      <CarruselClient images={fullImageUrls}/>
    </>
  );
}
