import 'normalize.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/App';
import TableHeaderContextMenuContainer from './toplevel/containers/TableHeaderContextMenuContainer';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

ReactDOM.render(
    <TableHeaderContextMenuContainer />,
    document.getElementById('toplevels')
)
