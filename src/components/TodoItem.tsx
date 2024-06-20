import { AiOutlineCloseSquare } from "react-icons/ai";
import Button from "./Button";
import { ITodo } from "../interface/todo";

type IProps = {
  item: ITodo;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({ deleteTodo, item }: IProps) => {
  return (
    <div
      key={item.id}
      className="w-full max-w-[345px] border-2 border-[#A35709] p-4 rounded-lg flex justify-between"
    >
      <div>
        <p className="text-2xl text-[#F0E3CA]">{item.title}</p>
        <span className="text-xl text-[#F0E3CA]">{item.description}</span>
      </div>
      <Button onClick={() => deleteTodo(item.id)}>
        <AiOutlineCloseSquare size={40} color="#A35709" />
      </Button>
    </div>
  );
};

export default TodoItem;
