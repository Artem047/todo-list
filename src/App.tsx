import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { ITodo } from "./interface/todo";
import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState<ITodo[]>([]);
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
    if (inputTitle === "" || inputDescription === "") return;
    setTodo([
      ...todo,
      { id: todo.length, title: inputTitle, description: inputDescription },
    ]);
    setInputTitle("");
    setInputDescription("");
  }

  function deleteTodo(id: number) {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="flex flex-col gap-2">
          <Input
            name="title"
            type="text"
            value={inputTitle}
            onChange={handleChange}
            className="w-[300px] text-[#F0E3CA] border-[#FF8303] border rounded py-2 px-4 outline-none"
            placeholder="Title..."
          />
          <Input
            name="description"
            type="text"
            value={inputDescription}
            onChange={handleChange}
            className="w-[300px] text-[#F0E3CA] border-[#FF8303] border rounded py-2 px-4 outline-none"
            placeholder="Description..."
          />
        </div>
        <Button type="submit">
          <CiSquarePlus size={110} color="#FF8303" />
        </Button>
      </form>
      <TodoList todo={todo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
