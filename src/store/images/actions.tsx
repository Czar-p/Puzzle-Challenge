import { actionObject } from "../../utils";
import { CHANGE_BLOCK,FETCH_IMAGES, } from "./action-types";

export const fetchImages =()=>actionObject(FETCH_IMAGES)

export const changeBlock =(payload:number)=>actionObject(CHANGE_BLOCK,payload)