import { useState } from "react";
const { v4: uuidv4 } = require("uuid");

function index() {
  // name and call the state

  const [todoItem, setTodoItem] = useState("");
  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),

          message: todoItem,
          done: false,
        },
        ...items,
      ]);
      setTodoItem("");
    }
  };
  const [items, setItems] = useState([
    {
      id: "1234",
      message: "Buy Milk",
      done: false,
    },
  ]);

  return (
    <>
      <h2 className="text-neutral-700 font-extrabold text-5xl items-center justify-center mx-auto text-center">
        TO-DO-LIST
      </h2>
      <div className="items-center justify-center mx-auto text-center mt-5">
        <input
          type="text"
          className="font-bold text-3xl border-gray-300  border-3 rounded focus:border-gray-500"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button
          className="font-semibold  ml-5 text-4xl text-gray-600 text-right items-right justify-end ml-auto"
          onClick={handleAdd}
        >
          Add+
        </button>
        <ul className="text-2xl font-bold">
          {items.map(({ id, message }) => (
            <li key={id}>{message}</li>
          ))}
          <li>{todoItem}</li>
        </ul>
      </div>
    </>
  );
}

export default index;
