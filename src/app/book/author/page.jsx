import InputText from '@/components/units/InputText';
import InputTextArea from '@/components/units/InputTextArea';
import Selection from '@/components/units/Selection';
import React from 'react';
import { MdCreate, MdDelete, MdEditNote, MdList } from 'react-icons/md';

export default function AuthorIndex() {

    return (
        <>
            <div className='fixed bottom-0 right-0 p-4 rounded bg-gray-black space-y-3'>
                <div>
                    <a className="group/list p-4 flex justify-center items-center rounded-full group-hover/list:rounded-md  bg-d-orange-50 text-white" href="#listBooksID">
                        <span className='hidden group-hover/list:block'>
                            Listar Autores
                        </span>
                        <MdList size={20} color='white' />
                    </a>
                </div>
                <div>
                    <a className="group/create p-4 flex justify-center items-center rounded-full group-hover/create:rounded-md bg-d-orange-50 text-white" href="#form_exemplar">
                        <span className='hidden group-hover/create:block'>
                            Criar um Autor
                        </span>
                        <MdCreate size={20} color='white' />
                    </a>
                </div>
            </div>
            <div className="flex justify-center w-full flex-wrap">

                <div className="w-8/12 m-4 rounded-md bg-zinc-900">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                        <table id="listBooksID" className="table-auto w-full text-sm text-left text-zinc-400">
                            <thead className="text-xs uppercase bg-zinc-700 text-zinc-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        nome
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        descrição
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        nascimento
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        mangas publicados
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Editar</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Excluir</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-ss border-b bg-zinc-800 border-zinc-700 hover:bg-zinc-600">
                                    <th scope="row" className="px-6 py-4 font-extrabold  whitespace-nowrap text-white">
                                        Gustavo Geek
                                    </th>
                                    <td className="px-6 py-4 font-bold">
                                        Apaixonado por animes
                                    </td>
                                    <td className="px-6 py-4 font-bold">
                                        2001
                                    </td>
                                    <td className="px-6 py-4 font-bold">
                                        20
                                    </td>

                                    <td className="px-4 py-2 font-extrabold">
                                        <button href="#" className="flex justify-center items-center text-sm space-x-2 font-extrabold text-orange-500 hover:underline"><span>Alterar</span> <MdEditNote size={24} color='orange' /></button>
                                    </td>
                                    <td className="px-4 py-2 text-right font-extrabold">
                                        <button href="#" className="flex justify-center items-center text-sm space-x-2 font-extrabold text-red-500 hover:underline"><span>Apagar</span><span><MdDelete size={24} color='red' /></span></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                <div id="form_exemplar" className="w-4/12 bg-zinc-800 mt-5 rounded-lg">
                    <div>
                        <div className='px-3 py-2 rounded-sm text-md font-semibold uppercase bg-zinc-700 text-zinc-200'>
                            <h4>Cadastro de Autor</h4>
                        </div>
                    </div>
                    <fieldset className="container px-6 py-4 items-center space-y-3">

                        <InputText
                            ID={"name"}
                            title='Nome do Autor'
                            placeholder='Insira o nome do autor'
                            name='name'
                        />
                        <InputTextArea
                            ID="description"
                            title='descrição'
                            placeholder='Insira uma descrição do autor' name="description"
                        />
                        <InputText
                            ID={"year"}
                            title='Ano de Nascimento'
                            placeholder='Insira o ano de nascimento'
                            name='year'
                        />
                    </fieldset>
                </div>

            </div>
        </>
    )
}