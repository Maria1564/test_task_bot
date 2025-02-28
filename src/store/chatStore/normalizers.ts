import { ApiChat, IChat } from "../../types"


export const normalizeApiData = <T extends ApiChat | ApiChat[], K extends IChat | IChat[]>(data: T):K => {
    const result: IChat[] = []
    if(Array.isArray(data)){
        data.forEach(chat => {
            result.push({
                id: chat.id,
                nameChat: chat.name,
                model: chat.model_id
            })
        })
    }else{
        return {
            id: data.id,
            nameChat: data.name,
            model: data.model_id  
        } as K
    }

    return result as K
}

