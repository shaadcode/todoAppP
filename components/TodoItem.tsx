import Home from "@/app/page";

type todoItemProps = {
  id: number;
  title: string;
  deleteTodo: (todoId: number) => void;
};

const TodoItem: React.FC<todoItemProps> = ({ id, title, deleteTodo }) => {
  return (
    <>
      <li className="todo w-full h-10 flex items-center overflow-hidden relative p-3 mt-3 rounded-md font-medium bg-slate-100 ">
        {title}
        <div
          onClick={() => deleteTodo(id)} // Update prop name to `todoId`
          className="delete cursor-pointer text-xs font-black absolute right-[-70px] w-16 flex justify-center items-center h-full text-white bg-[#E14E46] "
        >
          DELETE
        </div>
      </li>
    </>
  );
};

export default TodoItem;
