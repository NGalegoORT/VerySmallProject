import { FormularioProps } from "@/src/types"

export default function FormularioPrueba ({
  id,
  title,
  description,
  email,
  campo = [],
  link = []
}:Readonly<FormularioProps>){
  return (
<>
      <div className="px-8 mt-10" key={id} >
        <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            {title}
          </h2>
    {/* Short Description */}
      <p className="mt-4 text-sm text-gray-600 text-center">
        {description}
        </p>
          {/* Formulario */}
          <form className="mt-6 space-y-4">
            {/* Nombre */}
            {campo?.map((item, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">{item.nameField}</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-green-600 text-black"
                placeholder={item.placeHolder}
              />
            </div>
             ))}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-green-600 text-black"
                placeholder={email}
              />
            </div>

            {/* Error or Success Message */}

            {/* Submit Button */}
            {link?.map((item, index) => (
            <button key={index}
              type="submit"
              value={item.label}
              className="w-full py-2 font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition"
            >
              {item.label}
            </button>
            ))}

          </form>
        </div>
      </div>
    </>
    
)
}