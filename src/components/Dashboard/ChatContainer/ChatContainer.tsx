import React, { useEffect } from 'react'
import style from "./ChatContainer.module.css"
import { useParams } from 'react-router'
import { useMessagesStore } from '../../../store/messageStore'
import ItemMessage from './ItemMessage'
import InputMessage from './InputMessage'

const ChatContainer: React.FC = () => {
  const {id: idChat} = useParams()
  
  const getMessages = useMessagesStore(state => state.getMessageByChatId)
  const messages = useMessagesStore(state => state.messages)
  const loading = useMessagesStore(state => state.loading)
  const status_response_bot = useMessagesStore(state => state.status_response)

  useEffect(()=> {
    if(idChat){

      getMessages(idChat)
    }
  }, [getMessages, idChat])

  
  console.log(messages)
  return (
    <div className={style.chat}>
        <div className={style.messages}>
          {loading && <h2>Загрузка...</h2>}
          {!loading && messages.map(message => (
            <ItemMessage key={message.id} message={message}/>
          ))}
          {status_response_bot && <h3>Печатает...</h3>}
        </div>
        <div className={style.field}>
            <InputMessage/>
        </div>
    </div>
  )
}

export default ChatContainer