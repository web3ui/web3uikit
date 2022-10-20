import { useState } from 'react';

const useLocalStorage = (
    key: string,
    initialValue: any,
    expiryInDays?: number | null,
) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined' || !window?.localStorage) {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                const parsedItem = JSON.parse(item);
                //set the value only if it is not expired
                if (
                    new Date().getTime() < new Date(parsedItem.expiry).getTime()
                ) {
                    return parsedItem.value;
                } else {
                    // remove the value if it is expired
                    window.localStorage.removeItem(key);
                }
            }
            return initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: any) => {
        try {
            let expiry;
            if (expiryInDays) {
                // no of expiry days * hours * minutes * second * milliseconds
                expiry = new Date(
                    Date.now() + expiryInDays * 24 * 60 * 60 * 1000,
                );
            }
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined' && window.localStorage) {
                window.localStorage.setItem(
                    key,
                    JSON.stringify({ value: valueToStore, expiry }),
                );
            }
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
};

export default useLocalStorage;
