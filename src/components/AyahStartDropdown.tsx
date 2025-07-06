import { useEffect, useState } from "react";

const AyahStartDropdown = ({
  numberOfAyahs,
  setChoosenNumberAyah,
  choosenNumberAyah
}: {
  numberOfAyahs: number;
  setChoosenNumberAyah:React.Dispatch<React.SetStateAction<number>>
  choosenNumberAyah:number
}) => {
  const AyahsNumberArray = Array.from({ length: numberOfAyahs }, (_, i) => i + 1);
  const [selected, setSelected] = useState<number>(choosenNumberAyah);
  useEffect(()=>{
    setSelected(choosenNumberAyah)
  },[AyahsNumberArray])

 
  return (
    <div className="flex items-center" >
      <label htmlFor="Ayah-select" className=" font-medium dark:text-white">
        اختر الاية
      </label>
      <select
        id="Ayah-select"
        value={selected}
        onChange={(e) => setChoosenNumberAyah(Number(e.target.value))}
        className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-800 dark:text-white"
      >
        {AyahsNumberArray.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AyahStartDropdown;
