import {Book} from "../../../types";

const BookCard: React.FC<Book> = ({ title, author, price, stock }) => {
  return (
    <div className="p-4 rounded bg-amber-200 w-64">
      <p className="text-base	font-bold">{title}</p>
      <div className="mt-2.5 flex flex-col">
        <div className="my-2">
          <p className="font-bold">Author: </p><p>{author}</p>
        </div>
        <div className="my-2">
          <p className="font-bold">Price: </p><p>{price} $</p>
        </div>
        <div className="my-2">
          <p className="font-bold">In stock: </p><p>{stock} $</p>
        </div>
      </div>
      <div className="flex justify-center align-items-center my-4">
        <button className="p-4 bg-white">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default BookCard;
