import { CHANGE_BLOCK,FETCH_IMAGES_ASYNC } from "./action-types";
import { ImagesReducer } from './interfaces'

const initialState:ImagesReducer ={
  data:[],
  currentBlock:1
}

const Images = (state=initialState,action:any):ImagesReducer =>{
    switch (action.type) {
        case FETCH_IMAGES_ASYNC: 
            return {...state,data:action.payload};
        case CHANGE_BLOCK: 
            return {...state,currentBlock:action.payload};
        default:
            return state;
    }
}

export default Images
