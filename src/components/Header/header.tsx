import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaRocket } from "react-icons/fa";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }


  const newTaskInputEmpty = !title

  return (
    <header className={styles.header}>
      
      <FaRocket className={styles.rocket} size={50} />
      <h1 className={styles.to}>to</h1>
      <h1 className={styles.do}>do</h1>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button type="submit" disabled={newTaskInputEmpty}>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
