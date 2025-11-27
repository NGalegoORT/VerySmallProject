
const Formulario = () => {
  return (
    <>
                    <div className="px-8 mt-10">
                    <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">

                    {/* Título */}
                    <h2 className="text-xl font-semibold text-gray-700 text-center">
                        Suscribite a nuestro boletín
                    </h2>

                    {/* Formulario */}
                    <form className="mt-6 space-y-4">

                        {/* Nombre */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                type="text"
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-green-600"
                                placeholder="Tu nombre"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-green-600"
                                placeholder="tu@email.com"
                            />
                        </div>

                        {/* Botón */}
                        <button
                            type="submit"
                            className="w-full py-2 font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition"
                        >
                            Suscribirse
                        </button>
                    </form>
                </div>

                </div>
    </>
  )
}

export default Formulario