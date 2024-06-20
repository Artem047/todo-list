import Button from "./Button";
import { ITodo } from "../interface/todo";
import OptionsTask from "./OptionsTask";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import EditModal from "./modals/EditModal";
import TruncateText from "./TruncateText";

type IProps = {
  item: ITodo;
  deleteTodo: (id: number) => void;
  showModalTodo: (id: number) => void;
  showEditModal: (id: number) => void;
  isOpenTodo: boolean;
  isOpenEditTodo: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  editTodo: (id: number, title: string, description: string) => void;
  editTitle: string;
  editDescription: string;
};

const TodoItem = ({
  showModalTodo,
  item,
  isOpenTodo,
  deleteTodo,
  showEditModal,
  isOpenEditTodo,
  handleChange,
  editTodo,
  editTitle,
  editDescription,
}: IProps) => {
  return (
    <div className="flex flex-col w-full max-w-[345px] relative">
      <div className=" border-2 border-[#A35709] p-4 rounded-lg flex justify-between items-center">
        <div>
          <p className="text-2xl text-[#F0E3CA]">
            <TruncateText text={item.title} num={15} />
          </p>
          <span className="text-xl text-[#F0E3CA]"><TruncateText text={item.description} num={20} /></span>
        </div>
        <div>
          <Button onClick={() => showModalTodo(item.id)}>
            {isOpenTodo ? (
              <AiOutlineCloseCircle size={40} color="#A35709" />
            ) : (
              <AiOutlinePlusCircle size={40} color="#A35709" />
            )}
          </Button>
        </div>
      </div>
      {isOpenTodo ? (
        <div className="flex justify-end mt-2">
          <OptionsTask
            deleteTodo={deleteTodo}
            itemId={item.id}
            showEditModal={showEditModal}
          />
        </div>
      ) : null}
      <div>
        {isOpenEditTodo ? (
          <EditModal
            closeModal={showEditModal}
            itemId={item.id}
            title={editTitle}
            description={editDescription}
            handleChange={handleChange}
            editTodo={editTodo}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TodoItem;
