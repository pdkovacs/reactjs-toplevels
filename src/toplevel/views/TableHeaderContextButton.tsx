import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ToplevelComponentState } from '../data/ToplevelStore';

export const TableHeaderContextButton : (props : ToplevelComponentState) => JSX.Element = props => {
    if (props.show) {
        const style = {
            position: 'absolute',
            top: '0px',
            left: '0px'
        }
        return <div style = {{style}}>Kukucs</div>
    } else {
        return <div style = {{display: 'none'}} />;
    }
}
