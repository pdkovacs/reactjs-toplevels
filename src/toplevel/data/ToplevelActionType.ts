export enum ToplevelComponentType {
    TABLE_HEADER_CONTEXT_BUTTON
}

export enum ToplevelActionType {
    SHOW_TABLE_HEADER_CONTEXT_BUTTON,
    HIDE_TABLE_HEADER_CONTEXT_BUTTON
}

export interface ToplevelPosition {
    x : number,
    y : number
}

export interface ToplevelAction {
    type : ToplevelActionType,
    data : {
        position : ToplevelPosition,
        content : any
    }
}
