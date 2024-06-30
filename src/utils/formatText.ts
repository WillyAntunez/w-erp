export type textFormats =
    | 'normal'
    | 'uppercase'
    | 'lowercase'
    | 'capitalize'
    | 'capitalize-each';

export const formatText = (text: string, format: textFormats = 'normal') => {
    switch (format) {
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'capitalize':
            return `${text.substr(0, 1).toUpperCase()}${text
                .substr(1)
                .toLowerCase()}`;
        case 'capitalize-each':
            return text
                .split(' ')
                .map(
                    (word) =>
                        `${word.substr(0, 1).toUpperCase()}${word
                            .substr(1)
                            .toLowerCase()}`,
                )
                .join(' ');
        default:
            return text;
    }
};
