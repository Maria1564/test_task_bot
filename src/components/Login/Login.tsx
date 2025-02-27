import React from "react";
import style from "./Login.module.css";
import close from "../../assets/close.png";
import Form from "./Form";

const Login: React.FC = () => {
  return (
    <div className={style.login}>
      <div className={style.modal}>
        <div className={style.top}>
          <h1 className={style.title}>Авторизация</h1>
          <button className={style.btn_close}>
            <img src={close} alt="close icon" />
          </button>
        </div>
        <Form/>
      </div>
    </div>
  );
};

export default Login;
