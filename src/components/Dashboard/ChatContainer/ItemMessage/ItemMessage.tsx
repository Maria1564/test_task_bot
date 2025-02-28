import React from "react";
import { IMessage } from "../../../../types";
import style from "./ItemMessage.module.css";

type ItemMessageProps = {
  message: IMessage;
};

const ItemMessage: React.FC<ItemMessageProps> = ({ message }) => {
  return (
    <>
      {message.role === "assistant" ? (
        <div className={style.mess_assist}>ass {message.content}</div>
      ) : (
        <div className={style.mess_user}> user {message.content}</div>
      )}
    </>
  );
};

export default ItemMessage;
