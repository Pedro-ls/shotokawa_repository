"use client"
import { useEffect } from "react";

export default function RegisterPage(props) {
    useEffect(() => {
        document.body.classList.add('bg-d-black-85')
    }, [])
    return (
        <>
            <div className="p-6 flex justify-center">
                <form className="container">

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-d-orange-50">Cadastro de usuário</h2>


                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label for="first-name" className="block text-sm font-medium leading-6 text-d-orange-50">First
                                    name</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                        className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label for="last-name" className="block text-sm font-medium leading-6 text-d-orange-50">Last
                                    name</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                        className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label for="email" className="block text-sm font-medium leading-6 text-d-orange-50">Email
                                    address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email"
                                        className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label for="username" className="block text-sm font-medium leading-6 text-d-orange-50">Username</label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-d-orange-50 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-300 sm:text-sm">workcation.com/</span>
                                        <input type="text" name="username" id="username" autocomplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-d-orange-50 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="janesmith" />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label for="city" className="block text-sm font-medium leading-6 text-d-orange-50">City</label>
                                <div className="mt-2">
                                    <input type="text" name="city" id="city" autocomplete="address-level2"
                                        className="block bg-transparent w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="region" className="block text-sm font-medium leading-6 text-d-orange-50">State /
                                    Province</label>
                                <div className="mt-2">
                                    <input type="text" name="region" id="region" autocomplete="address-level1"
                                        className="block w-full bg-transparent rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label for="country" className="block text-sm font-medium leading-6 text-d-orange-50">Country</label>
                                <div className="mt-2">
                                    <select id="country" name="country" autocomplete="country-name"
                                        className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>


                            <div className="col-span-full">
                                <label for="cover-photo" className="block text-sm font-medium leading-6 text-d-orange-50">Cover
                                    photo</label>
                                <div
                                    className="mt-2  bg-black  flex justify-center rounded-lg border border-dashed border-d-orange-50/80 px-6 py-10">
                                    <div className="text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                                            aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label for="file-upload"
                                                className="relative cursor-pointer rounded-md bg-d-orange-50 px-3 py-2 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-d-orange-50 focus-within:ring-offset-2 hover:text-d-orange-50">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1 px-3 py-2 ">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label for="photo" className="block text-sm font-medium leading-6 text-d-orange-50">Photo</label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <button type="button"
                                        className="rounded-md bg-d-orange-50 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-orange-300 hover:bg-orange-500">Change</button>
                                </div>




                            </div>
                        </div>


                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-d-orange-50">Cancel</button>
                        <button type="submit"
                            className="rounded-md bg-orange-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-d-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-orange-50">Save</button>
                    </div>
                </form>
            </div>
        </>
    );
}