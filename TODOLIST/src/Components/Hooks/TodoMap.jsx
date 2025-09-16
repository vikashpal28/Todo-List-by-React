import { MdCheckCircle, MdDelete } from "react-icons/md";
export const TodoMap = ({ data, checked, onhandleDeleteTodo,onhandleCheckTodo }) => {
  return (
    <li className="bg-white w-[340px] h-15 mt-5 p-2 rounded-l-2xl rounded-r-2xl flex justify-between items-center text-2xl">
      <span className={`${checked ? "line-through" : ""}`}>{data}</span>
      <div className="flex flex-row gap-7">
       <button>
        {/* for icons we used react icons */}
        {<MdCheckCircle className="text-green-500"  onClick={() => onhandleCheckTodo(data)}/>}
      </button>
      <button onClick={() => onhandleDeleteTodo(data)}>
        {<MdDelete className="text-red-600" />}
      </button>
      </div>
      
    </li>
  );
};
