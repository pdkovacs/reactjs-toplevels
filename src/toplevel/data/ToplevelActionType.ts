export enum ToplevelComponentType {
    CONTEXT_MENU
}

export enum ToplevelActionType {
    SHOW_CONTEXT_MENU,
    HIDE_CONTEXT_MENU
}

export interface ToplevelPosition {
    x : number,
    y : number
}

export interface ToplevelActionData {
    sourceComponent  : HTMLElement,
    position : ToplevelPosition,
    content : JSX.Element
}

export interface ToplevelAction {
    type : ToplevelActionType,
    data : ToplevelActionData
}
