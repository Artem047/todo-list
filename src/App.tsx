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
  const [showTodo, setShowTodo] = useState<number | null>(null);
  const [editModal, setEditModal] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setInputTitle(value);
        break;
      case "description":
        setInputDescription(value);
        break;
      case "editTitle":
        setEditTitle(value);
        break;
      case "editDescription":
        setEditDescription(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputTitle === "" || inputDescription === "")
      return alert("Заполните все поля!!!");
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
    if (showTodo === id) {
      setShowTodo(null);
    }
  }

  const showEditModal = (id: number) => {
    if (editModal === id) {
      setEditModal(null);
    } else {
      const todoItem = todo.find((item) => item.id === id);
      if (todoItem) {
        setEditTitle(todoItem.title);
        setEditDescription(todoItem.description);
      }
      setEditModal(id);
    }
  };

  const showModalTodo = (id: number) => {
    setShowTodo(showTodo === id ? null : id);
  };

  function editTodoItem(id: number, title: string, description: string) {
    const newTodo = todo.map((item) =>
      item.id === id ? { ...item, title, description } : item
    );
    setTodo(newTodo);
    setEditModal(null);
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
      <TodoList
        todo={todo}
        showModalTodo={showModalTodo}
        showTodo={showTodo}
        deleteTodo={deleteTodo}
        editTodo={editModal}
        showEditModal={showEditModal}
        handleChange={handleChange}
        editTodoItem={editTodoItem}
        editTitle={editTitle}
        editDescription={editDescription}
      />
    </div>
  );
};

export default App;
