import Button from "./Button";
import { ITodo } from "../interface/todo";
import OptionsTask from "./OptionsTask";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";


type IProps = {
  item: ITodo;
  // deleteTodo: (id: number) => void;
  showModalTodo: () => void;
  showTodo: boolean;
};

const TodoItem = ({ showModalTodo, item, showTodo }: IProps) => {
  return (
    <div className="flex flex-col w-full max-w-[345px] relative">
      <div
        key={item.id}
        className=" border-2 border-[#A35709] p-4 rounded-lg flex justify-between items-center"
      >
        <div>
          <p className="text-2xl text-[#F0E3CA]">{item.title}</p>
          <span className="text-xl text-[#F0E3CA]">{item.description}</span>
        </div>
        <div>
          {showTodo === true ? (
            <Button onClick={showModalTodo}>
              <AiOutlineCloseCircle size={40} color="#A35709" />
            </Button>
          ) : (
            <Button onClick={showModalTodo}>
              <AiOutlinePlusCircle size={40} color="#A35709" />
            </Button>
          )}
        </div>
      </div>
      {showTodo === true ? (
        <div className="flex justify-end mt-2">
          <OptionsTask />
        </div>
      ) : null}
    </div>
  );
};

export default TodoItem;
