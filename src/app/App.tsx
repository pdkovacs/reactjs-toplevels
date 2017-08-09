import * as React from 'react';

import './app.css';

import { ToplevelActions } from '../toplevel/data/ToplevelActions';

interface HeaderCellProperties {
    text: string
}

class HeaderCell extends React.Component<HeaderCellProperties, {}> {
    private refTh : HTMLElement = null;
    onClick = () => {
        var rect = this.refTh.getBoundingClientRect();
        ToplevelActions.showTableHeaderContextMenu(this.refTh, { x: rect.left + 10, y: rect.top });
    };
    onInterest = () => {
        this.refTh.children.item(1).setAttribute('style', 'display: block');
    }
    onInterestLost = () => {
        this.refTh.children.item(1).setAttribute('style', 'display: none');
    }
    render() {
        return <th ref={r => this.refTh = r}
                   onMouseEnter={this.onInterest}
                   onMouseLeave={this.onInterestLost}
                   onClick={this.onClick}
                >
                        <div>{this.props.text}</div>
                        <button>.</button>
               </th>;
    }
}

const aNumber : number = 3.21411;

export const App : () => JSX.Element = () => {
    return <div>
                <table><thead><tr><HeaderCell text='Header A'/><HeaderCell text='Header B'/></tr></thead>
                <tbody><tr><td>Cell A1</td><td>Cell B1</td></tr></tbody></table>
           </div>;
}
