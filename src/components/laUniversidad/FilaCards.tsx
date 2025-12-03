import { FilaCardProps } from "@/src/types";

export default function FilaCards ({
  id,
  fila,
}: Readonly<FilaCardProps>) {
  return (
    <div key={id} className="lg:py-10 container mx-auto p-4 flex justify-end">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fila.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.subTitle}</p>
            </div>
          ))}
        </div>

    </div>
  );
}