import React from "react";
import { IMessage } from "../../../../types";
import style from "./ItemMessage.module.css";
import userAvatar from "../../../../assets/user-avatar.png";
import gptAvatar from "../../../../assets/gptIcon.png";
import iconCopy from "../../../../assets/copy.png";

type ItemMessageProps = {
  message: IMessage;
};

const ItemMessage: React.FC<ItemMessageProps> = ({ message }) => {
  return (
    <>
      {message.role === "assistant" ? (
        <div className={style.assist}>
          <img src={gptAvatar} alt="" />
          <div className={style.assist_wrapper}>
            <div className={style.assist_info}>
              <span className={style.model}>ChatGPT</span>
              <span className={style.version_model}>{message.model_id}</span>
            </div>
            <p className={style.assist_text}>{message.content}</p>
            <div className={style.assist_bottom}>
              <div className={style.tools}>
                <span className={style.tokens}>-{message.tokens} CAPS</span>
                <img src={iconCopy} alt="copy" className={style.copy} />
              </div>
                <span className={style.assist_time}>19:54</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.user}>
          <div className={style.user_wrapper}>
            <img src={iconCopy} alt="copy" className={style.copy} />
            <div className={style.user_message}>
              <p className={style.user_text}>{message.content}</p>
              <span className={style.user_time}>09:54</span>
            </div>
          </div>
          <img src={userAvatar} alt="avatar user" />
        </div>
      )}
    </>
  );
};

export default ItemMessage;
