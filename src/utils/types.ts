export type SurahOrJuz='juz'|'surah'
export interface Welcome {
  code:   number;
  status: string;
  data:   Data;
}

export interface Data {
  number:  number;
  ayahs:   Ayah[];
  surahs:  { [key: string]: Surah };
  edition: Edition;
}

export interface Ayah {
  number:        number;
  text:          string;
  surah:         Surah;
  numberInSurah: number;
  juz:           number;
  manzil:        number;
  page:          number;
  ruku:          number;
  hizbQuarter:   number;
  sajda:         boolean | SajdaClass;
}

export interface SajdaClass {
  id:          number;
  recommended: boolean;
  obligatory:  boolean;
}

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: "Meccan" | "Medinan";
  ayahs: Ayah[];
}



export interface Edition {
  identifier:  string;
  language:    string;
  name:        string;
  englishName: string;
  format:      string;
  type:        string;
  direction:   string;
}
