export default function InputTextArea({ ID, title = "", name = "", placeholder = "" }) {
    return <div>
        <label className="text-d-orange-50 text-xs" forhtml={ID}>{title}</label>
        <textarea id={ID} className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" type="textarea" name={name} placeholder={placeholder}></textarea>

    </div>;
}