import { useState } from "react";

import { Tododate } from "./TodoDate";
import { TodoAdd } from "./TodoAdd";
import { TodoMap } from "./TodoMap";
import { TodoDeleteAll } from "./TodoDeleteAll";
import { getLocalStoarge, setLocalStoarge } from "./LocalStaorage";

export const StateHelper = () => {
  const todokey = "reactToDo";
  const [task, setTask] = useState(() => getLocalStoarge());

  //   submit function
  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };
  setLocalStoarge(task);

  //   delete function
  const handleDeleteTodo = (value) => {
    const updateTask = task.filter((curTask) => curTask.content !== value);
    setTask(updateTask);
  };

  //   delete all element function
  const handleAllDelete = () => {
    setTask([]);
  };

  const handleCheckTodo = (value) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content == value) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <>
      <div className="min-h-screen flex  justify-center bg-blue-900">
        <div className="w-2xl h-[600px]  mt-15 flex flex-col items-center ">
          <h1 className=" text-4xl text-white font-bold mt-1 text-center">
            Todo List
          </h1>
          <Tododate />
          <TodoAdd onAddTodo={handleSubmit} />
          <section>
            <ul>
              {/* map method is used for looping because for loop is not used in jsx*/}
              {task.map((curTask, index) => {
                return (
                  <TodoMap
                    key={curTask.id}
                    data={curTask.content}
                    checked={curTask.checked}
                    onhandleDeleteTodo={handleDeleteTodo}
                    onhandleCheckTodo={handleCheckTodo}
                  />
                );
              })}
            </ul>
          </section>
          <section>
            <TodoDeleteAll onhandleAllDelete={() => handleAllDelete(value)} />
          </section>
        </div>
      </div>
    </>
  );
};
