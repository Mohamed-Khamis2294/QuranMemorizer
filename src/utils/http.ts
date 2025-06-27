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
