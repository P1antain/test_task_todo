import React from "react";
import styles from "./Element.module.css";
import deleteSvg from "../../../Images/Svg/delete-svgrepo-com.svg";
import editSvg from "../../../Images/Svg/edit-svgrepo-com.svg";
import { useAppDispatch } from "../../../Redux/hooks";
import {
  deleteTask,
  editTaskExecuted,
  editTaskText,
} from "../../../Redux/Reducer/defaultReducer";
import { useForm, SubmitHandler } from "react-hook-form";
import {Inputs} from "./Element.interface";

export const Element: ({ item }: any) => JSX.Element = ({
  item,
}: object[] | any) => {
  const dispatch = useAppDispatch();
  //Удаление
  const itemDelete = () => {
    dispatch(deleteTask(item.id));
  };
  //Выполнение
  const itemCompleted = () => {
    dispatch(editTaskExecuted(item.id));
  };
  //Редактирование
  const [inEdit, setEdit] = React.useState<boolean>(false);
  const itemEdit = () => {
    setEdit(!inEdit);
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const result = data.task;
    const elem = item.id;
    dispatch(editTaskText({ elem, result }));
    setEdit(false);
  };
  const closedForm = () => {
    setEdit(false);
    reset();
  };
  return (
    <>
      <li className={styles.list}>
        <div className={styles.text}>
          {" "}
          <input
            type="checkbox"
            className={styles.check}
            onClick={itemCompleted}
          />
          <span
            className={
              item.executed ? styles.executed_true : styles.executed_false
            }
          >
            {item.text}
          </span>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.date}>{item.date}</span>
          <button className={styles.btn} onClick={itemEdit}>
            <img src={editSvg} alt={"Edit"} className={styles.img} />
          </button>
          <button onClick={itemDelete} className={styles.btn}>
            <img src={deleteSvg} alt={"Delete"} className={styles.img} />
          </button>
        </div>
      </li>
      {inEdit && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.block}>
            <input
              placeholder={"New name"}
              {...register("task", { required: true })}
              className={styles.input}
            />

            <input type="submit" value={"Save"} className={styles.edit} />
            <button
              type={"button"}
              onClick={closedForm}
              className={styles.edit}
            >
              Closed
            </button>
          </div>
          {errors.task && (
            <span className={styles.err}>This field is required</span>
          )}
        </form>
      )}
    </>
  );
};
