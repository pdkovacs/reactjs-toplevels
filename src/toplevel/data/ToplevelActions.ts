import { ToplevelPosition, ToplevelActionType, ToplevelActionData } from './ToplevelActionType';
import dispatcher from './ToplevelDispatcher';

export class ToplevelActions {
    public static showContextMenu(src : HTMLElement, position : ToplevelPosition, content: JSX.Element) {
        dispatcher.handleAction({
            type: ToplevelActionType.SHOW_CONTEXT_MENU,
            data: {
                sourceComponent: src,
                position: position,
                content: content
            }
        })
    }

    public static hideContextMenu() {
        dispatcher.handleAction({
            type: ToplevelActionType.HIDE_CONTEXT_MENU,
            data: {
                sourceComponent: null,
                position: null,
                content: null
            }
        })
    }

}
