import { createSlice, configureStore, getDefaultMiddleware, createAction } from '@reduxjs/toolkit'
import rootSaga from './saga'
import createSagaMiddleware from 'redux-saga'

const mainSlice = createSlice({
  name: 'breeds',
  initialState: {
      breeds: [],
      pictures: [],
      allPictures: [],
      pageSize: 24
  },
  reducers: {
    goToNextPage: (state) => {
        state.pictures = state.pictures.concat(state.allPictures.slice(state.pictures.length, state.pictures.length + state.pageSize))
    },
    setBreeds: (state, action) => {
        state.breeds = action.payload
    },
    setPictures: (state, action) => {
        state.allPictures = action.payload
        state.pictures = state.allPictures.slice(0, state.pageSize)
    }
  }
})

export const getBreeds = createAction('getBreeds')
export const getPictures = createAction('getPictures')

export const { goToNextPage, setBreeds, setPictures } = mainSlice.actions

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({thunk:false}), sagaMiddleware]

const store = configureStore({
    reducer: mainSlice.reducer,
    middleware
})

sagaMiddleware.run(rootSaga)

export default store