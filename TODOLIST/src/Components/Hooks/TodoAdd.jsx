import { useState } from "react";

export const TodoAdd = ({onAddTodo}) =>{
     const [inputValue, setInputValue] = useState([]);
     const handleSubmit = () =>{
        onAddTodo(inputValue)
        setInputValue({id:"",content:"",checked:false});
     }

    const handleInputChange = (value) => {
    setInputValue({id:value , content : value , checked:false});
  };
    return(
          <div className="mt-5 flex">
                    <input
                      type="text"
                      placeholder="enter the task"
                      className="bg-white  outline-0 w-[250px] h-11  rounded-l-2xl p-2"
                      aria-autocomplete="off"
                      value={inputValue.content}
                      onChange={(event) => handleInputChange(event.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-blue-400 h-11 p-0.5 text-1xl rounded-r-2xl text-white border border-blue-400"
                      onClick={() => handleSubmit()}
                    >
                      Add Task
                    </button>
                  </div>
    )
}