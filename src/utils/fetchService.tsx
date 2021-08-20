import { call } from 'redux-saga/effects'
import { HOST_URL } from './path'
import axios,{AxiosResponse} from 'axios'

function* fetchService (url:string, method:string = 'GET', params:any = null){
    const objectRequest = {
        method,
        url: `${HOST_URL}${url}`,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        timeout: 15000
      }
         console.log(objectRequest.url)
        const responseBody:AxiosResponse = yield call(fetch,objectRequest)

  return responseBody
      
}

function* fetch(objectRequest:any){

    const response:AxiosResponse =  yield axios(objectRequest)
    return response.data 
}

export default fetchService