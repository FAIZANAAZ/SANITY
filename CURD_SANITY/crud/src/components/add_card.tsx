"use client"
import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


export default function Home() {

  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState(0);

  function submitFunc(){
    setList([...list ,inputValue])
    setInputValue("")
  }

  function deleteFunc(index:number){
    const delValue = [...list]
    delValue.splice(index, 1)
    setList(delValue)
  }

  function editFunc(index:number){
    const editValue = [...list]
    setInputValue(editValue[index])
    setEditIndex(index)
  }

  function updateFunc(){
    const updateValue = [...list]
    updateValue[editIndex] = inputValue
    setList(updateValue)
    setInputValue("")

  }
  return (
   <div className="h-screen flex flex-col justify-center items-center bg-white gap-5">
    <input className="h-10 w-80 border-black border-2 rounded p-2" type="text" placeholder="enter your name here" value={inputValue}
    onChange={(e)=>{setInputValue(e.target.value)}}/>
    <div className="flex gap-8">
    <button className="w-20 h-8 border-black border-2 rounded-lg p-1 bg-gray-300 hover:bg-white" onClick={()=>{submitFunc()}}>Submit</button>
    <button className="w-20 h-8 border-black border-2 rounded-lg p-1 bg-gray-300 hover:bg-white" onClick={()=>{updateFunc()}}>Update</button>
    </div>


    {list.map((names, index)=>{
      return (
        <div key={index} className="flex gap-5">
          <p className="text-black  font-serif text-[20px]" >{names}</p>
          <button className="h-8 w-8 rounded-full border-black border-2 hover:bg-gray-300 p-1" onClick={()=>{deleteFunc(index)}}>
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