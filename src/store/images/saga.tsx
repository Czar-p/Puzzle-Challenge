import { call, put, takeLatest, select } from 'redux-saga/effects'
import {
    FETCH_IMAGES,
    FETCH_IMAGES_ASYNC
} from './action-types'
import { fetchService } from "../../utils";
import { AxiosResponse } from 'axios';

const getTitle = (index:number) => {
    switch (index) {
        case 1:

            return "First Block";
        case 2:

            return "Second Block";
        case 3:

            return "third Block";
        case 4:

            return "fourth Block";
        case 5:

            return "fifth Block";

        default:
            break;
    }
}
export function* fetchImagesAsync() {
    try {
        
        yield put({ type: FETCH_IMAGES_ASYNC, payload: [] })

        const response: AxiosResponse[] = yield call(fetchService, '', 'GET', undefined)

        const data: any[] = []

        let counter = 0
        
        for (let i = 0; i < 4; i++) {
            const _arr = []
            for (let j = counter; j < counter + 5; j++) {
                console.log(j,counter)
                _arr.push(response[j].download_url);
            }
            data.push({
                title: getTitle(i+1),
                images: _arr
            })
            counter += 5
        }
       
        yield put({ type: FETCH_IMAGES_ASYNC, payload: data })
    } catch (e) {
        console.log(e)
    }

}

export function* watchFetchImage() {
    yield takeLatest(FETCH_IMAGES, fetchImagesAsync)
}