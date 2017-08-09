export enum ToplevelComponentType {
    TABLE_HEADER_CONTEXT_MENU
}

export enum ToplevelActionType {
    SHOW_TABLE_HEADER_CONTEXT_MENU,
    HIDE_TABLE_HEADER_CONTEXT_MENU
}

export interface ToplevelPosition {
    x : number,
    y : number
}

export interface ToplevelAction {
    src  : HTMLElement,
    type : ToplevelActionType,
    data : {
        position : ToplevelPosition,
        content : any
    }
}
