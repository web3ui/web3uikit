import React, { useEffect } from 'react';
import { FC, useRef, useState } from 'react';
import { ITruncateStringProps, TStringTruncate } from '../types';

const truncateString = ({
    leftPercentage = 50,
    measurements,
    replaceString,
    text,
}: TStringTruncate): string => {
    if (
        measurements.text &&
        measurements.component &&
        measurements.text > measurements.component
    ) {
        const size = (percentage: number) =>
            measurements.component * (percentage / 100);
        const portion = (size: number) =>
            Math.floor((text.length * size) / measurements.text);

        const leftPart = text.slice(
            0,
            Math.max(0, portion(size(leftPercentage)) - replaceString.length),
        );

        const rightPart = text.slice(
            text.length -
                portion(size(100 - leftPercentage)) +
                replaceString.length,
            text.length,
        );

        return `${leftPart}${replaceString}${rightPart}`;
    } else {
        return text;
    }
};

const TruncateString: FC<ITruncateStringProps> = ({
    replaceString = '...',
    percentageOfCharsAfterTrunc = 50,
    text = '',
}) => {
    const [truncating, setTruncating] = useState(true);
    const [truncatedString, setTruncatedString] = useState<string | null>(null);
    const componentRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const replaceStrRef = useRef<HTMLSpanElement>(null);

    const getTruncatedString = (text: string) => {
        const measurements = {
            component: componentRef.current?.offsetWidth || 0,
            replace: replaceStrRef.current?.offsetWidth || 0,
            text: textRef.current?.offsetWidth || 0,
        };
        return truncateString({
            leftPercentage: percentageOfCharsAfterTrunc,
            measurements,
            replaceString,
            text,
        });
    };

    useEffect(() => {
        if (!truncatedString?.includes('...')) {
            setTruncatedString(text);
        } else {
            setTruncating(true);
        }
    }, [text]);

    useEffect(() => {
        // 2. Call Truncating function on every state change
        if (truncating) {
            const ts = getTruncatedString(text);
            setTruncatedString(ts);
            setTruncating(false);
        }
    }, [truncating]);

    useEffect(() => {
        // Debounce Mechanism
        let timeoutId: any = null;
        const truncateListener = () => {
            clearTimeout(timeoutId);
            // 1. Resizing window sets Truncating state to True
            timeoutId = setTimeout(() => setTruncating(true), 50);
        };
        window.addEventListener('resize', truncateListener);

        // Remove listener on component unmount
        return () => {
            window.removeEventListener('resize', truncateListener);
        };
    }, []);

    return (
        <div
            ref={componentRef}
            style={{
                display: 'block',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            }}
        >
            {truncating && <span ref={textRef}>{text}</span>}
            {truncating && <span ref={replaceStrRef}>{replaceString}</span>}
            {!truncating && truncatedString}
        </div>
    );
};

export default TruncateString;
