import { getDataCardLine, getLayout } from "@/src/app/lib/strapi"
import { InLineProps } from "@/src/types";

interface InLine {
    title: string;
    subTitle:string;
}

export default function InLineCards({
    id,
    title,
    subTitle
}:Readonly<InLineProps>){


  return (
<>
    
    <div key={id} className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-white shadow-md dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 dark:text-white">
                        <svg
                            className="h-7 w-7 text-brand-500 dark:text-black"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="ml-4 flex w-auto flex-col justify-center">
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-black">{subTitle}</h4>
            </div>
        </div>
</>

)
}