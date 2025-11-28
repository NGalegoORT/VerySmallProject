import { getStrapiData } from "@/src/app/lib/strapi"
const Autores = async () => {

    const autores = await getStrapiData('/api/autores')
    //console.log(autores)

    interface Autor {
      name: string;
      posts_number: number;
    }

  return (
    <>
        <div className="px-8">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
        
        {autores.data?.map((data: Autor)  => (
            <div key={data.name}  className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md ">
            <ul className="mx-2">
            <li className="flex items-center">
            <p><a href="#" className="mx-2 font-bold text-gray-700 hover:underline">{data.name}</a><span
            className="text-sm font-light text-gray-700">{data.posts_number}</span></p>
            </li>
            </ul>
            </div>
 
            ))
        }
        </div>   
    </>
  )
}

export default Autores