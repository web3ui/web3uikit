class Format {
    /**
     * Responsible for Truncating given string if it's longer then the passed length
     */
    public truncate = (str: string, length: number) => {
        if (str.length <= length) return str;
        const separator = '...';
        const sepLen = separator.length,
            charsToShow = length - sepLen,
            frontChars = Math.ceil(charsToShow / 2),
            backChars = Math.floor(charsToShow / 2);

        return (
            str.substring(0, frontChars) +
            separator +
            str.substring(str.length - backChars)
        );
    };
}

const format = new Format();
export default format;
