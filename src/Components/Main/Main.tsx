import React from "react";
import { NewTask } from "./NewTask/NewTask";
import { Task } from "./Task/Task";

export const Main: React.FC = () => {
  return (
    <>
      <NewTask />
      <Task />
    </>
  );
};
