import Image from "next/image";
import SYPHYR from '../public/assets/OnlySyphyrBlack.svg'
import SYPHYR_Full from '../public/assets/SyphyrFullBlack.png'
import { fontPoppins, fontAnagram, fontAtacama, fontCarattere } from "../public/fonts/fonts"; 
import '../app/globals.css'
import SocialMedia from "../app/social-links";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
    <script src="https://kit.fontawesome.com/8a78e192ec.js" crossorigin="anonymous"></script>
    return (
        <body className={`${fontPoppins.variable} ${fontAtacama.variable} ${fontCarattere.variable} ${fontAnagram.variable} `}>
                <div className="w-screen h-screen overflow-hidden flex flex-col justify-between relative items-center">
                    <div className="h-[10vh] sm:h-[15vh] w-screen bg-foreground absolute top-0 left-0 z-0 text-(--highlight) flex justify-end items-end pr-3 pb-1 text-[0.7rem] sm:text-[1rem]">Rise. Reign. Radiate</div>
                    <div className="z-1 flex flex-col sm:mt-9 mt-5 gap-1 sm:w-[50%] w-[90%] sm:text-[1rem] text-sm">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="bg-background text-foreground rounded-[100%] p-2 shadow-lg">
                                <Image src={SYPHYR_Full} alt="SYPHYR Full Logo" className="w-[30vw] sm:w-[9vw]" />
                            </div>
                            <div className="flex flex-col justify-center items-center text-center gap-1 sm:gap-2 mt-3 sm:mt-5">
                                <div className="text-2xl font-bold">
                                    Team &nbsp;<span className="font-(family-name:--font-anagram) tracking-widest">SYPHYR</span>
                                </div>
                                <div className="font-(family-name:--font-atacama) w-[90%] sm:w-[80%] tracking-wide">
                                    A minimal, confident, and futuristic fashion brand redefining elegance through timeless design and purposeful detail.
                                </div>
                            </div>
                            <div className='w-screen h-px bg-radial from-(--foreground-disabled) to-50% to-transparent flex items-center justify-center mt-8 mb-4'></div>
                        </div>


                        <div className="mt-5 flex flex-col gap-3 items-start justify-start z-0 h-[42%] sm:h-[30%]">
                            <div className="text-[1rem] sm:text-[1.1rem] pl-5 sm:pl-6 underline underline-offset-4">
                                Find us on
                            </div>
                            <div className="flex flex-col overflow-y-scroll w-full overflow-x-hidden relative gap-2 sm:gap-6 items-center pb-[20%] ">
                            
                                { 
                                    SocialMedia.map((
                                        links, index
                                    ) => {
                                        return (
                                            <div className="w-[95%] shadow-lg p-5 rounded-2xl">
                                                <Link className="w-[25%] "
                                                    key={index}
                                                    href={links.path}
                                                >
                                                    {links.icon} &nbsp; {links.name}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                                {/* <div className="text-right rotate-90 h-fit sticky top-0 translate-y-[150%]">
                                    Scroll 
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-screen h-[20vh] sm:h-auto sm:w-auto overflow-hidden flex justify-center fixed sm:bottom-0 sm:-right-32 -bottom-14 ">
                    <Image src={SYPHYR} alt="SYPHYR" className="w-[90vw] sm:w-[41vw] flex justify-center items-center bg-center bg-cover object-cover sm:rotate-270"/>
                </div>

        </body>
    )
}