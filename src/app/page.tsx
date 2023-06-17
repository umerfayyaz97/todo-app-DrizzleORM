import Image from "next/image";
import Todolist from "./components/Todolist";
import AddTodo from "./components/AddTodo";

export default function Home() {
  return (
    <main className=" bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
      <div className="px-3 py-4 rounded-xl bg-white w-full max-w-md  ">
        {/* @ts-ignore} */}
        <Todolist />
        {/* {Add todo} */}
        <AddTodo />
        {/* {Bar} */}

        <div className=" w-1/2 h-1.5 bg-black/70 rounded mt-6 mx-auto"></div>
      </div>
    </main>
  );
}
