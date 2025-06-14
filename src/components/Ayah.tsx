import { useEffect, useState } from "react"
import type { Ayah } from "../utils/types"

const AyahComponent = ({ayah,lastOne}:{ayah:Ayah,lastOne:boolean}) => {
  const [displayWord,setDisplayWord]=useState(true)
  useEffect(()=>{
    if(lastOne===true){
      setDisplayWord(true)
    }
  },[lastOne])
  return (
    <p  onClick={()=>setDisplayWord(prev=>!prev)} className={`font-medium text-center mb-1 text-lg dark:text-amber-300 ${lastOne&&'text-green-700 dark:text-green-300'}`}>
    ۞{displayWord&&lastOne? ayah.text.split(' ')[0]:ayah.text}۞
  </p>
  )
}

export default AyahComponent