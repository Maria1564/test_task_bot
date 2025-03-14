import { create } from "zustand";
import { IMessage } from "../../types";
import axios from "../../../axiosConfig";
import { normalizeApiData } from "./normalizer";

interface MessagesState {
  messages: IMessage[];
  loading: boolean;
  error: null | string;
  status_response: boolean;
}

interface MessagesAction {
  getMessageByChatId: (idChat: string) => void;
  addNewMessage: (idChat: string, text: string) => void;
}

export const useMessagesStore = create<MessagesState & MessagesAction>()(
  (set) => ({
    messages: [],
    loading: false,
    error: null,
    status_response: false,
    getMessageByChatId: (idChat) => {
      set({ error: null, loading: true });

      axios
        .get(`/chat/${idChat}/messages`)
        .then(({ data }) => {
          set({ messages: normalizeApiData(data.data) });
        })
        .catch((err) => set({ error: err.messages }))
        .finally(() => {
          set({ loading: false });
        });
    },
    addNewMessage: (idChat, text) => {
      axios
        .post("/message/send", { chatId: idChat, message: text })
        .then((data) => {
          if (data.status === 201) {
            const idInterval = setInterval(() => {
              axios.get(`/chat/${idChat}/messages`).then(({ data }) => {
                if (data.data[0].status === "DONE") {
                  set({ status_response: false });
                  set({ messages: normalizeApiData(data.data) });
                  clearInterval(idInterval);
                } else {
                  const result = normalizeApiData(data.data);
                  set({
                    messages: result.splice(0, result.length - 1),
                    status_response: true,
                  });
                }
              });
            }, 1000);
          }
        });
    },
  })
);
