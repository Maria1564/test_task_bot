import { IMessage } from "../../types";

export const normalizeApiData = (data: IMessage[]): IMessage[] => {
  return data.map((item) => ({
    id: item.id,
    role: item.role,
    content: item.content,
    model_id: item.model_id,
    tokens: item.tokens
  })).reverse();
};
