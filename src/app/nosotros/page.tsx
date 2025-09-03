import Image from "next/image";
import Link from "next/link";

function NosotrosPage(){
    return (
        <div className="flex justify-center items-center w-[70vw] h-[90vh] mx-auto gap-6">
            <div className="flex flex-col items-center h-full justify-center pt-[20rem]">
                <h2 className=" text-[4rem]">Inmobiliaria y constructora dedicada al desarrollo y venta de proyecto de bajo costo.</h2>
                <Link href={"https://www.instagram.com/p/DN0p9tvXFs0/"} target="_blank">
                    <Image src={"/image.png"} alt="IG" width={500} height={300}/>
                </Link>
            </div>

        </div>
    )
}

export default NosotrosPage;