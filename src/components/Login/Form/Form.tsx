import React, { useRef, useState } from "react";
import style from "./Form.module.css";
import { useNavigate } from "react-router";

const Form: React.FC = () => {
  const [error, setError] = useState<string>("");

  const navigate = useNavigate()

  const inpEmail = useRef<HTMLInputElement | null>(null);
  const inpPassword = useRef<HTMLInputElement | null>(null);


  const handleLogin = () => {
    if(inpEmail.current !== null && inpPassword.current !== null){
      if(inpEmail.current.value.trim() === "" || inpPassword.current.value.trim() === ""){
        setError("есть незаполненные поля")
        return
      }

      localStorage.setItem("login", inpEmail.current.value.trim())
      localStorage.setItem("password", inpPassword.current.value.trim())

      inpEmail.current.value = ""
      inpPassword.current.value = ""

      navigate("/dashboard", {replace: true})
    }
  };

  return (
    <div className={style.form}>
      <div className={style.email}>
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ваш E-Mail"
          className={style.input}
          ref={inpEmail}
        />
      </div>
      <div className={style.password}>
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ваш пароль"
          className={style.input}
          ref={inpPassword}
        />
      </div>
      {error && <span className={style.error}>{error}</span>}
      <button className={style.btn} onClick={handleLogin}>
        Войти
      </button>
    </div>
  );
};

export default Form;
