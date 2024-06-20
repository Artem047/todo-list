import Button from "./Button";
import { ITodo } from "../interface/todo";
import OptionsTask from "./OptionsTask";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";

type IProps = {
  item: ITodo;
  deleteTodo: (id: number) => void;
  showModalTodo: (id: number) => void;
  isOpen: boolean;
};

const TodoItem = ({ showModalTodo, item, isOpen, deleteTodo }: IProps) => {
  return (
    <div className="flex flex-col w-full max-w-[345px] relative">
      <div className=" border-2 border-[#A35709] p-4 rounded-lg flex justify-between items-center">
        <div>
          <p className="text-2xl text-[#F0E3CA]">{item.title}</p>
          <span className="text-xl text-[#F0E3CA]">{item.description}</span>
        </div>
        <div>
          <Button onClick={() => showModalTodo(item.id)}>
            {isOpen ? (
              <AiOutlineCloseCircle size={40} color="#A35709" />
            ) : (
              <AiOutlinePlusCircle size={40} color="#A35709" />
            )}
          </Button>
        </div>
      </div>
      {isOpen ? (
        <div className="flex justify-end mt-2">
          <OptionsTask deleteTodo={deleteTodo} itemId={item.id} />
        </div>
      ) : null}
    </div>
  );
};

export default TodoItem;
