import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  // Fetch data from Sanity
  const res = await client.fetch(
    "*[_type == 'hero']{'poster': poster.asset->url, heading, desc, btnOne}"
  );

  // Ensure the response has data and destructure it safely
  const { poster , heading , desc , btnOne  } = await res[0];

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center font-bold flex-col">
        <div
          className="bg-black shadow-lg border border-gray-300 rounded-lg p-4 flex w-[70%] mx-auto mt-4 gap-10"
        >
          <div className="h-[500px] w-[40%] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={poster } // Add a fallback image if `poster` is not available
              alt="Poster"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-6 text-center flex flex-col justify-center items-center w-[50%] gap-4">
            <h1 className="text-2xl font-bold text-white">{heading}</h1>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed font-semibold underline decoration-blue-500">{desc}</p>
            <button
              type="button"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
            >
              {btnOne}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
