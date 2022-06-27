import { useEffect, useState } from "react";
const { v4: uuidv4 } = require("uuid");

function index() {
  // name and call the state

  const [todoItem, setTodoItem] = useState([]);
  const [update, setUpdate] = useState("");
  const [updateInput, setUpdateInput] = useState(false);
  const [updateId, setUpdateId] = useState("");
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

  //  update item from the list
  const handleUpdate = (id) => {
    setUpdateInput(true);
    setUpdateId(id);
  };
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    setItems(items.map((item) => (item.id === updateId ? { ...item, message: update } : item)));
    setUpdateInput(false);
    setUpdate("");
    setUpdateId("");
  };

  console.log(items);
  return (
    <>
      <h2 className="text-neutral-700 font-extrabold text-5xl items-center justify-center mx-auto text-center">TO-DO-LIST</h2>
      <div className="flex flex flex-col items-center justify-center mx-auto text-center mt-5">
        <div className="flex flex-col items-center justify-center w-96">
          <input placeholder="Enter List" type="text" className="font-bold text-base text-gray-500 focus:outline-none border border-gray-400 rounded-md px-3 py-2 w-full" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
          <button className="font-semibold flex items-center justify-center mt-4 text-sm text-white text-right items-right bg-indigo-700 px-3 py-2 rounded-md w-full" onClick={handleAdd}>
            Add
          </button>
        </div>
        <ul className="text-2xl font-bold w-96 ">
          {items.map(({ id, message }) => (
            <li className="cursor-pointer bg-gray-100 p-2 mt-3 flex items-center justify-start" key={id}>
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-3 mt-2"></div> {message}
              <button className="ml-auto" onClick={() => handleRemove(id)}>
                Remove
              </button>
              <button
                className="ml-auto"
                onClick={() => {
                  handleUpdate(id);
                }}
              >
                Edit
              </button>
            </li>
          ))}
          {updateInput === true && (
            <form onSubmit={handleUpdateSubmit} className="mt-4">
              <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                Update
              </label>
              <input value={update} onChange={(e) => setUpdate(e.target.value)} className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
              <button className="font-semibold flex items-center justify-center mt-4 text-sm text-white text-right items-right bg-indigo-700 px-3 py-2 rounded-md w-full">Update</button>
            </form>
          )}
        </ul>
        <div className="flex flex-col md:mr-16"></div>
      </div>
    </>
  );
}

export default index;
