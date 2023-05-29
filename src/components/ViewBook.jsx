import { MdStarOutline } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import Bar from "./Bar";

export default (props) => {
    const Section = ({ title, content }) => {
        return <div className="flex flex-col">
            <span className="text-white text-xs font-semibold">{title}</span>
            <span className="text-white text-xs font-extralight">{content}</span>
        </div>
    }

    const Info = ({ title, content }) => {
        return <div className="flex flex-row py-1">
            <span className="text-white text-xs font-light">{title}: </span>
            <span className="text-white text-xs font-extralight">{content}</span>
        </div>
    }

    return (<>
        <Bar />
        <main id="application" className="flex justify-evenly">
            <div className="w-3/12 bg-black py-4">
                <div className="flex flex-col">
                    <div className="self-center">
                        <figure className="self-center relative">
                            <img src="/item2.png" />

                            <figcaption className="absolute bottom-0 w-full bg-gradient-to-b from-gray-transparent via-black-transparent to-black bg-opacity-50">
                                <h3 className="my-0 py-0 text-sm text-white">teste</h3>
                                <h4 className="my-0 py-0 text-xs text-gray-300 font-thin">teste</h4>
                            </figcaption>
                        </figure>
                        <div>

                            <Section title="titulo" content="conteudo" />
                            <Section title="titulo" content="conteudo" />
                            <div className="flex flex-row justify-center space-x-3 py-2">
                                <button className="flex flex-row text-gray-300 justify-center items-center px-2 py-1 rounded-full bg-zinc-800 text-xs font-normal"><span><MdStarOutline color="gray" /></span> <span className="text-white">Favorito</span></button>
                                <button className="flex flex-row text-gray-300 justify-center items-center px-2 py-1 rounded-full bg-zinc-800 text-xs font-normal"><AiOutlineLike color="gray" /></button>
                                <button className="flex flex-row text-gray-300 justify-center items-center px-2 py-1 rounded-full bg-zinc-800 text-xs font-normal"><span><AiOutlineDislike color={"gray"} /></span></button>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-4 py-1 bg-orange-500 text-white">Continuar leitura</button>
                    </div>
                </div>
            </div>
            <div className="w-6/12 bg-black border border-x-1 border-gray-400">

                <section>
                    <div className="flex space-x-2 px-3 py-4">
                        <button className="flex flex-row text-gray-300 justify-center items-center px-2 py-1 rounded bg-zinc-800 text-xs font-normal">Capitulos</button>
                        <button className="flex flex-row text-gray-300 justify-center items-center px-2 py-1 rounded bg-orange-500 text-xs font-normal">Sinopse</button>
                        <button className="flex flex-row text-gray-300 justify-center items-center px-2 py-1 rounded bg-zinc-800 text-xs font-normal">Noticiais</button>
                    </div>
                </section>
                <section className="px-3 py-1">
                    <span className="text-white">Sinopse:</span>
                    <p className="word-wrap text-zinc-100 break-words text-justify text-xs font-light">kdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[ldskdajofpjsdkp[lds</p>
                </section>
                <section className="px-4 py-2">
                    <span>Mais Informações</span>
                    <div className="flex flex-col h-24 flex-wrap">
                        <Info title="titulo" content="conteudo" />
                        <Info title="titulo" content="conteudo" />
                        <Info title="titulo" content="conteudo" />
                        <Info title="titulo" content="conteudo" />
                        <Info title="titulo" content="conteudo" />
                    </div>
                </section>
                <section>
                    <figure className="flex justify-center p-2">
                        <img className="w-20" src="/photo.jpg" />
                    </figure>
                </section>
                <section>
                    <div className="flex justify-center p-3 space-x-2">
                        <div className="flex flex-col space-y-1 px-1">
                            <p className="text-center text-white">Teste 1</p>
                            <img className="w-14" src="/photo.jpg" />
                        </div>
                        <div className="flex flex-col space-y-1 px-1">
                            <p className="text-center text-white">Teste 1</p>
                            <img className="w-14" src="/photo.jpg" />
                        </div>
                        <div className="flex flex-col space-y-1 px-1">
                            <p className="text-center text-white">Teste 1</p>
                            <img className="w-14" src="/photo.jpg" />
                        </div>

                    </div>
                </section>

            </div>
            <div className="w-3/12 flex-1 bg-zinc-800">
                <section className="py-4 flex flex-col">
                    <span className="text-center text-white pb-4">Titulos Semelhantes</span>
                    <div className="flex flex-col self-center justify-center space-y-2">
                        <div>
                            <img className="w-32" src="/item1.png" />
                        </div>
                        <div>
                            <img className="w-32" src="/item2.png" />
                        </div>
                        <div>
                            <img className="w-32" src="/item3.png" />
                        </div>

                    </div>
                </section>
            </div>
        </main>
    </>);
}