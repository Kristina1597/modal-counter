import { useDispatch } from 'react-redux';
import { RefObject, useEffect } from 'react';
import { AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useOutsideClick = (ref: RefObject<HTMLDivElement>, action: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                action();
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [action, ref]);
};