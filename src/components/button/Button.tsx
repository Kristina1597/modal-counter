import React from 'react';
import classNames from 'classnames';
import { ButtonColor, ButtonStyle } from '../../static/CommonDefinitions';
import styles from './Button.module.css';

export interface IButton {
    title: string,
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void,
    disabled?: boolean,
    style?: ButtonStyle,
    color?: ButtonColor,
    className?: string,
    timer?: string
}

export const Button = ({
                           title,
                           handleClick,
                           style = ButtonStyle.Square,
                           color = ButtonColor.Blue,
                           disabled = false,
                           timer,
                           className,
                           ...props
                       }: IButton) => {

    const buttonStyle = classNames(styles.button, styles[style], styles[color], className);

    return (
        <button
            className={buttonStyle}
            onClick={handleClick}
            disabled={disabled}
            {...props}
        >
            {timer ? title + '(' + timer + ')' : title}
        </button>
    );
};

