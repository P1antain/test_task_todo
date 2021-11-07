import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./NewTask.interface";
import styles from "./NewTask.module.css";
import { useAppDispatch } from "../../../Redux/hooks";
import { getTask } from "../../../Redux/Reducer/defaultReducer";

export const NewTask: React.FC = () => {
  //Redux
  const dispatch = useAppDispatch();
  //React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let result = data.task;
    dispatch(getTask(result));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.wrapper}>
          <input
            placeholder={"New task"}
            {...register("task", { required: true })}
            className={styles.input}
          />
          <button className={styles.btn}>Save</button>
        </div>
        {errors.task && (
          <span className={styles.err}>This field is required</span>
        )}
      </form>
    </>
  );
};
