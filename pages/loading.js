import Image from "next/image";
import SYPHYR_Full from '../public/assets/SyphyrFullBlack.png'

export default function Loading() {
    return (
        <div>
            <Image src={SYPHYR_Full} alt="Logo" />
        </div>
    )
}