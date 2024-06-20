import { ITodo } from "../interface/todo";
import TodoItem from "./TodoItem";

type IProps = {
  todo: ITodo[];
  deleteTodo: (id: number) => void;
  showModalTodo: (id: number) => void;
  showEditModal: (id: number) => void;
  showTodo: number | null;
  editTodo: number | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  editTodoItem: (id: number, title: string, description: string) => void;
  editTitle: string;
  editDescription: string;
};

const TodoList = ({
  todo,
  showModalTodo,
  showTodo,
  deleteTodo,
  editTodo,
  showEditModal,
  handleChange,
  editTodoItem,
  editTitle,
  editDescription
}: IProps) => {
  return (
    <ul className="w-full flex justify-center">
      {todo.length > 0 ? (
        <>
          {todo.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                isOpenTodo={showTodo === item.id}
                isOpenEditTodo={editTodo === item.id}
                showEditModal={showEditModal}
                showModalTodo={showModalTodo}
                deleteTodo={deleteTodo}
                handleChange={handleChange}
                editTodo={editTodoItem}
                editTitle={editTitle}
                editDescription={editDescription}
              />
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
