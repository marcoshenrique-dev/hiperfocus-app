import { ButtonRounded } from "@/components/Button";
import { tasksContext } from "@/hooks/TasksContext";
import { Task as IPropsTask } from "@/types/Task";

import { PauseIcon, PlayIcon, TrashIcon } from "@heroicons/react/24/solid";

import { useContext } from "react";

export const Task = ({checked, description, running, id}: IPropsTask) => {

  const {updateStatus, taskRunning, deleteTask} = useContext(tasksContext);

  return (
    <div className="flex flex-row border-b items-center justify-between pb-4 pt-3 border-dashed border-slate-300 dark:border-slate-700">
      <div>
        <input type="checkbox" id="1" name="1" checked={checked} onChange={(e) => updateStatus({id, checked: !checked})}/>
        <label className="ml-2 font-medium" htmlFor="1">{description}</label>
      </div>

      <div className="flex flex-row gap-3">
        <ButtonRounded 
          disabled={taskRunning && taskRunning.id !== id ? true : false}
          onClick={() => updateStatus({id, running: !running})} variant="primary">
          {running ? <PauseIcon className="w-3.5 h-3.5"/> : <PlayIcon className="w-3.5 h-3.5"/>}
        </ButtonRounded>
        <ButtonRounded onClick={() => deleteTask(id)} variant="red"><TrashIcon className="w-3.5 h-3.5"/></ButtonRounded>
      </div>
    </div>
  );
}
