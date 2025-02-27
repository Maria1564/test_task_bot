import React from 'react'
import style from "./Form.module.css"

const Form: React.FC = () => {
  return (
    <div className={style.form}>
            <div className={style.email}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name="email" id="email" placeholder="Ваш E-Mail" className={style.input}/>
            </div>
            <div className={style.password}>
                <label htmlFor="password">Пароль</label>
                <input type="password" name="password" id="password" placeholder="Ваш пароль"  className={style.input}/>
            </div>
            <button className={style.btn}>Войти</button>
        </div>
  )
}

export default Form