import { MdDelete, MdEditNote } from 'react-icons/md'

export default function Table({ ID, children }) {
    return (
        <table id={ID} className="table-auto w-full text-sm text-left text-zinc-400">
            {children}
        </table>
    )
}

export const Tr = ({ children }) => {
    return (
        <tr className="text-ss border-b bg-zinc-800 border-zinc-700 hover:bg-zinc-600">
            {children}
        </tr>
    )
}

export const Td = ({ children }) => {
    return (<td className="px-6 py-4 font-bold">
        {children}
    </td>)
}

export const ActionsTable = () => {
    const stringClassBtn = "flex justify-center items-center text-sm space-x-2 font-extrabold hover:underline ";
    return (
        <>
            <td className="px-4 py-2 font-extrabold">
                <button href="#" className={stringClassBtn + "text-orange-500"}>
                    <span>Alterar</span>
                    <MdEditNote size={24} color='orange' />
                </button>
            </td>
            <td className="px-4 py-2 text-right font-extrabold">
                <button href="#" className={stringClassBtn + "text-red-500"}>
                    <span>Apagar</span>
                    <span>
                        <MdDelete size={24} color='red' />
                    </span>
                </button>
            </td>
        </>
    );
}