import Link from 'next/link';
import { FaPencilAlt, FaSearch } from 'react-icons/fa';
import { MdEditCalendar, MdMore, MdMoreHoriz, MdNotifications, MdSettings } from 'react-icons/md';

import CategoriesSearch from './CategoriesSearch';

const Bar = () => {
    // const { login, user } = useAuth()

    // useEffect(() => {
    //     (async () => {
    //         await login({ email: "admin@gmail.com", password: "12345678" })
    //     })()

    // }, [])


const user = {
    name: "teste"
} 



    return (

        <header id="bar" className="bg-black group transition duration-150 ease-out hover:ease-in">
            <nav>

                <section className="text-center font-bold space-y-50">
                    <div className="pb-2 flex justify-center space-y-2">
                        <h3 className="font-logo text-d-orange-50 mt-3 text-base text-bolder object-none">
                            SHOTOKAWA
                        </h3>
                    </div>
                    <div className="pb-2 group-hover:border group-hover:border-x-0 transition duration-150 ease-out hover:ease-in group-hover:border-b-0 group-hover:pt-3 group-hover:border-gray-500 group-hover:mx-3">
                        <figure className="flex justify-center items-center ">
                            <div className="relative-cls-pack">
                                <img className=" w-14 h-14 img-resize border overflow-hidden img-z rounded-full" src="/photo.jpg" alt="Foto do usuário" />
                                <figcaption className="absolute-full">
                                    <div className="flex justify-center items-center">
                                        <Link href={"/user/profile"}>
                                            <span className="flex items-center text-sm font-normal"><FaPencilAlt size={11} /> Perfil </span>
                                        </Link>
                                    </div>
                                </figcaption>
                            </div>
                        </figure>
                    </div>
                    <div className="pb-3 object-none">
                        <span className="text-xs font-normal text-white mb-10">{user?.name ? user?.name : "carregando"}</span>
                    </div>
                </section>
                <fieldset className='object-none border border-x-0 border-y-1 border-gray-600 mb-2 py-3 group-hover:mx-3'>
                    <form action="" method="post" className="d-flex flex justify-center">
                        <div className="bg-white rounded border-none outline-none">
                            <input className="rounded w-24 h-6 p-2 outline-none border-none" type="search" name="" placeholder="Buscar..." id="" />
                            <button className="px-1"><FaSearch color='lightgray' size={11} /></button>
                        </div>
                    </form>
                </fieldset>
                <section>
                    <div className="flex flex-custom justify-center">
                        <div className='menu-logo-none p-1'><a href=""><FaSearch color='white' size={20} /></a></div>
                        <div className='p-1'><a href=""><MdNotifications color='white' size={20} /></a></div>
                        <div className='p-1'><a href=""><MdSettings color='white' size={20} /></a></div>
                        <div className='p-1'><a href=""><MdEditCalendar color='white' size={20} /></a></div>
                        <div className='menu-logo-none p-1'><a href=""><MdMoreHoriz color='white' size={20} /></a></div>
                    </div>
                </section>
                <CategoriesSearch />
            </nav>


        </header>
    );
}
export default Bar