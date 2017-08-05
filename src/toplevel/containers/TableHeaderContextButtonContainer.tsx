import * as React from 'react';
import { Container } from 'flux/utils';

import { ToplevelComponentType } from '../data/ToplevelActionType';
import {
    ToplevelComponentState,
    ToplevelStoreState,
    ToplevelStore
} from '../data/ToplevelStore';
import { TableHeaderContextButton} from '../views/TableHeaderContextButton';

class TableHeaderContextButtonContainer extends React.Component<{}, ToplevelStoreState> {
    static getStores() {
        return ToplevelStore.getInstance();
    }

    static calculateState() {
        return ToplevelStore.getInstance().getState();
    }

    render() {
        const myTypeState = this.state.getComponentTypeState(ToplevelComponentType.TABLE_HEADER_CONTEXT_BUTTON);
        return <TableHeaderContextButton  {...myTypeState}/>;
    }
}
