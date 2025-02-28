import React, { useEffect, useState } from 'react'
import { useChatsStore } from '../../../../store/chatStore';
import { IChat } from '../../../../types';
import style from "./MainContent.module.css"
import ItemChat from './ItemChat';
import iconAddChat from "../../../../assets/add-chat.png"
import iconSearchChat from "../../../../assets/search-simple.png"


const MainContent: React.FC = () => {

const [listChats, setListChats] = useState<IChat[]>([]);
  const getChats = useChatsStore((state) => state.getAllChats);
  const addChat = useChatsStore(state => state.addNewChat)

  const chats = useChatsStore((state) => state.chats);
  const loading = useChatsStore((state) => state.loading);

  useEffect(() => {
    getChats();
  }, [getChats]);

  useEffect(() => {
    if (!loading) {
      setListChats(chats);
    }
  }, [loading, chats]);


  const addNewChat = () => {
    const name: string|null = prompt("Введите название")

    if(typeof name === "string" && name.trim() !== "") {
        addChat(name)
    }
  }

  return (
    <main className={style.main}>
        <div className={style.btn_panel}>
            <button className={style.add} onClick={addNewChat}>
                <img src={iconAddChat} alt="icon add-chat" />
            </button>
            <button className={style.search}>
                <img src={iconSearchChat} alt="icon search-chat" />
            </button>
        </div>
        <div className={style.list_chats}>
            {
                listChats.map((chat) => (
                    <ItemChat key={chat.id} chat={chat}/>
                ))
            }
        </div>
    </main>
  )
}

export default MainContent