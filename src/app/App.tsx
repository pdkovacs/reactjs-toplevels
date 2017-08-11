import * as React from 'react';

import './app.css';

import { ToplevelActions } from '../toplevel/data/ToplevelActions';

interface HeaderCellProperties {
    name: string,
    text: string
}

enum SortDirection {
    ASCENDING,
    DESCENDING
}

class HeaderCell extends React.Component<HeaderCellProperties, {}> {
    private refTh : HTMLElement = null;
    private refContextButton : HTMLElement = null;
    onClickSort = (direction : SortDirection) => {
        console.log('sort [{' + this.props.name + ':' +  direction + '}]');
        ToplevelActions.hideContextMenu();
    }
    onClick = () => {
        var rect = this.refContextButton.getBoundingClientRect();
        ToplevelActions.showContextMenu(this.refTh, { x: rect.left + 15, y: rect.top },
            <div>
                <div className = 'sort-ctrl'
                     onClick={() => this.onClickSort(SortDirection.ASCENDING)}>
                        Sort ascending
                </div>
                <div className = 'sort-ctrl'
                     onClick={() => this.onClickSort(SortDirection.DESCENDING)}>
                        Sort descending
                </div>
            </div>);
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
                   onMouseLeave={this.onInterestLost}>
                        <div>{this.props.text}</div>
                        <button ref={r => this.refContextButton = r}
                                onClick={this.onClick}>
                                    .
                        </button>
               </th>;
    }
}

const aNumber : number = 3.21411;

export const App : () => JSX.Element = () => {
    return <div>
        <table>
            <thead><tr><HeaderCell name='a' text='Header A'/><HeaderCell name='b' text='Header B'/></tr></thead>
            <tbody><tr><td>Cell A1</td><td>Cell B1</td></tr></tbody>
        </table>
    </div>;
}
