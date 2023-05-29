import { MdAddCircleOutline, MdBook, MdRemoveCircleOutline, MdStar } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";
export default function Book({
    id,
    title,
    description,
    status,
    cover_photo,
    mode = ""
}) {
    console.log(title)
    return (
        <figure className="relative book">
            <img className="book-img-visible" src="item1.png" alt="" />
            <figcation className="book-figcaption-visible">
                <div className="flex flex-col">
                    <span className="text-xs font-black text-d-orange-50 py-1">Aventura</span>
                    <span className="text-ss text-zinc-300">Drama - Suspense</span>
                    <div className="flex flex-row justify-around">
                        <div className="flex flex-row">
                            <i><MdStar color="yellow" size={10} /></i>
                            <i><MdStar color="yellow" size={10} /></i>
                            <i><MdStar color="yellow" size={10} /></i>
                            <i><MdStar color="yellow" size={10} /></i>
                            <i><MdStar color="yellow" size={10} /></i>
                        </div>
                        <span className="text-xs">
                            <IoMdTrophy color="yellow" size={12} />
                        </span>
                    </div>
                    <span className="px-1 py-2 text-white font-semibold text-sm">
                        {title}
                    </span>
                    <div className="flex justify-evenly items-center">
                        {
                            mode == "MyList" ?
                                <>
                                    <div>
                                        <button className="flex flex-col items-center justify-center">
                                            <i>
                                                <MdBook
                                                    color="white" size={20}
                                                />
                                            </i>
                                            <span className="text-white text-ss">
                                                Ler Agora
                                            </span>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="flex flex-col items-center justify-center">
                                            <i><MdRemoveCircleOutline color="white" size={24} /></i>
                                        </button>
                                    </div></>
                                : <>
                                    <div>
                                        <button className="flex flex-col items-center justify-center">
                                            <i>
                                                <MdBook color="white" size={20} />
                                            </i>
                                            <span className="text-white text-ss">
                                                Ler Agora
                                            </span>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="flex flex-col items-center justify-center">
                                            <i><MdAddCircleOutline color="white" size={24} /></i>
                                        </button>
                                    </div>
                                </>
                        }

                    </div>
                </div>



            </figcation>
            <span className="block bg-red-700 text-white absolute right-0 bottom-0 text-center p-2 text-ss font-bold">
                16
            </span>
        </figure>
    );
}