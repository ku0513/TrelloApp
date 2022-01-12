import React from "react";
import { TaskCardDeleteButton } from "./Button/TaskCardDeleteButton";
import { TaskAddInput } from "./Input/TaskAddInput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  );
};
