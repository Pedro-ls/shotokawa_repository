"use client"
// make a form in React of Sign with tailwind, form orientarion right and a text and logo in the left

import Image from "next/image";
import NextLink from "next/link"
import { useLayoutEffect } from "react";



// <!--
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//    module.exports = {
//      // ...
//      plugins: [
//        // ...
//        require('@tailwindcss/forms'),
//      ],
//    }
//   ```
// -->
// <!--
//   This example requires updating your template:

//   ```
//   <html class="h-full bg-gray-50">
//   <body class="h-full">
//   ```
// -->


export default function FormLogin() {
    useLayoutEffect(() => {
        document.body.style.backgroundImage = "url(/background_quad.png)";
    }, [])

    return (
        <div>
            <div className="flex flex-1 justify-start ml-6 text-md font-bold p-2">
                <div className="flex flex-row space-x-2">
                    <Image src={"/icon_logo.png"} width={30} height={30} alt="logo shotokawa" />
                    <h1 className="font-logo text-d-orange-50 flex flex-row space-x-2">SHOTOKAWA</h1>
                </div>
            </div>
            <div class="flex flex-wrap space-x-2 bg-gray-transparent min-h-full items-start justify-around px-2 pt-2 pb-10 sm:px-6 lg:px-2">
                <div className="w-50 max-w-md text-md font-600 font-bold p-10">
                    <div className="space-y-2">
                        <div className="text-white">
                            Criação de um ecossistema Geek, conectando culturas
                        </div>
                        <div>
                            <NextLink href={"/buy"}>
                                <button className="group relative flex justify-center rounded-md bg-d-orange-50 px-3 py-2 text-sm font-semibold text-white hover:text-d-orange-50 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Confira nossos planos</button>
                            </NextLink>
                        </div>
                    </div>
                </div>
                <div className="w-50 max-w-md bg-black-transparent rounded space-y-2 p-3">
                    <form className="mt-1 space-y-4" action="#" method="POST">
                        <div className="focus:ring-d-orange-50 text-white font-bold text-lg">
                            Entrar
                        </div>
                        <input type="hidden" name="remember" value="true" />
                        <div className="space-y-2 rounded-md shadow-sm">
                            <div>
                                <label for="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" placeholder="Email address" />
                            </div>
                            <div>
                                <label for="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" placeholder="Password" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md bg-d-orange-50 px-3 py-2 text-sm font-semibold text-white hover:text-d-orange-50 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-orange-50">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-white group-hover:text-d-orange-50 group-hover:bg-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Sign in
                            </button>
                        </div>

                        <div className="flex flex-col justify-between items-center">
                            <div className="flex items-center space-x-1">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-400 text-d-orange-50 focus:ring-d-orange-50" />
                                <label for="remember-me" className="block text-sm font-tiny text-white">Lembrar minhas credênciais</label>
                            </div>

                            <div class="text-sm">
                                <a href="#" className="font-medium text-white hover:text-white">Esqueci minha senha</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}