import Link from "next/link";
import { getCaruselData, STRAPI_BASE_URL } from "@/src/app/lib/strapi";
import { getHeroSection } from "@/src/app/lib/strapi";
const styles = {
  header: "relative h-[600px] overflow-hidden",
  backgroundImage: "absolute inset-0 object-cover w-full h-full",
  overlay:
    "relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50",
  heading: "text-4xl font-bold md:text-5xl lg:text-6xl",
  subheading: "mt-4 text-lg md:text-xl lg:text-2xl",
  button:
    "mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100 transition-colors",
};



export async function HeroSection() {

    const heroSec = await getHeroSection('/api/la-universidads?populate[layout][populate]=*')
    //console.log(heroSec[0])
    const datita = await getCaruselData('/api/la-universidads?populate[carusel][populate]=*')
    console.log(datita)
  
   const imageURL = heroSec.image?.url.startsWith('http')
  ? heroSec.image.url
  : `${STRAPI_BASE_URL}${heroSec[0].image.url}`;

  return (
    <header className={styles.header}>
      <img
        alt="Background"
        className={styles.backgroundImage}
        height={1080}
        src={imageURL}
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
        width={1920}
      />
      <div className={styles.overlay}>
        <h1 className={styles.heading}>{heroSec[0].heading}</h1>
        <p className={styles.subheading}>{heroSec[0].subHeading}</p>
       <Link className={styles.button} href={heroSec[0].link.href}>
          {heroSec[0].link.label}
        </Link>
      </div>
    </header>
  );
}