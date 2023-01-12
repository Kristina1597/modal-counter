export const sendConfirmAction = () => {
    return { type: 'SEND_CONFIRM_ACTION' }
};

export const confirmAction = () => {
    return { type: 'CONFIRM_ACTION' }
};

export const setModal = (value: boolean) => {
    return { type: 'SET_MODAL', value: value}
}