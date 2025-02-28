import React from 'react'
import { IChat } from '../../../../../types'
import style from "./ItemChat.module.css"
import iconTrash from "../../../../../assets/trash.png"
import iconChat from "../../../../../assets/sidebar-chat.png"
import { useChatsStore } from '../../../../../store/chatStore'

type ItemChatProps = {
    chat: IChat
}

const ItemChat: React.FC<ItemChatProps> = ({chat}) => {

  const deleteChat = useChatsStore(state => state.deleteChat)

  const deleteChatById = () => {
    deleteChat(chat.id)
  }

  return (
    <div className={style.item_chat}>
      <div className={style.text}>
        <img src={iconChat} alt="icon chat" />
        {chat.nameChat}
      </div>
        <button className={style.btn_delete} onClick={deleteChatById}>
          <img src={iconTrash} alt="icon trash" />
        </button>
      </div>
  )
}

export default React.memo(ItemChat)