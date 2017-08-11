import * as React from 'react';
import { Container } from 'flux/utils';

import { ToplevelComponentType } from '../data/ToplevelActionType';
import store, { ToplevelComponentState, ToplevelStoreState } from '../data/ToplevelStore';
import { ContextMenu } from '../views/ContextMenu';

class TableHeaderContextMenuContainer extends React.Component<{}, ToplevelComponentState> {
    static getStores() {
        return [ store ];
    }

    static calculateState() {
        return store.getState().getComponentTypeState(ToplevelComponentType.CONTEXT_MENU);
    }

    render() {
        return <ContextMenu  {...this.state}/>;
    }
}

export default Container.create(TableHeaderContextMenuContainer);
