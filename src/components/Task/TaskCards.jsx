import React, { useState } from "react";
import { AddTaskCardButton } from "./Button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: 0, dragabbleId: "item0" },
  ]);

  return (
    <div className="taskCardsArea">
      {taskCardsList.map((taskCardList) => (
        <TaskCard key={taskCardList.id} />
      ))}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};
