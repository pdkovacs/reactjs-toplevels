import { Dispatcher } from 'flux';

import { ToplevelAction } from './ToplevelActionType';

class ToplevelDispatcher extends Dispatcher<ToplevelAction> {

    public handleAction(action : ToplevelAction) : void {
        super.dispatch(action);
    }

}

export default new ToplevelDispatcher();
