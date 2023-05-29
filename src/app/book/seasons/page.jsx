export default () => {
    return (
        <div className="container flex flex-col">
            <div>
                <label className="text-d-orange-50 text-xs" forhtml="title">title</label>
                <input className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" type="text" name="title" />
            </div>
            <div>
                <label className="text-d-orange-50 text-xs" forhtml="soon">soon</label>
                <input className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" type="text" name="soon" />
            </div>
            <div>
                <label className="text-d-orange-50 text-xs" forhtml="releasedate">releasedate</label>
                <input className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" type="text" name="releasedate" />
            </div>
            <div>
                <label className="text-d-orange-50 text-xs" forhtml="episodes">episodes</label>
                <input className="bg-transparent block w-full rounded-md border-0 py-1.5 text-d-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-d-orange-50 sm:text-sm sm:leading-6" type="file" multiple={true} name="episodes" />
            </div>
        </div>
    )
}