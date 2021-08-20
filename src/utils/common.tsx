export interface ActionObject{
    type:string,
    payload:any
}

export const actionObject = (type:string,payload:any = null):ActionObject =>({type,payload})

