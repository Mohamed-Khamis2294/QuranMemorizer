import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { getQuran} from "../utils/http";
import type { Ayah, Surah } from "../utils/types";

import NavBar from "./NavBar";
import AyahComponent from "./Ayah";
import Instructions from "./Instructions";
import SurahsDropdown from "./SurahsDropdown";
import AyahStartDropdown from "./AyahStartDropdown";
// import InputAudio from "./InputAudio";
// import TafsirAyah from "./TafsirAyah";
const InputAudio =lazy(() => import('./InputAudio'));
const TafsirAyah =lazy(() => import('./TafsirAyah'));

import AudioReaderDropdown from "./AudioReaderDropdown";
import { BeatLoader } from "react-spinners";

const Quran = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ayahsPage, setAyahsPage] = useState<Ayah[]>([]);
  // *****************************************
  const [quranData, setQuranData] = useState<any>(null);
  const[surahChoise,setSurahChoise]=useState('سُورَةُ ٱلْفَاتِحَةِ')
  const[surahNumber,setSurahNumber]=useState(1)
  const [numberOfAyahs,setNumberOfAyahs]=useState(7)
  const[choosenNumberAyah,setChoosenNumberAyah]=useState(1)
  const [selectedReader, setSelectedReader] = useState<number>(1);


  useEffect(() => {
  const fetchData = async () => {
    const data = await getQuran();
    setQuranData(data);
  };
  fetchData();
}, []);
 
  useEffect(() => {
      setCurrentIndex(0);
      handleChooseSurah()
  }, [surahChoise,choosenNumberAyah,quranData]);
  useEffect(()=>{
    setChoosenNumberAyah(1)
  },[surahChoise])
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight ,
  //     behavior: 'smooth' 
  //   });
  // };
  
  const handleChooseSurah = () => {
    if (!quranData) return;
    const selectedSurah = quranData.surahs.find(
      (surah: Surah) => surah.name === surahChoise
    );
  
    const selectedSurahNumber = quranData.surahs.findIndex(
      (surah: Surah) => surah.name === surahChoise
    ) + 1;
  
    if (!selectedSurah) return;
  
    setSurahNumber(selectedSurahNumber);
    setAyahsPage(selectedSurah.ayahs.slice(choosenNumberAyah - 1));
    setNumberOfAyahs(selectedSurah.ayahs.length);
  };
  const handleNext = () => {
    if (ayahsPage && currentIndex < ayahsPage.length - 1) {
      setCurrentIndex(currentIndex + 1)
      scrollToBottom();
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
    
      {/* by surah */}
  
      <SurahsDropdown setSurahChoise={setSurahChoise} surahChoise={surahChoise}/>
     <div className="flex justify-between items-center">
     <AyahStartDropdown numberOfAyahs={numberOfAyahs} setChoosenNumberAyah={setChoosenNumberAyah} choosenNumberAyah={choosenNumberAyah} />
      <AudioReaderDropdown selectedReader={selectedReader} setSelectedReader={setSelectedReader}/>
     </div>
     
      {/* ****************************** */}
      <div   key={surahNumber|choosenNumberAyah} className="flex flex-col  items-center  justify-center">
        <Suspense fallback={<div className="h-80 flex justify-center items-center"><BeatLoader color="#f59e0b"/></div>}>
        <div  dir="rtl" className=" flex flex-col p-2 items-center justify-center pb-36  gap-0">
        {ayahsPage.slice(0, currentIndex + 1).map((ayah, index) => (<div key={ayah.text}>
          <AyahComponent   ayah={ayah} lastOne={index===currentIndex&&ayahsPage.slice(0, currentIndex + 1).length>=1} scrollToBottom={scrollToBottom}/>
         {index===currentIndex&&ayahsPage.slice(0, currentIndex + 1).length>=1&& <><InputAudio ayahAudioNo={choosenNumberAyah+index} surahNumber={surahNumber} selectedReader={selectedReader}/>
         <TafsirAyah ayahNumber={choosenNumberAyah + index} surahNumber={surahNumber} />
         </>
         }
         {
         }
        </div>
          ))}
           <div ref={bottomRef} />
          </div>
        </Suspense>


        <div className="flex gap-4 mt-4 mb-4 fixed bottom-0 ">
          <button
            onClick={handlePrev}
            disabled={currentIndex <= 0}
            className="px-4 py-2  bg-gray-300 cursor-pointer dark:bg-gray-700 dark:text-white rounded disabled:opacity-50 disabled:cursor-auto"
          >
            الاية السابقة
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= ayahsPage.length - 1}
            className="px-4 py-2 bg-blue-500 cursor-pointer dark:bg-blue-700 text-white rounded disabled:opacity-50 disabled:cursor-auto"
          >
            الاية التالية
          </button>
        </div>
      </div>
    </>
  );
};

export default Quran;
