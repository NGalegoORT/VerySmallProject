import InitialCard from "@/src/components/infoCards/InitialCard"


export const cardData = [
  {
    title: "Primer Título",
    description: "Descripción del primer elemento",
    price: 800,
    href: "/"
  },
  {
    title: "Segundo Título",
    description: "Descripción del segundo elemento",
    price: 1200,
    href: "#"
  },
  {
    title: "Tercer Título",
    description: "Descripción del tercer elemento",
    price: 650,
    href: "/"
  }
];

const ArticlePage = () => {
  return (
    <>
    <div> ArticlePage</div>
    {
    cardData.map((item) =>(
    <InitialCard key={item.title} {...item}/>))
    }

    </>
  )
}

export default ArticlePage