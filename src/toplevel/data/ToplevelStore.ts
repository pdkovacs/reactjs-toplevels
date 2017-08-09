import { Map } from 'immutable';
import { ReduceStore } from 'flux/utils';

import {
    ToplevelComponentType,
    ToplevelPosition,
    ToplevelAction,
    ToplevelActionType } from './ToplevelActionType';

import dispatcher from './ToplevelDispatcher';

export interface ToplevelComponentState {
    src  : HTMLElement;
    show : boolean;
    position: ToplevelPosition;
}

export class ToplevelStoreState {
    private componentTypeStates : Map<ToplevelComponentType, ToplevelComponentState> = Map();

    constructor (componentTypeStates : Map<ToplevelComponentType, ToplevelComponentState>) {
        if (componentTypeStates !== null) {
            this.componentTypeStates = componentTypeStates;
        }
    }

    public updatePortalState(id : ToplevelComponentType, state : ToplevelComponentState) : ToplevelStoreState {
        return new ToplevelStoreState(this.componentTypeStates.set(id, state));
    }

    public getComponentTypeState(type : ToplevelComponentType) : ToplevelComponentState {
        return this.componentTypeStates.get(type);
    }
}

class ToplevelStore extends ReduceStore<ToplevelStoreState, ToplevelAction> {

    public getInitialState() : ToplevelStoreState {
        return new ToplevelStoreState(null);
    }

    public reduce(oldStoreState : ToplevelStoreState, action: ToplevelAction) : ToplevelStoreState {
        switch (action.type) {
            case ToplevelActionType.SHOW_TABLE_HEADER_CONTEXT_MENU: {
                return oldStoreState.updatePortalState(
                    ToplevelComponentType.TABLE_HEADER_CONTEXT_MENU,
                    {src: action.src, show :true, position: action.data.position}
                );
            }
            case ToplevelActionType.HIDE_TABLE_HEADER_CONTEXT_MENU: {
                return oldStoreState.updatePortalState(
                    ToplevelComponentType.TABLE_HEADER_CONTEXT_MENU,
                    {src: action.src, show :false, position: action.data.position}
                );
            }
            default: {
                return oldStoreState;
            }
        }
    }

}

export default new ToplevelStore(dispatcher);
