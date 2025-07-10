import {  useState } from "react"
import type { Ayah } from "../utils/types"

const AyahComponent = ({ayah,lastOne,scrollToBottom}:{ayah:Ayah,lastOne:boolean,scrollToBottom:()=>void}) => {
  const [, setShowAllAyah] = useState(false);
  const[NumberOfWords,setNumberOfWords]=useState(1)
  const stopGetNextWord=ayah.text.split(' ').length>NumberOfWords
  // const stopGetPrevWord=NumberOfWords<1
  const lastAyahShape=ayah.text.split(' ').slice(0,NumberOfWords).map((word)=>{
    return word
  }).join(' ')

  const handleGetNextWord=()=>{
      if(stopGetNextWord ){
        setNumberOfWords(prev=>prev+1)
    }
    scrollToBottom()
  }
  // const handleGetPrevWord=()=>{    
  //     if(!stopGetPrevWord ){
  //       setNumberOfWords(prev=>prev-1)
  //   }
  // }
  const handleDisplayAllAyah = () => {
    // setShowAllAyah(prev => {
    //   const newState = !prev;
    //   setNumberOfWords(newState ? ayah.text.split(" ").length : 1);
    //   return newState;
    // });
    setShowAllAyah(_=>{
         setNumberOfWords( ayah.text.split(" ").length );
        return true;
    })
    scrollToBottom()
  };
  const handleDisplayFirstWord=()=>{
    setShowAllAyah(_=>{
      setNumberOfWords(1);
     return false;
 })
    scrollToBottom()
  }
  return (
    <>
    <p className={`font-medium text-center mb-1 text-lg dark:text-amber-300 ${lastOne&&'text-green-700 dark:text-green-300'}`}>
    {lastOne? lastAyahShape:ayah.text}۞
  </p>
 {lastOne&&<div className="flex justify-center my-4 gap-2">
  <button disabled={!stopGetNextWord} className="px-4 py-2  bg-green-300 cursor-pointer dark:bg-green-700 dark:text-white rounded disabled:opacity-50 disabled:cursor-auto" onClick={handleGetNextWord}> الكلمة التالية</button>
  <button disabled={!stopGetNextWord} className="px-4 py-2  bg-green-300 cursor-pointer dark:bg-green-700 dark:text-white rounded disabled:opacity-50 disabled:cursor-auto" onClick={handleDisplayAllAyah}> الاية كاملة</button>
  <button disabled={NumberOfWords===1} className="px-4 py-2  bg-green-300 cursor-pointer dark:bg-green-700 dark:text-white rounded disabled:opacity-50 disabled:cursor-auto" onClick={handleDisplayFirstWord}> اول كلمة</button>
  {/* <button disabled={stopGetPrevWord} className="px-4 py-2  bg-green-300 cursor-pointer dark:bg-green-700 dark:text-white rounded disabled:opacity-50 disabled:cursor-auto" onClick={handleGetPrevWord}>اظهر الكلمة السابقة</button> */}
  </div>}
    </>
  )
}

export default AyahComponent