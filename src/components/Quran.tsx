import { useEffect, useMemo, useState } from "react";
import { getJuz } from "../utils/http";
import type { Ayah } from "../utils/types";
import Buttons from "./Buttons";
import PageDropdown from "./PageDropdown";
import NavBar from "./NavBar";
import AyahComponent from "./Ayah";
import Instructions from "./Instructions";

const Quran = () => {
  const [juz, setJuz] = useState(1);
  const [ayahsArray, setAyahsArray] = useState<Ayah[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ayahsPage, setAyahsPage] = useState<Ayah[]>([]);
  const [optionsNumbersArray, setOptionsNumbersArray] = useState<number[]>([]);
  const numbersOfJuz = useMemo(() => Array.from({ length: 30 }, (_, i) => i + 1), []);


  const handleSelectedPage = (x: number) => {
    setCurrentIndex(0);
    setAyahsPage(ayahsArray.filter((a) => a.page === x));
  };

  useEffect(() => {
    async function handleGetjuz() {
      const data = await getJuz(juz);
      setAyahsArray(data.ayahs);
      const uniquePages = Array.from(new Set(data.ayahs.map((a) => a.page)));
      setOptionsNumbersArray(uniquePages);
      setCurrentIndex(0);
      setAyahsPage(data.ayahs.filter((a) => a.page === uniquePages[0]));
    }

    handleGetjuz();
  }, [juz]);

  const handleNext = () => {
    if (ayahsPage && currentIndex < ayahsPage.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <>
      <NavBar/> 
      <Instructions/>
      <Buttons
        numbers={numbersOfJuz}
        onselect={setJuz}
        activeJuz={juz}
      />
      <PageDropdown
        onselect={handleSelectedPage}
        optionsNumbersArray={optionsNumbersArray}
      />

      <div className="flex flex-col  items-center  justify-center">
        <div dir="rtl" className=" flex flex-wrap p-2 items-center justify-center pb-16  gap-0">
        {ayahsPage.slice(0, currentIndex + 1).map((ayah, index) => (
          <AyahComponent key={index} ayah={ayah} lastOne={index===currentIndex&&ayahsPage.slice(0, currentIndex + 1).length>1}/>
          ))}
          </div>

        <div className="flex gap-4 mt-4 mb-4 fixed bottom-0 ">
          <button
            onClick={handlePrev}
            disabled={currentIndex <= 0}
            className="px-4 py-2  bg-gray-300 cursor-pointer dark:bg-gray-700 dark:text-white rounded disabled:opacity-50 disabled:cursor-auto"
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= ayahsPage.length - 1}
            className="px-4 py-2 bg-blue-500 cursor-pointer dark:bg-blue-700 text-white rounded disabled:opacity-50 disabled:cursor-auto"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Quran;
