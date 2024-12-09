import {mockData} from "../../providers/mockedData.tsx";
import BookCard from "./res/BookCard.tsx";
const Books = () => {
  return (
    <div className="flex flex-grow flex-wrap gap-2 p-5">
      {mockData.map((book) => (
        <BookCard price={book.price} author={book.author} key={book.id} title={book.title} stock={book.stock} />
      ))}
    </div>
  )
}

export default Books;
