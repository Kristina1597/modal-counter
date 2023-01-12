import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState
} from 'react';
import { Button } from '../button/Button';
import { ButtonColor, ButtonStyle } from '../../static/CommonDefinitions';

interface IButtonWithCounter {
    title: string,
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void,
    disabled?: boolean,
    style?: ButtonStyle,
    buttonHeight?: string,
    color?: ButtonColor,
    icon?: string,
    className?: string,
    count?: number
    setIsCounterFinished: Dispatch<SetStateAction<boolean>>
}

let timerId: NodeJS.Timeout;

export const ButtonWithCounter = ({title, setIsCounterFinished, ...props}: IButtonWithCounter) => {
    let value: number;
    const [count, setCount] = useState(5);
    const [isCounterStarted, setIsCounterStarted] = useState(false);

    useEffect(() => {
        setIsCounterStarted(true);
    }, []);

    useEffect(() => {
        countSeconds(count);
    }, [isCounterStarted]);

    const countSeconds = (seconds: number) => {
        value = seconds;
        timerId = setInterval(() => {
            if (value > 0) {
                value = value - 1;
                setCount(value)
            } else {
                clearInterval(timerId);
                setIsCounterStarted(false)
                setIsCounterFinished(true);
            }
        }, 1000);
    }

    return (
        <Button count={count.toString()}
                title={title}
                color={props.color}
                style={props.style}
                disabled={props.disabled}/>
    )
}