'use client'

import { Task } from '@/types/Task';
import {v4} from 'uuid';

import React, { createContext, useState } from 'react';

type UpdateStatusTask = {
  id: string;
  running?: boolean;
  checked?: boolean;
}

type TasksContextType = {
  tasks: Task[];
  addTask(description: string): void;
  taskRunning: Task | null;
  setTaskRunning: React.Dispatch<React.SetStateAction<Task | null>>;
  updateStatus({id, checked, running}: UpdateStatusTask): void;
  deleteTask(id: string): void;
  resetTasks(): void;
};

export const tasksContext = createContext({} as TasksContextType);

export const TasksProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskRunning, setTaskRunning] = useState<Task | null>(null);

  function addTask(description: string) {

    if(description === '') {
      alert('Your text description is empty');
      return;
    }

    const updateTasks = [...tasks];

    updateTasks.push({
      description,
      id: v4(),
      checked: false,
      running: false,
    });

    setTasks(updateTasks);
  }

  function resetTasks() {
    setTasks([]);
    setTaskRunning(null);
  }

  function updateStatus({id, checked, running}: UpdateStatusTask) {
    const tasksUpdate = [...tasks];

    const taskIndex = tasksUpdate.findIndex(item => item.id === id);

    if(taskIndex === -1) {
      alert('Task not found');
      return;
    }

   if(checked !== undefined) tasksUpdate[taskIndex].checked = checked;

   if(running !== undefined) {
     tasksUpdate[taskIndex].running = running;
     if(running) setTaskRunning(tasksUpdate[taskIndex])
     else setTaskRunning(null);
   }
  
   setTasks(tasksUpdate);
  }

  function deleteTask(id: string) {
    const tasksUpdate = [...tasks];
    
    const taskIndex = tasksUpdate.findIndex(item => item.id === id);

    if(taskIndex === -1) {
      alert('Task not found');
      return;
    }

    tasksUpdate.splice(taskIndex, 1);

    setTasks(tasksUpdate);

    if(taskRunning && taskRunning.id === id) {
      setTaskRunning(null);
    }
  }

  return (
    <tasksContext.Provider value={{ addTask, tasks, updateStatus, taskRunning, setTaskRunning, deleteTask, resetTasks }}>
      {children}
    </tasksContext.Provider>
  );
};
