import Price from './Price'
import BackComic from './BackComic'
export default function Prices({ data }) {    
    return (
        <BackComic>
            <div className="bg-d-black-85 flex flex-col items-center py-2 sm:py-4">
                <div className="space-y-5">

                    <h2 className="text-3xl text-center font-bold text-d-orange-50 sm:text-4xl">Planos de Assinatura</h2>

                    <div className="rounded-3xl flex flex-wrap justify-center">
                        {data.map((val, index) => <Price key={index} mode={val?.mode} price={val?.price} money={"R$"} description={val?.description} />)}
                    </div>
                </div>
            </div>
        </BackComic>

    );
}