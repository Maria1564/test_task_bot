import { create } from "zustand"
import { IMessage } from "../../types"
import axios from "../../../axiosConfig";
import { normalizeApiData } from "./normalizer";

interface MessagesState {
    messages: IMessage[],
    loading: boolean,
    error: null | string
}

interface MessagesAction {
    getMessageByChatId: (idChat: string) => void;
    addNewMessage: (idChat: string, text: string) => void
}

export const useMessagesStore = create<MessagesState & MessagesAction>()((set, get) => ({
    messages: [],
    loading: false,
    error: null,
    getMessageByChatId: (idChat) => {
        set({error: null, loading: true})
        
        axios.get(`/chat/${idChat}/messages`)
        .then(({data}) => {
            set({messages: normalizeApiData(data.data)})
        })
        .catch((err)=> set({error: err.messages}))
        .finally(() => {set({loading: false})})
    },
    addNewMessage: (idChat) => {
        
        //поместить в then (axios запрос)
        get().getMessageByChatId(idChat)
    }
}))