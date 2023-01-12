import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../core/hooks';
import { setModal } from '../core/actionCreators';
import { selectIsActionWasConfirmed, selectIsModalOpened } from '../core/appReducer';
import { Button } from '../components/button/Button';
import { Modal } from '../components/modal/Modal';
import { showAlert } from "../helpers";
import styles from './MainPage.module.css';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const isModalOpened = useSelector(selectIsModalOpened);
    const isActionConfirmed = useSelector(selectIsActionWasConfirmed);

    useEffect(() => {
        isActionConfirmed && showAlert();
    }, [isActionConfirmed])

    const executeActionButtonClick = () => {
        dispatch(setModal(true));
    };

    return (
        <div className={styles.container}>
            <Button title={'Выполнить действие'} className={styles.executeActionButton}
                    handleClick={isActionConfirmed ? showAlert : executeActionButtonClick}/>
            {isModalOpened &&
            <Modal title={'Согласие с правилами'}
                   text={'Для данной функции применяются особые условия и правила пользования,\n' +
            '                        их необходимо подтвердить, нажав на кнопку Подтвердить»'}/>
            }
        </div>
    )
};