import { ButtonRounded } from "@/components/Button";
import { PauseIcon, TrashIcon } from "@heroicons/react/24/solid";

export const Task = () => {
  return (
    <div className="flex flex-row border-b items-center justify-between pb-4 pt-3 border-dashed border-slate-300 dark:border-slate-700">
      <div>
        <input type="checkbox" id="1" name="1" />
        <label className="ml-2 font-medium" htmlFor="1">Plan app mobile</label>
      </div>

      <div className="flex flex-row gap-3">
        <ButtonRounded variant="primary"><PauseIcon className="w-3.5 h-3.5"/></ButtonRounded>
        <ButtonRounded variant="red"><TrashIcon className="w-3.5 h-3.5"/></ButtonRounded>
      </div>
    </div>
  );
}
