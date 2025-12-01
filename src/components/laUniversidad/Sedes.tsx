import { getSitios } from "@/src/app/lib/strapi"
import { STRAPI_BASE_URL } from "@/src/app/lib/strapi";

    interface Sedes {
      id: number;
      nombre: string;
      description: string;
      alt: string;
      href: string;
      imageUrl: string;
    }
const Sedes = async () => {

    const sitios = await getSitios('/api/la-universidads?populate[0]=Sitios.sitioUno.image')
    //console.log(sitios)


return (
<div className="w-full max-w-7xl">
  <h2 className="text-3xl text-black  font-bold text-center mb-8">
    Visita nuestras distintas ubicaciones</h2>
  <div className="flex flex-col lg:flex-row gap-8">

    {sitios?.map((data: Sedes)  => (
    <div key={data.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1">
      <h3 className="text-xl text-black font-semibold mb-4">{data.nombre}</h3>
      <p className="text-gray-600 mb-4">{data.description}</p>
      <div className="flex-grow mb-6">
        <img
          src={`${STRAPI_BASE_URL}${data.imageUrl}`}
          alt={data.alt}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
       Conoce Mas!
      </button>
    </div>

      ))
    }

  </div>
</div>

    )
}

export default Sedes