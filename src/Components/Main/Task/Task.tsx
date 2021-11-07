import React from "react";
import { useAppSelector } from "../../../Redux/hooks";
import { Element } from "../Element/Element";
import styles from "./Task.module.css";

export const Task: React.FC = () => {
  const elem = useAppSelector((state) => state.default.task);
  return (
    <>
      <ul className={styles.lists}>
        {elem.map((todo) => {
          return <Element key={todo.id} item={todo} />;
        })}
      </ul>
    </>
  );
};
