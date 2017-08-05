import { Map } from 'immutable';
import { ReduceStore } from 'flux/utils';

import {
    ToplevelComponentType,
    ToplevelPosition,
    ToplevelAction,
    ToplevelActionType } from './ToplevelActionType';
import { ToplevelDispatcher } from './ToplevelDispatcher';

export interface ToplevelComponentState {
    show : boolean;
    position: ToplevelPosition;
}

export class ToplevelStoreState {
    private componentTypeStates : Map<ToplevelComponentType, ToplevelComponentState> = Map();

    constructor (portalStates : Map<ToplevelComponentType, ToplevelComponentState>) {
        if (portalStates !== null) {
            this.componentTypeStates = portalStates;
        }
    }

    public updatePortalState(id : ToplevelComponentType, state : ToplevelComponentState) : ToplevelStoreState {
        return new ToplevelStoreState(this.componentTypeStates.set(id, state));
    }

    public getComponentTypeState(type : ToplevelComponentType) : ToplevelComponentState {
        return this.componentTypeStates.get(type);
    }
}

export class ToplevelStore extends ReduceStore<ToplevelStoreState, ToplevelAction> {

    private static instance : ToplevelStore = new ToplevelStore(ToplevelDispatcher.getInstance());

    public getInitialState() : ToplevelStoreState {
        return new ToplevelStoreState(null);
    }

    public reduce(oldStoreState : ToplevelStoreState, action: ToplevelAction) : ToplevelStoreState {
        switch (action.type) {
            case ToplevelActionType.SHOW_TABLE_HEADER_CONTEXT_BUTTON: {
                return oldStoreState.updatePortalState(
                    ToplevelComponentType.TABLE_HEADER_CONTEXT_BUTTON,
                    {show :true, position: action.data.position}
                );
            }
            case ToplevelActionType.HIDE_TABLE_HEADER_CONTEXT_BUTTON: {
                return oldStoreState.updatePortalState(
                    ToplevelComponentType.TABLE_HEADER_CONTEXT_BUTTON,
                    {show :true, position: action.data.position}
                );
            }
            default: {
                return oldStoreState;
            }
        }
    }

    public static getInstance() : ToplevelStore { return this.instance; }
}
