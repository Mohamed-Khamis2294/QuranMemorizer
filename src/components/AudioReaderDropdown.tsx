import { useEffect, useState } from "react";
export const QuranReaders = [
  { name: "مشاري راشد العفاسي" },
  { name: "أبو بكر الشاطري" },
  { name: "ناصر القطامي" },
  { name: "ياسر الدوسري" },
  { name: "هاني الرفاعي" },
];
const AudioReaderDropdown = ({selectedReader,setSelectedReader}:{selectedReader:number,
setSelectedReader:React.Dispatch<React.SetStateAction<number>>
}) => {
  const [selected, setSelected] = useState<number>(1);
  useEffect(()=>{
    setSelected(selectedReader)
  },[selectedReader])
  return (
    <div className=" flex items-center" >
   
    <select
      id="reader-select"
      value={selected}
      onChange={(e) => setSelectedReader(Number(e.target.value))}
      className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-800 dark:text-white"
    >
      {QuranReaders.map((reader,index) => (
        <option key={reader.name} value={index+1}>
          {reader.name}
        </option>
      ))}
    </select>
    <label htmlFor="reader-select" className=" font-medium dark:text-white">
     : القارئ
    </label>
  </div>
  )
}

export default AudioReaderDropdown