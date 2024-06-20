import React from "react";
import Button from "../Button";
import Input from "../Input";

type TProps = {
  closeModal: (id: number) => void;
  itemId: number;
  title: string;
  description: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  editTodo: (id: number, title: string, description: string) => void;
};

const EditModal = ({
  closeModal,
  itemId,
  title,
  description,
  handleChange,
  editTodo,
}: TProps) => {
  return (
    <div className="fixed bg-[#070707E3] opacity-90 w-full h-full top-0 left-0 flex justify-center items-center ">
      <div className="bg-[#1B1A17] w-1/2 h-1/2 rounded-lg flex flex-col justify-center items-center gap-4 py-3">
        <Input
          name="editTitle"
          value={title}
          type="text"
          className="w-[300px] text-[#F0E3CA] border-[#A35709] border rounded py-2 px-4 outline-none"
          placeholder="Title..."
          onChange={handleChange}
        />
        <textarea
          name="editDescription"
          value={description}
          className="w-[300px] text-[#F0E3CA] border-[#A35709] border rounded py-2 px-4 outline-none min-h-[200px]"
          placeholder="Description..."
          onChange={handleChange}
        ></textarea>
        <div className="flex gap-4">
          <Button
            className="border-[#A35709] border-2 rounded w-[120px] p-2 text-white"
            onClick={() => closeModal(itemId)}
          >
            Cancel
          </Button>
          <Button
            className="border-[#A35709] border-2 rounded w-[120px] p-2 text-white"
            onClick={() => editTodo(itemId, title, description)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
