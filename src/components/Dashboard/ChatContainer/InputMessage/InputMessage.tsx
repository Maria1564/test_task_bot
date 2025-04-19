import React, { useState } from 'react'
import style from "./InputMessage.module.css"
import IconSend from "../../../../assets/send.png"
import { useParams } from 'react-router'
import { useMessagesStore } from '../../../../store/messageStore'


const InputMessage: React.FC = () => {
  const {id: idChat} = useParams()
  const [inpValue, setInpValue] = useState("")
  const addNewMess = useMessagesStore(state => state.addNewMessage)

  const onSendMessage  = () => {
    
    if(idChat){
      addNewMess(idChat, inpValue)
      setInpValue("")
    }
  }

  return (
    <div className={style.wrapper}>
        <input type="text" placeholder='Спроси о чем-нибудь...' className={style.input} value={inpValue} onChange={(event) => setInpValue(event.target.value)}/>
        <button className={style.btn_send} onClick={onSendMessage}>
            <img src={IconSend} alt="" />
        </button>
    </div>
  )
}

export default InputMessage