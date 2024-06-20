import { ITodo } from "../interface/todo";
import TodoItem from "./TodoItem";

type IProps = {
    todo: ITodo[];
    deleteTodo: (id: number) => void;
}

const TodoList = ({ todo, deleteTodo }: IProps) => {
  return (
    <ul className="w-full flex justify-center">
      {todo.length > 0 ? (
        <>
          {todo.map((item) => {
            return (
              <TodoItem item={item} deleteTodo={deleteTodo} />
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
  );
};

export default TodoList;