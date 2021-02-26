import {CHANGE_USER, CLEAN_USER} from './actionTypes'
const initialState = {
    active: null,
    nomes: [
        "João",
        "Pedro",
        "Olavo"
    ]
}


const reducer = (state = initialState, action:any) => {
    switch (action.type) {

    case CHANGE_USER:
        return { ...state, active: action.payload };
    case CLEAN_USER: 
        return {...state, active: null}
    default:
        return state
    }
}
export default reducer;