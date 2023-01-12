import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../button/Button';
import { ButtonColor, ButtonStyle } from '../../static/CommonDefinitions';

interface IButtonWithCounter {
    title: string,
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void,
    disabled?: boolean,
    style?: ButtonStyle,
    color?: ButtonColor,
    className?: string,
    timer?: number,
    setIsTimerFinished: Dispatch<SetStateAction<boolean>>
}

let counter: NodeJS.Timeout;

export const ButtonWithTimer = ({ title, setIsTimerFinished, ...props }: IButtonWithCounter) => {
    let value: number;
    const [seconds, setSeconds] = useState(5);
    const [isTimerStarted, setIsTimerStarted] = useState(false);

    useEffect(() => {
        setIsTimerStarted(true);
    }, []);

    useEffect(() => {
        timer(seconds);
    }, [isTimerStarted]);

    const timer = (seconds: number) => {
        value = seconds;
        counter = setInterval(() => {
            if (value > 0) {
                value = value - 1;
                setSeconds(value)
            } else {
                clearInterval(counter);
                setIsTimerStarted(false);
                setIsTimerFinished(true);
            }
        }, 1000);
    };

    return (
        <Button timer={seconds.toString()}
                title={title}
                color={props.color}
                style={props.style}
                disabled={props.disabled}/>
    );
}