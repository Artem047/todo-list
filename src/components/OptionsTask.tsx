import { MdEdit, MdDelete, MdInfoOutline } from "react-icons/md";
import Button from "./Button";

type TProps = {
    showEditModal: (id: number) => void;
    deleteTodo: (id: number) => void;
    itemId: number;
};

const OptionsTask = ({ deleteTodo, itemId, showEditModal }: TProps) => {
  return (
    <div>
      <ul className="flex gap-3">
        <Button className="border-2 border-[#A35709] w-10 h-10 flex justify-center items-center rounded-md">
          <MdInfoOutline size={25} color="white" />
        </Button>
        <Button className="border-2 border-[#A35709] w-10 h-10 flex justify-center items-center rounded-md">
          <MdEdit size={25} color="white" onClick={() => showEditModal(itemId)} />
        </Button>
        <Button onClick={() => deleteTodo(itemId)} className="border-2 border-[#A35709] w-10 h-10 flex justify-center items-center rounded-md">
          <MdDelete size={25} color="white" />
        </Button>
      </ul>
    </div>
  );
};

export default OptionsTask;
