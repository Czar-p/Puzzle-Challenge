import { call, put, takeLatest, select } from 'redux-saga/effects'
import {
  FETCH_IMAGES,
  FETCH_IMAGES_ASYNC
} from './action-types'
import { fetchService } from "../../utils";
import { AxiosResponse } from 'axios';


export function* fetchImagesAsync(){
    try{
        const {images:{currentBlock}} = yield select(state=>state)
        yield put({type:FETCH_IMAGES_ASYNC,payload:[]})
        const data:AxiosResponse = yield call(fetchService,`?page=${currentBlock}&limit=5`,'GET',undefined  )
        yield put({type:FETCH_IMAGES_ASYNC,payload:data})
        
    }catch(e){
        console.log(e)
    }
    
}

export function* watchFetchImage(){
    yield takeLatest(FETCH_IMAGES,fetchImagesAsync)
}