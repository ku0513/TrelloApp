import React from "react";
import { AddTaskCardButton } from "./Button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};
