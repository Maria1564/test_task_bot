export interface IChat {
    id: string;
    nameChat: string;
    model: string;
  }

export  interface ApiChat {
    id: string,
    name: string,
    group_id: null | string,
    model_id: string
}