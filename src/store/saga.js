import { call, put, all, takeLatest } from "redux-saga/effects"
import { getBreeds, setBreeds, getPictures, setPictures } from "."
import { getBreeds as getBreedsApi, getPictures as getPicturesApi } from "@Api"

function* getBreedsSaga() {
    const breeds = yield call(() => getBreedsApi())
    yield put(setBreeds(breeds))
}

function* getPicturesSaga(action) {
    const pictures = yield call(() => getPicturesApi(action.payload))
    yield put(setPictures(pictures))
}

export default function *rootSaga() {
    yield all([
        takeLatest(getBreeds, getBreedsSaga),
        takeLatest(getPictures, getPicturesSaga)
    ])
}