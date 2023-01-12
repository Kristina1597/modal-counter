const CONFIRM_ACTION = 'CONFIRM_ACTION';
const SET_MODAL = 'SET_MODAL';

export type SetModalActionType = {
    type: typeof SET_MODAL,
    value: boolean
};

export type ConfirmActionType = {
    type: typeof CONFIRM_ACTION
};

export const confirmAction = (): ConfirmActionType => {
    return { type: 'CONFIRM_ACTION' }
};

export const setModal = (value: boolean): SetModalActionType => {
    return { type: 'SET_MODAL', value: value}
}