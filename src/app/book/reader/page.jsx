import { useState } from 'react'
import ComicViewer from 'react-comic-viewer'
export default function Reader() {

    const [reader, setReader] = useState(false)
    return <div className='flex flex-col container-fluid' style={{
        backgroundImage: 'url(\'/background_quad.png\')',

    }}>
        <div className='px-4 py-2 bg-zinc-900 rounded-md fixed'>
            <span className='text-base font-bold'>Modo de leitura</span>
            <div className='space-x-1'>
                <button className='px-4 py-1 rounded bg-zinc-800 text-white' onClick={() => {
                    setReader(false)
                }}>Modo Scroll</button>
                <button className='px-4 py-1 rounded bg-zinc-800 text-white' onClick={() => {
                    setReader(true)
                }}>Modo Slider</button>
            </div>
        </div>
        <div className='mt-20 px-4 py-4'>
            {reader ?
                (
                    <ComicViewer text={"Novo Livro"} className={{
                        page: "bg-black py-2",
                        mainController: "bg-zinc-900",
                        controller: "bg-zinc-900",
                        img: "px-3 py-2",
                        scaleController: "rounded-md px-2 bg-orange-950",
                        nextNavigationButton: "p-4 rounded-full bg-zinc-700",
                        centerButton: "p-4 rounded-full bg-zinc-700",
                        prevNavigationButton: "p-4 rounded-full bg-zinc-700",


                    }} direction='ltr' pages={["/item2.png", "/item3.png", "/item2.png", "/item3.png"]} />
                ) : (
                    <div className='flex flex-col items-center space-y-1'>
                        <div>
                            <img className="w-80" src="/item2.png" />
                        </div>
                        <div>
                            <img className="w-80" src="/item2.png" />
                        </div>
                        <div>
                            <img className="w-80" src="/item2.png" />
                        </div>
                        <div>
                            <img className="w-80" src="/item2.png" />
                        </div>
                        <div>
                            <img className="w-80" src="/item2.png" />
                        </div>
                        <div>
                            <img className="w-80" src="/item2.png" />
                        </div>
                        <div>
                            <img className="w-80" src="/item2.png" />
                        </div>
                        <div>
                            <img className="w-80" src="/item2.png" />
                        </div>
                    </div>
                )
            }
        </div>



    </div>
}