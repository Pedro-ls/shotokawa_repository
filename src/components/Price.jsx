export default function Price({ mode, price, description, money }) {
   return <div className="w-50 rounded-2xz border-2 border-d-orange-50 my-2 py-5 text-center">
       <div className="px-4">
           <p className="text-base font-semibold text-gray-200">{mode}</p>
           <p className="mt-6 flex items-baseline justify-center">
               <span className="text-5xl font-bold tracking-tight text-white">{price}</span>
               <span className="text-sm font-semibold leading-6 tracking-wide text-d-orange-50">{money}</span>
           </p>
           <a href="#" className="mt-10 block w-50 rounded-md bg-d-orange-50 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-d-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Assinar</a>
           <p className="mt-3 text-xs leading-5 text-gray-400">{description}</p>
       </div></div>
}