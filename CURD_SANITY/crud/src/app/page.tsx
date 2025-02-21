"use client"
import { sanityCreateData, sanityDeleteData, sanityFetch } from "@/service/sanitydata";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

interface IName{
  name:string,
  _id:string}
export default function Home() {

  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState(0);
  const [namesArray, setNamesArray] = useState<IName[]>([]);
  
// read krna mangwana
  useEffect(() => {
    const getData = async () => {
      const response = await sanityFetch()
      setNamesArray(response)
    }
  
    getData()
   
  }, [])
  
// create bhejna
  async function submitFunc(){
   await sanityCreateData(inputValue)
  //  data dobara dikhany ke liye update krny ke liye
   const response = await sanityFetch()
      setNamesArray(response)
  }

  async function deleteFunc(_id:string){
     await sanityDeleteData(_id) 
    const deleteData: IName[] = await sanityFetch();
    setNamesArray(deleteData)
  }

  function editFunc(index:number){
    const editValue = [...list]
    setInputValue(editValue[index])
    setEditIndex(index)
  }

  function updateFunc(){
   if (inputValue !== "") {
    const updateValue = [...list]
    updateValue[editIndex] = inputValue
    setList(updateValue)
    setInputValue("")
    
   }

  }
  return (
   <div className="h-screen flex flex-col justify-center items-center bg-white gap-5">
    <input className="h-10 w-80 border-black border-2 rounded p-2" type="text" placeholder="enter your name here" value={inputValue}
    onChange={(e)=>{setInputValue(e.target.value)}}/>
    <div className="flex gap-8">
    <button className="w-20 h-8 border-black border-2 rounded-lg p-1 bg-gray-300 hover:bg-white" onClick={()=>{submitFunc()}}>Submit</button>
    <button className="w-20 h-8 border-black border-2 rounded-lg p-1 bg-gray-300 hover:bg-white" onClick={()=>{updateFunc()}}>Update</button>
    </div>


    {namesArray.map((names, index)=>{
      return (
        <div key={index} className="flex gap-5">
          <p className="text-black  font-serif text-[20px]" >{names.name}</p>
          <button className="h-8 w-8 rounded-full border-black border-2 hover:bg-gray-300 p-1" onClick={()=>{deleteFunc(names._id)}}>
          <AiFillDelete color={"red"} />
          </button>
          <button className="h-8 w-8 rounded-full border-black border-2 hover:bg-gray-300 p-1" onClick={()=>{editFunc(index)}}>
          <AiFillEdit color={"green"}/>
          </button>
        </div>
      )
    })}
   </div>
  );
}