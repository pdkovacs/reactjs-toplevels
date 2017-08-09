import { ToplevelPosition, ToplevelActionType } from './ToplevelActionType';
import dispatcher from './ToplevelDispatcher';

export class ToplevelActions {
    public static showTableHeaderContextMenu(src : HTMLElement, position : ToplevelPosition) {
        dispatcher.dispatch({
            src: src,
            type: ToplevelActionType.SHOW_TABLE_HEADER_CONTEXT_MENU,
            data: {
                position: position,
                content: {}
            }
        })
    }

    public static hideTableHeaderContextMenu() {
        dispatcher.dispatch({
            src: null,
            type: ToplevelActionType.HIDE_TABLE_HEADER_CONTEXT_MENU,
            data: {
                position: null,
                content: null
            }
        })
    }

}
