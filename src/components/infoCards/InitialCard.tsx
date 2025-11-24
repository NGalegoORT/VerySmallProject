import { StaticImageData } from "next/image";
import  Image  from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  price?: number;
  image?: StaticImageData | string;  // 👈 preferred
  href?: string;
}


const InitialCard = ({title, description,price,image,href}:Props) => {

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-[720px] mx-auto">

                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                        {image ? (
                            <Image src={image} alt={title} fill className="object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                                Sin imagen
                            </div>
                        )}
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {title}
                            </p>
                            {price != null && (
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    ${price}
                                </p>
                            )}
                        </div>
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                            {description}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        {href ? (
                            <Link href={href} className="text-indigo-600 text-xs font-medium">Más</Link>
                        ) : (
                            <span className="text-gray-400 text-xs">Más</span>
                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default InitialCard