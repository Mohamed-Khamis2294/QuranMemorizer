import type { Data } from "./types";

export async function getJuz(juzNumber: number): Promise<Data> {
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/juz/${juzNumber}/ar.asad`);
    if (!res.ok) {
      throw new Error(`Failed to fetch Juz ${juzNumber}: ${res.statusText}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getQuran () {
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/quran/ar.asad `);
    if (!res.ok) {
      throw new Error(`Failed to fetch Quran page`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAudioAyah(surahNumber:number,ayahNumber:number){
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/ar.alafasy`);
    if (!res.ok) {
      throw new Error(`Failed to fetch Quran page`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getTafsirAyah(surahNumber: number, ayahNumber: number) {
  try {
    const url = `http://api.quran-tafseer.com/tafseer/1/${surahNumber}/${ayahNumber}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    const res = await fetch(proxyUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch Tafsir`);
    }

    const data = await res.json();
    const parsed = JSON.parse(data.contents); // نحلل النص الراجع

    return parsed;
  } catch (error) {
    console.error("Error fetching tafsir:", error);
    throw error;
  }
}


