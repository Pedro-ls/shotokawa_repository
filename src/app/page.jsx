import Apresentation from "@/components/Apresentation";
import Bar from "@/components/Bar";
import ListHorizontalBooks from "@/components/ListHorizontalBooks";
import { Fragment } from "react";

export default async function Home() {
  const listBooks = [
    {
      id_book: 0,
      title: "APAGÃO 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum",
      photo: "APAGÃO 1.png",
    },
    {
      id_book: 1,
      title: "APAGÃO 2",
      description: " belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ",
      photo: "APAGÃO 1.png",
    },
    {
      id_book: 3,
      title: "APAGÃO 3",
      description: "which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to rep",
      photo: "APAGÃO 1.png",
    }
  ]

  const comicsData = await (await fetch("http://localhost:3001/comics")).json();

  const categoriesVisible = [
    {
      id: 1,
      titleList: 'Sua Lista',
      mode: 'MyList',
      comicsData: []
    },
    {
      id: 2,
      titleList: 'Recents',
      mode: '',
      comicsData: []
    },
    {
      id: 3,
      titleList: 'Em Alta',
      mode: '',
      comicsData: []
    },
    {
      id: 4,
      titleList: 'Categorias que você gosta',
      mode: '',
      comicsData: []
    }
  ]

  return (
    <div>
      <Fragment>
        <Bar />
        <main id="application">
          <Apresentation listBooks={listBooks} />
         {
          categoriesVisible.map((val, index) => <ListHorizontalBooks key={index} {...val} />)
         }
        </main>
      </Fragment>
    </div>
  );
}
