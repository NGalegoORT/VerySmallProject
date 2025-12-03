import { FilaCardProps } from "@/src/types";

export default function FilaCards ({
  id,
  fila,
}: Readonly<FilaCardProps>) {
  return (
    <div key={id} className="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center py-12 lg:py-20">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fila.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}