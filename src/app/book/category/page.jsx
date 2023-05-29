import InputText from '@/components/units/InputText';
import InputTextArea from '@/components/units/InputTextArea';
import React from 'react';
import { MdCreate, MdDelete, MdEditNote, MdList } from 'react-icons/md';

export default function CategoryIndex() {

    return (
        <>
            <div className='fixed bottom-0 right-0 p-4 rounded bg-gray-black space-y-3'>
                <div className='group  flex justify-end overflow-visible'>
                    <a className="p-4 flex w-12 h-12 group-hover:w-auto group-hover:h-auto justify-end items-center rounded-full group-hover:rounded-md  bg-d-orange-50 text-white" href="#listBooksID">
                        <span className='hidden group-hover:block'>
                            Listar Categorias
                        </span>
                        <MdList size={20} color='white' />
                    </a>
                </div>
                <div className='group flex justify-end'>
                    <a className="p-4 flex w-12 h-12 overflow-visible group-hover:w-auto group-hover:h-auto  justify-end items-center rounded-full group-hover:rounded-md bg-d-orange-50 text-white" href="#form_exemplar">
                        <span className='hidden group-hover:block'>
                            Criar uma Categoria
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
                                        Romance
                                    </th>
                                    <td className="px-6 py-4 font-bold">
                                        Um entrosamento amoroso entre os personagens
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
                            <h4>Cadastro de Categoria</h4>
                        </div>
                    </div>
                    <fieldset className="container px-6 py-4 items-center space-y-3">

                        <InputText
                            ID={"name"}
                            title='Nome da Categoria'
                            placeholder='Insira o nome da categoria'
                            name='name'
                        />
                        <InputTextArea
                            ID="description"
                            title='descrição'
                            placeholder='Insira uma descrição da categoria' name="description"
                        />
                    </fieldset>
                </div>

            </div>
        </>
    )
}