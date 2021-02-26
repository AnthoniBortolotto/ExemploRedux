import { CHANGE_USER, CLEAN_USER } from "./actionTypes";


export const mudarUsuario = (payload:string) => ({
    type: CHANGE_USER,
    payload
})
export const limparUsuario = () => ({
    type: CLEAN_USER
})
