"use client";

import TodoItem from "@/components/TodoItem";

import { useState } from "react";

// type todoId = {
//   id: number;
// };

type todos = {
  id: number;
  title: string;
};

function Home() {
  let inputElem = document.querySelector(".inputElem");
  const [todos, setTodos] = useState<todos[]>([]);
  const [inputVal, setInputVal] = useState<string>("");

  function addTodo() {
    const newTodo: todos = {
      id: todos.length,
      title: inputVal,
    };
    todos.push(newTodo);
    setInputVal("");
    if (inputElem !== null) inputElem.value = "";
  }
  function deleteTodo(a: number) {
    console.log(a);
    setTodos(todos.filter((item) => item.id !== a));
  }
  return (
    <>
      <div className="w-full flex items-center justify-center px-3 min-h-screen bg-gradient-to-b from-[#69E7CF] to-[#4A7FE5]">
        <div className="bg-white p-5 flex flex-col justify-start w-96  min-h-[350px] rounded-xl">
          <h1 className="font-semibold text-xl mb-2">Todo App</h1>
          <div>
            <form className="gap-2 flex justify-between items-center">
              <input
                onChange={(e: EventTarget | any) => setInputVal(e.target.value)}
                className="inputElem outline-none border p-1 xl:p-2 rounded w-full"
                type="text"
                placeholder="Add your new todo"
              />

              <div
                onClick={addTodo}
                className="rounded font-black text-[18px] xl:text-[25px] bg-[#8A49E1] h-full text-white py-1 px-2 xl:px-4"
              >
                +
              </div>
            </form>
          </div>
          <div className="todoCon mb-5">
            <ul>
              {todos.map((item) => (
                <TodoItem
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  deleteTodo={deleteTodo}
                />
              ))}
            </ul>
          </div>
          <div className="footer text-sm flex justify-between items-center mt-auto">
            <span className="">
              you have
              <span className="font-medium"> {todos ? todos.length : 0} </span>
              pending tasks!
            </span>
            <button
              onClick={() => setTodos([])}
              className="bg-[#8E47EF] px-3 py-2 rounded text-white"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
