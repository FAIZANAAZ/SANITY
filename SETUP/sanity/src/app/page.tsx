import { client } from "@/sanity/lib/client";

export default async function Home() {
  const mydata = await client.fetch(
    '*[_type == "pInfo"]{name , fullname, gender}'
  );
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-yellow-500">
        <div className="bg-black p-10 rounded-3xl shadow-2xl border-4 border-purple-500 max-w-lg w-full flex flex-col items-start gap-8 transform hover:scale-105 transition duration-300">
          <h1 className="text-3xl font-extrabold text-white">
            <span className="text-purple-400">Name:</span> {mydata[0].name}
          </h1>
          <h1 className="text-3xl font-extrabold text-white">
            <span className="text-purple-400">Last Name:</span> {mydata[0].fullname}
          </h1>
          <h1 className="text-3xl font-extrabold text-white">
            <span className="text-purple-400">Gender:</span> {mydata[0].gender}
          </h1>
        </div>
      </div>
    </>
  );
}
