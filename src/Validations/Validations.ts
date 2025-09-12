export function FirstLetterUppercase() {
    return {
        name: 'first-letter-uppercase',
        message: 'The first letter must be uppercase',
        test: (value: string | undefined) => {
            if (value && value.length > 0) {
                const firstLetter = value.substring(0, 1);
                return firstLetter === firstLetter.toUpperCase();
            }
            return true;
        }
    }
}

export function DateNotInFuture() {
    return {
        name: 'date-not-in-future',
        message: 'The date cannot be in the future',
        test: (value: string | undefined) => {
            if (value) {
                const today = new Date();
                const inputDate = new Date(value);
                return inputDate <= today;
            }
            return true;
        }
    }
}