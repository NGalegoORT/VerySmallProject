import type { CardProps } from "@/src/types";


export default function LandingCards({
    id,
    title,
    description,
    autor,
}:Readonly<CardProps>) {
    
  return (<>

                        <div key={id} className="mt-6">
                            <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">

                                {/* DATE + BADGE – replace with your fields if needed */}
                                <div className="flex items-center justify-between">
                                    <span className="font-light text-gray-600">Jun 1, 2020</span>
                                    <a className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
                                        Card
                                    </a>
                                </div>

                                {/* TITLE + DESCRIPTION */}
                                <div className="mt-2">
                                    <a className="text-2xl font-bold text-gray-700 hover:underline">
                                        {title}
                                    </a>

                                    <p className="mt-2 text-gray-600">
                                        {description}
                                    </p>
                                </div>

                                {/* FOOTER */}
                                <div className="flex items-center justify-between mt-4">
                                    <a className="text-blue-500 hover:underline">Read more</a>

                                    <div>
                                        <a className="flex items-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=731&q=80"
                                                alt="avatar"
                                                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                            />
                                            <h1 className="font-bold text-gray-700 hover:underline">{autor}</h1>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                </>
              )
}