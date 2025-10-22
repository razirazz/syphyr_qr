import localFont from 'next/font/local';
import { Carattere, Poppins} from "next/font/google";



export const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '800']
});

export const fontAnagram = localFont({
    src: './ANAGRAM.woff2',
    // display: 'swap',
    variable: '--font-anagram'
 
});

export const fontAtacama = localFont({
    src: './AtacamaRegular.woff2',
    variable: '--font-atacama'
})


export const fontCarattere = Carattere({
  variable: "--font-carattere",
  subsets: ["latin"],
  weight: '400',
});