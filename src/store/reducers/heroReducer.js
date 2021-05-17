import { SET_COMICS, SET_LOADING, SET_HERO } from "../const/const";

const initialState = {
    comics: [],
    hero: {},
    loading: true
}
export const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMICS:
            return {
                ...state,
                comics: action.payload


            }
        case SET_HERO:
            return {
                ...state,
                hero: action.payload


            }

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}