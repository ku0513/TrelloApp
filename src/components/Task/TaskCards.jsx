import React from "react";
import { AddTaskCardButton } from "./Button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  return (
    <div className="taskCardsArea">
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};
