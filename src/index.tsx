import 'normalize.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/App';
import { TableHeaderContextButton } from './toplevel/views/TableHeaderContextButton';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

ReactDOM.render(
    <TableHeaderContextButton show = {false} position = {{x: 0, y: 0}}/>,
    document.getElementById('toplevels')
)
