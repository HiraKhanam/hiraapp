import { useEffect, useState } from "react";
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
  const [items, setItems] = useState([]);
  // remove item from the list
  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setItems(items.filter((item) => (item.id === id ? newValue : item)));
  };

  return (
    <>
      <h2 className="text-neutral-700 font-extrabold text-5xl items-center justify-center mx-auto text-center">
        TO-DO-LIST
      </h2>
      <div className="flex flex flex-col items-center justify-center mx-auto text-center mt-5">
        <div className="flex flex-col items-center justify-center w-96">
          <input
            placeholder="Enter List"
            type="text"
            className="font-bold text-base text-gray-500 focus:outline-none border border-gray-400 rounded-md px-3 py-2 w-full"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <button
            className="font-semibold flex items-center justify-center mt-4 text-sm text-white text-right items-right bg-indigo-700 px-3 py-2 rounded-md w-full"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <ul className="text-2xl font-bold w-96 ">
          {items.map(({ id, message }) => (
            <li
              className="cursor-pointer bg-gray-100 p-2 mt-3 flex items-center justify-start"
              key={id}
            >
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-3 mt-2"></div>{" "}
              {message}
              <button className="ml-auto" onClick={() => handleRemove(id)}>
                Remove
              </button>
              <button className="ml-auto" onClick={() => handleEdit(id)}>
                Eidit
              </button>
            </li>
          ))}
          {items.length > 0 && (
            <p className="text-gray-500 mt-2">Click on them to delete</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default index;
