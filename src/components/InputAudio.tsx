import React, { useRef, useState, useEffect } from "react";
// import { getAudioAyah } from "../utils/http";
import { Play,  Pause } from "lucide-react";
import { QuranReaders } from "../utils/data";

const InputAudio = ({ surahNumber, ayahAudioNo,selectedReader }: { surahNumber: number; ayahAudioNo: number,selectedReader:number }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>('https://everyayah.com/data/Alafasy_128kbps/001001.mp3');
  const [progress, setProgress] = useState<number>(0);

  function getAudioUrl(surah: number, ayah: number, readerFolder: string|undefined) {
    const s = surah.toString().padStart(3, "0");
    const a = ayah.toString().padStart(3, "0");
    return `https://www.everyayah.com/data/${readerFolder}/${s}${a}.mp3`;
  }

  // useEffect(() => {
  //   async function handleGetAudioAyah() {
  //     const data = await getAudioAyah(surahNumber, ayahAudioNo);
  //     setCurrentUrl(data.audio);
  //   }
  //   handleGetAudioAyah();
  // }, [surahNumber, ayahAudioNo]);
  useEffect(()=>{
    // setCurrentUrl(`https://the-quran-project.github.io/Quran-Audio/Data/${selectedReader}/${surahNumber}_${ayahAudioNo}.mp3`)
    setCurrentUrl(_=>{
      const folder=QuranReaders.find((_,index)=>index===selectedReader-1)?.folder
      const audioUrl=getAudioUrl(surahNumber,ayahAudioNo,folder)
      return audioUrl
    })
    setIsPlaying(false)
    setProgress(0)
  },[selectedReader, surahNumber, ayahAudioNo])

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    isPlaying ? audio.pause() : audio.play();
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const current = audio.currentTime;
      const duration = audio.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const value = parseFloat(e.target.value);
    if (audio && audio.duration) {
      audio.currentTime = (value / 100) * audio.duration;
      setProgress(value);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (audio) {
      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div  className="bg-gray-100 dark:bg-[#1a1c1f] border border-gray-300 dark:border-gray-700 p-5 rounded-2xl shadow-sm w-[350px] max-w-md mx-auto transition-colors">
      <p className="text-center text-lg font-semibold text-gray-800 dark:text-gray-100 mb-5">
        مُشغل صوتي للقرآن
      </p>

      <div className="flex items-center  gap-1 justify-center mb-6">
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-blue-600 dark:bg-blue-700 text-white shadow-md hover:bg-blue-700 dark:hover:bg-blue-800 transition"
        >
          {isPlaying ? <Pause/> : <Play/>}
        </button>
      

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        className="w-full h-2 rounded-full bg-gray-300 dark:bg-gray-600 accent-blue-600 cursor-pointer transition"
      />

      <audio ref={audioRef} src={currentUrl} className="hidden" />
    </div>
    </div>
  );
};

export default InputAudio;
