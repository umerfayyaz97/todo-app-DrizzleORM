import { Todo } from "@/lib/drizzle";
import React from "react";

const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application.json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const Todolist = async () => {
  const resdata: { data: Todo[] } = await getData();
  // console.log(resdata);

  return (
    <div className=" max-h-[350px] overflow-auto">
      {resdata.data.map((item) => {
        return (
          <div className="bg-gray-100 px-4 py-4 flex items-center my-1 gap-x-3">
            {/* {circle} */}
            <div className="h-3  w-3 bg-secondary rounded-full"></div>
            {/* {Task title} */}
            <p className="text-lg font-medium">{item.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
