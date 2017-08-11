import * as React from 'react';

import { ToplevelActions } from '../data/ToplevelActions';
import { ToplevelComponentState } from '../data/ToplevelStore';

import './context-menu.css';

export class ContextMenu extends React.Component<ToplevelComponentState, {}> {

    private peer : HTMLElement;

    handleClick = (e : MouseEvent) => {
        // https://stackoverflow.com/a/43851475 -> Type assertion needed here:
        if ((this.props.sourceComponent && this.props.sourceComponent.contains(e.target as Node))) {
            return;
        } else {
            ToplevelActions.hideContextMenu();
        }
    }

    componentWillMount () {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.handleClick, false);
    }

    render() {
        const style = {
            display: this.props.show ? 'block' : 'none',
            top: this.props.position ? this.props.position.y : 0,
            left: this.props.position ? this.props.position.x : 0
        }
        return <div
                    id = 'context-menu' style = { style }
                    ref = { (r) => { this.peer = r; }}
                >
                {this.props.content}
                </div>;
    }
}