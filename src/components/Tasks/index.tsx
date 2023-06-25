'use client'

import { tasksContext } from "@/hooks/TasksContext";
import { useContext, useEffect } from "react";
import { EmptyTasks } from "../Empty";
import { Header } from "./Header";
import { Task } from "./Task";

export const Tasks = () => {

  const {addTask, tasks} = useContext(tasksContext);

  return (
    <div  className="px-4 overflow-y-auto">

    <Header totalTasks={{
      todo: tasks.filter(item => item.checked).length,
      total: tasks.length
    }} onAddTask={addTask}/>

    {
      tasks.length === 0 ? (
        <EmptyTasks />
      ): (
      <>
        <section>
          <h3 className="mt-5 font-bold mb-2">To do 🕑</h3>

          {tasks.filter(item => !item.checked).map(item => (
                  <Task checked={item.checked} description={item.description} running={item.running} id={item.id} key={item.id} />
          ))}
        </section>
        <section className="pb-4">
          <h3 className="mt-5 font-bold mb-2">Finished ✅</h3>

            {tasks.filter(item => item.checked).map(item => (
                    <Task checked={item.checked} description={item.description} running={item.running} id={item.id} key={item.id} />
            ))}
        </section>
      </>
      )
    }
    </div>
  );
}
