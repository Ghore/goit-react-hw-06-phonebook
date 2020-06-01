import React from "react";
import { CSSTransition } from "react-transition-group";
import style from "../css/task.module.css";
import titleTransition from "../css/titleTransition.module.css";

export function InputForm({ handleChange, contact, number, propAnimation }) {
  return (
    <>
      <CSSTransition
        in={propAnimation}
        timeout={2000}
        classNames={titleTransition}
        unmountOnExit
      >
        <h2 className={style.title}>Phonebook</h2>
      </CSSTransition>

      <h2 className={style.title}>Name</h2>
      <input
        name="contact"
        placeholder="Enter your name"
        onChange={handleChange}
        value={contact}
        type="text"
      />
      <h3 className={style.title}>Number</h3>
      <input
        name="number"
        placeholder="+38(0__)___-___-__"
        onChange={handleChange}
        value={number}
        // type="number"
      />
    </>
  );
}
