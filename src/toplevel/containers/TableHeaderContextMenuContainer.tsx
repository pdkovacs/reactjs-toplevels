import * as React from 'react';
import { Container } from 'flux/utils';

import { ToplevelComponentType } from '../data/ToplevelActionType';
import store, { ToplevelComponentState, ToplevelStoreState } from '../data/ToplevelStore';
import { TableHeaderContextMenu } from '../views/TableHeaderContextMenu';

class TableHeaderContextMenuContainer extends React.Component<{}, ToplevelComponentState> {
    static getStores() {
        return [ store ];
    }

    static calculateState() {
        return store.getState().getComponentTypeState(ToplevelComponentType.TABLE_HEADER_CONTEXT_MENU);
    }

    render() {
        return <TableHeaderContextMenu  {...this.state}/>;
    }
}

export default Container.create(TableHeaderContextMenuContainer);
