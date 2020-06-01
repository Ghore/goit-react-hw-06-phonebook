import React from "react";
import style from "../css/button.module.css";
import stylecss from "../css/list.module.css";
const ListItem = ({ contact: { contact, number, id }, deleteItem }) => {
  return (
    <li className={stylecss.items}>
      <p>
        {contact}: {number}
      </p>
      <button className={style.button} id={id} onClick={() => deleteItem(id)}>
        X
      </button>
    </li>
  );
};

export default ListItem;
