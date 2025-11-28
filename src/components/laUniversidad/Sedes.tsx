import { getSitios } from "@/src/app/lib/strapi"

const Sedes = async () => {

    const data = await getSitios('/api/la-universidads?populate[Sitios][populate]=*')
    console.log(data)

return (
<div className="w-full max-w-7xl">
  <h2 className="text-3xl text-black  font-bold text-center mb-8">Visita nuestras distintas ubicaciones</h2>
  <div className="flex flex-col lg:flex-row gap-8">

    {/* First Image Section */}
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1">
      <h3 className="text-xl text-black font-semibold mb-4">Image 1</h3>
      <p className="text-gray-600 mb-4">Description of the first image.</p>
      <div className="flex-grow mb-6">
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image 1"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
       Conoce Mas!
      </button>
    </div>

    {/* Second Image Section */}
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1">
      <h3 className="text-xl text-black font-semibold mb-4">Image 2</h3>
      <p className="text-gray-600 mb-4">Description of the second image.</p>
      <div className="flex-grow mb-6">
        <img
          src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Image 2"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
        Conoce Mas!
      </button>
    </div>

    {/* Third Image Section */}
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1">
      <h3 className="text-xl text-black font-semibold mb-4">Image 3</h3>
      <p className="text-gray-600 mb-4">Description of the third image.</p>
      <div className="flex-grow mb-6">
        <img
          src="https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image 3"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
        Conoce Mas!
      </button>
    </div>

  </div>
</div>

    )
}

export default Sedes