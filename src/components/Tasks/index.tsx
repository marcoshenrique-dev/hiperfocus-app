'use client'

import { Header } from "./Header";
import { Task } from "./Task";

export const Tasks = () => {
  return (
    <div  className="px-4 overflow-y-auto">
    <Header onAddTask={() => {}}/>

    <section>
      <h3 className="mt-5 font-bold mb-2">To do 🕑 </h3>

      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </section>

    <section className="pb-4">
      <h3 className="mt-5 font-bold mb-2">Finished ✅ </h3>

      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </section>
    </div>
  );
}
