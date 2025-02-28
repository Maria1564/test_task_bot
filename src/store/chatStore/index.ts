import axios from "../../../axiosConfig";
import { create } from "zustand";
import { normalizeApiData } from "./normalizers";
import { ApiChat, IChat } from "../../types";

interface ChatsState {
  chats: IChat[];
  loading: boolean;
  error: null | string;
}

interface ChatsAction {
  getAllChats: () => void;
  addNewChat: (nameNewChat: string) => void;
  deleteChat: (id: string) => void;
}

export const useChatsStore = create<ChatsState & ChatsAction>()((set) => ({
  chats: [],
  loading: false,
  error: null,
  getAllChats: () => {
    set({ loading: true, error: null });
    axios
      .get("/chat/list")
      .then(({ data }) => {
        set({ chats: normalizeApiData<ApiChat[], IChat[]>(data.data)});
      })
      .catch((err) => set({ error: err.message }))
      .finally(() => {
        set({ loading: false });
      });
  },
  addNewChat: (nameNewChat) => {
    set({ error: null });
    axios
      .post("/chat", { name: nameNewChat })
      .then(({ data }) => {
        set((state) => ({
          chats: [normalizeApiData<ApiChat, IChat>(data), ...state.chats],
        }));
      })
      .catch((err) => set({ error: err.message }));
  },
  deleteChat: (idChat)=> {
    set({ error: null });
      axios.delete(`/chat/${idChat}`)

      set(state => ({chats: state.chats.filter(chat => chat.id !== idChat)}))
  }
}));
