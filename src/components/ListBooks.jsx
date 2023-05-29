export default function ListBooks({ titleList }) {

    return (
        <div className="books-visible">
            <div className="text-white font-base">
                <span>{titleList}</span>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <button id="btnLeft">{'<'}</button>
                </div>
                <div id="scroll" className="flex justify-center flex-wrap">

                    <div className="book-visible"><img src="item1.png" alt="" /></div>
                    <div className="book-visible"><img src="item2.png" alt="" /></div>
                    <div className="book-visible"><img src="item3.png" alt="" /></div>
                    <div className="book-visible"><img src="item1.png" alt="" /></div>
                    <div className="book-visible"><img src="item2.png" alt="" /></div>
                    <div className="book-visible"><img src="item3.png" alt="" /></div>
                    <div className="book-visible"><img src="item1.png" alt="" /></div>
                    <div className="book-visible"><img src="item2.png" alt="" /></div>
                    <div className="book-visible"><img src="item3.png" alt="" /></div>
                    <div className="book-visible"><img src="item1.png" alt="" /></div>
                    <div className="book-visible"><img src="item2.png" alt="" /></div>
                    <div className="book-visible"><img src="item3.png" alt="" /></div>


                </div>
                <div>
                    <button id="btnRight">{'>'}</button>
                </div>

            </div>

        </div>
    );
}