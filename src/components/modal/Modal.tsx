import { useRef, useState } from 'react';
import { useAppDispatch, useOutsideClick } from '../../core/hooks';
import { confirmAction, setModal } from '../../core/actionCreators';
import { Button } from '../button/Button';
import { ButtonWithCounter } from '../buttonWIthCounter/ButtonWithCounter';
import { ButtonColor, ButtonStyle } from '../../static/CommonDefinitions';
import styles from './Modal.module.css';
import CloseIcon from './../../assets/close-icon-16px.svg';

interface IModal {
    title: string,
    text: string
}

export const Modal = ({ title, text }: IModal) => {
    const dispatch = useAppDispatch();
    const [isCounterFinished, setIsCounterFinished] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleCloseModalClick = () => {
        dispatch(setModal(false));
    };

    const handleConfirmActionClick = () => {
        dispatch(confirmAction());
        dispatch(setModal(false));
    };

    useOutsideClick(modalRef, handleCloseModalClick);

    const confirmButton = () => {
        return isCounterFinished ?
            <Button handleClick={handleConfirmActionClick}
                    title={'Подтвердить'}
                    color={ButtonColor.Blue}
                    style={ButtonStyle.Rounded}/> :
            <ButtonWithCounter title={'Подтвердить'}
                               color={ButtonColor.Gray}
                               style={ButtonStyle.Rounded}
                               disabled={true}
                               setIsCounterFinished={setIsCounterFinished}
            />
    };

    return (
        <div ref={modalRef} className={styles.modal_container}>
            <div className={styles.modal_header}>
                <div className={styles.modal_header_title}>
                    <h4>
                        {title}
                    </h4>
                </div>
                <div className={styles.modal_header_closeButton}>
                    <img onClick={handleCloseModalClick}
                         className={styles.modal_header_closeButton_icon}
                         src={CloseIcon}
                         alt=''/>
                </div>
            </div>
            <div className={styles.modal_content}>
                <div className={styles.modal_content_text}>
                    <p>
                        {text}
                    </p>
                </div>
                <div className={styles.modal_content_buttons}>
                    {confirmButton()}
                    <Button handleClick={handleCloseModalClick}
                            title={'Отмена'}
                            color={ButtonColor.Gray}
                            style={ButtonStyle.Rounded}/>
                </div>
            </div>
        </div>
    );
};