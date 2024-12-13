import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  const res = await client.fetch("*[_type == 'hero']{'alt':image.alt,'altTwo':imageTwo.altTwo,heading,desc,'image':image.asset->url,'imageTwo':imageTwo.asset->url}")

  return (
   <section className="text-gray-600 ">
     <div className="container px-5  py-24 mx-auto flex gap-10 flex-wrap justify-center">
       {/* card */}
       {res.map((item: any, index: number) => {
         return (
           <div key={index} className="flex flex-col items-center p-4 md:w-1/3 sm:mb-0 mb-6 border-2 border-solid border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-row gap-4 w-full justify-center items-center">
               <div className="w-[180px] h-[180px] overflow-hidden rounded-lg shadow-md">
                 <Image alt={item.alt} className="object-cover object-center h-full w-full" src={item.image} width={1000} height={1000} />
               </div>
               {item.imageTwo && (
                 <div className="w-[180px] h-[180px] overflow-hidden rounded-lg shadow-md">
                   <Image alt={item.altTwo} className="object-cover object-center h-full w-full" src={item.imageTwo} width={1000} height={1000} />
                 </div>
               )}
             </div>

             <div className="text-center mt-4">
               <h2 className="text-2xl font-bold text-white">{item.heading}</h2>
               <p className="text-base leading-relaxed mt-2 text-gray-600">{item.desc}</p>
             </div>
           </div>
         );
       })}
     </div>
   </section>
  );
}
