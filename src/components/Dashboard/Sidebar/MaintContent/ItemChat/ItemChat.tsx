import React from 'react'
import { IChat } from '../../../../../types'
import style from "./ItemChat.module.css"
import { ReactComponent as IconTrash } from '../../../../../assets/trash.svg';
import {ReactComponent as IconChat} from "../../../../../assets/sidebar-chat.svg"
import { useChatsStore } from '../../../../../store/chatStore'
import { NavLink } from 'react-router'

type ItemChatProps = {
    chat: IChat
}


const isActiveLink = ({isActive}: {isActive: boolean}) => (isActive ? style.active_link : "") 
const ItemChat: React.FC<ItemChatProps> = ({chat}) => {

  const deleteChat = useChatsStore(state => state.deleteChat)

  const deleteChatById = () => {
    deleteChat(chat.id)
  }

  return (
    <div className={style.item_chat}>
      <NavLink to={`chat/${chat.id}`} className={(props) => `${isActiveLink(props)} ${style.text}`}>
        <IconChat className={style.icon_chat}/>
        {chat.nameChat}
      </NavLink>
      
        <IconTrash className={style.btn_delete} onClick={deleteChatById}/>
      </div>
  )
}

export default React.memo(ItemChat)