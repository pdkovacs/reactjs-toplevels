import * as React from 'react';

import './app.css';

interface HeaderCellProperties {
    text: string
}

class HeaderCell extends React.Component<HeaderCellProperties, {}> {
    private refTh : HTMLElement = null;
    onInterest() {
        this.refTh.children.item(1).setAttribute('style', 'display: block');
    }
    onInterestLost() {
        this.refTh.children.item(1).setAttribute('style', 'display: none');
    }
    render() {
        const self = this;
        return <th ref={r => this.refTh = r}
                    onMouseEnter={this.onInterest.bind(self)}
                    onMouseLeave={this.onInterestLost.bind(self)}>
                    <div>{this.props.text}</div>
                    <button>.</button>
                </th>;
    }
}

export const App : () => JSX.Element = () => {
    return <table><thead><tr><HeaderCell text='Header A'/><HeaderCell text='Header B'/></tr></thead>
            <tbody><tr><td>Cell A1</td><td>Cell B1</td></tr></tbody></table>
}
