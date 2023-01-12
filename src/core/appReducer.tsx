import { RootState } from './store';
import { ConfirmActionType, SetModalActionType } from './actionCreators';

type ActionTypes = ConfirmActionType | SetModalActionType;

export interface AppState {
    isActionConfirmed: boolean,
    isModalOpened: boolean
}

const initialState: AppState = {
    isActionConfirmed: false,
    isModalOpened: false
};

export const appReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'CONFIRM_ACTION':
            return {
                ...state,
                isActionConfirmed: true
            };
        case 'SET_MODAL':
            return {
                ...state,
                isModalOpened: action.value
            };
        default:
            return state;
    }
};

export const selectIsActionWasConfirmed = (state: RootState) => state.appReducer.isActionConfirmed;
export const selectIsModalOpened = (state: RootState) => state.appReducer.isModalOpened;