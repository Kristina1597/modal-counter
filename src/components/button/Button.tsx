import classNames from 'classnames';
import { ButtonColor, ButtonStyle } from '../../static/CommonDefinitions';
import styles from './Button.module.css';

export interface IButton extends Record<string, any> {
    title: string,
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void,
    disabled?: boolean,
    style?: ButtonStyle,
    buttonHeight?: string,
    color?: ButtonColor,
    icon?: string,
    className?: string,
    count?: string
}

export const Button = ({
                           title,
                           handleClick,
                           style = ButtonStyle.Square,
                           buttonHeight = '40px',
                           color = ButtonColor.Blue,
                           icon,
                           disabled = false,
                           count,
                           className,
                           ...props
                       }: IButton) => {

    const buttonStyle = classNames(styles.button, styles[style], styles[color], className);

    return (
        <button
            className={buttonStyle}
            onClick={handleClick}
            disabled={disabled}
            style={{height: buttonHeight}}
            {...props}
        >
            {count ? title + '(' + count + ')' : title}
        </button>
    )
};

