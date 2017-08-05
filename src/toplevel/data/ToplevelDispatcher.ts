import { Dispatcher } from 'flux';

import { ToplevelAction } from './ToplevelActionType';

export class ToplevelDispatcher extends Dispatcher<ToplevelAction> {

    public handleAction(action : ToplevelAction) : void {
        super.dispatch(action);
    }

    public static getInstance() : ToplevelDispatcher {
        return this.instance;
    }

    private static instance : ToplevelDispatcher = new ToplevelDispatcher();
}
