"use client" 
import { useEffect, useState } from 'react';
import { FaBookOpen, FaInfo } from 'react-icons/fa'
export default function Apresentation({ listBooks }) {
    const [book, setBook] = useState({})

    const changeSlide = (idBook) => {
        setBook(listBooks[idBook])
    }
    useEffect(() => {
        changeSlide(0)
    }, [])

    return (
        <div id="topApresentationBooks" style={{ backgroundImage: `url('` + book.photo + `')`, backgroundSize: "cover", maxLines: 20, backgroundRepeat: "no-repeat", backdropFilter: "fit", backgroundClip: "content-box" }} className="w-100 text-justify flex flex-row justify-between">
            <div className='p-5 space-y-6'>
                <span className="text-white font-extrabold text-6xl font-title-anime">{book.title}</span>
                <p className="w-80 text-white min-h-12 max-h-72">{String(book.description).slice(0, (String(book.description).length / 10) * 9)}
                    {
                        (String(book.description).length > ((String(book.description).length / 10) * 9))
                            ? // if
                            <a className="text-blue-400 hover:text-blue-700 hover:underline">
                                mais
                            </a>
                            : // else
                            <></>
                    }
                </p>
                <div className="actions-apresentation d-flex flex space-x-2 w-80">
                    <button className="border-2 bg-opacity-yellow hover:text-yellow-600 hover:bg-white hover:border-white border-solid border-yellow-300 px-3 py-1 text-white">
                        <div className="d-flex flex flex-row items-center space-x-1">
                            <div>
                                <FaBookOpen />
                            </div>
                            <div>
                                <span>Ler Livro</span>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 bg-opacity-gra hover:text-gray-600 hover:bg-white hover:border-white border-solid border-white px-3 py-1 text-white">
                        <div className="d-flex flex flex-row items-center space-x-1">
                            <div>
                                <FaInfo size={12} />
                            </div>
                            <div>
                                <span>Mais Informações</span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className='pt-7 mr-10'>
                <div>
                    {
                        listBooks.map((value, index) => {

                            return <button key={index} className="block bookSlide" onClick={() => changeSlide(index)}><img src={value.photo} alt={value.title} /></button>
                        })
                    }
                </div>
            </div>
        </div>
    );
}