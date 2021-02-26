export const CHANGE_USER = "CHANGE_USER";
export const CLEAN_USER = "CLEAN_USER";
export type IactionUsuario = (payload: string) => {
    type: string;
    payload: string;
}

export type USER_TYPE = typeof CHANGE_USER | typeof CLEAN_USER;
export type ReducerType = {
    reducer: {
        active: string;
        nomes: string[];
    }

}
