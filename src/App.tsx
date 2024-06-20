import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineCloseSquare } from "react-icons/ai";

interface ITodos {
  id: number;
  title: string;
  description: string;
}

const App = () => {
  const [todo, setTodo] = useState<ITodos[]>([]);
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setInputTitle(value);
        break;
      case "description":
        setInputDescription(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodo([
      ...todo,
      { id: todo.length, title: inputTitle, description: inputDescription },
    ]);
    setInputTitle("");
    setInputDescription("");
  }

  function deleteTodo(id: number) {
    const newTodo = [...todo];
    newTodo.splice(id, 1);
    setTodo(newTodo);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="flex flex-col">
          <input
            name="title"
            type="text"
            value={inputTitle}
            onChange={handleChange}
            className="w-[300px] text-[#F0E3CA] border-[#FF8303] border rounded py-2 px-4 outline-none"
            placeholder="Title..."
          />
          <input
            name="description"
            type="text"
            value={inputDescription}
            onChange={handleChange}
            className="w-[300px] text-[#F0E3CA] border-[#FF8303] border rounded py-2 px-4 outline-none"
            placeholder="Description..."
          />
        </div>
        <button type="submit">
          <CiSquarePlus size={110} color="#FF8303" />
        </button>
      </form>
      <ul className="w-full flex justify-center">
        {todo.length > 0 ? (
          <>
            {todo.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className="w-full max-w-[345px] border-2 border-[#A35709] p-4 rounded-lg flex justify-between"
                >
                  <div>
                    <p className="text-2xl text-[#F0E3CA]">{todo.title}</p>
                    <span className="text-xl text-[#F0E3CA]">
                      {todo.description}
                    </span>
                  </div>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <AiOutlineCloseSquare size={40} color="#A35709" />
                  </button>
                </li>
              );
            })}
          </>
        ) : (
          <div>
            <p className="text-white text-2xl border-t-2 border-b-2 border-[#FF8303] py-3">
              No task
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default App;
