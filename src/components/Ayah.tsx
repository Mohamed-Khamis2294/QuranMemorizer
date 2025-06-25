import {  useState } from "react"
import type { Ayah } from "../utils/types"

const AyahComponent = ({ayah,lastOne}:{ayah:Ayah,lastOne:boolean}) => {
  const[NumberOfWords,setNumberOfWords]=useState(1)
  const stopGetNextWord=ayah.text.split(' ').length>NumberOfWords
  const stopGetPrevWord=NumberOfWords<1
  const lastAyahShape=ayah.text.split(' ').slice(0,NumberOfWords).map((word)=>{
    return word
  }).join(' ')

  const handleGetNextWord=()=>{
      if(stopGetNextWord ){
        setNumberOfWords(prev=>prev+1)
    }
  }
  const handleGetPrevWord=()=>{    
      if(!stopGetPrevWord ){
        setNumberOfWords(prev=>prev-1)
    }
  }
  const handleDisplayAllAyah=()=>{
    setNumberOfWords(ayah.text.split(' ').length)  
  }
 
  return (
    <>
    <p  onClick={handleDisplayAllAyah} className={`font-medium text-center mb-1 text-lg dark:text-amber-300 ${lastOne&&'text-green-700 dark:text-green-300'}`}>
    {lastOne? lastAyahShape:ayah.text}۞
  </p>
 {lastOne&&<div className="flex gap-2">
  <button disabled={!stopGetNextWord} className="px-4 py-2  bg-green-300 cursor-pointer dark:bg-green-700 dark:text-white rounded disabled:hidden disabled:cursor-auto" onClick={handleGetNextWord}>اظهر الكلمة التالية</button>
  <button disabled={stopGetPrevWord} className="px-4 py-2  bg-green-300 cursor-pointer dark:bg-green-700 dark:text-white rounded disabled:hidden disabled:cursor-auto" onClick={handleGetPrevWord}>اظهر الكلمة السابقة</button>
  </div>}
    </>
  )
}

export default AyahComponent