import color from '../styles/colors';

//Function to get base types in color format
export enum eColorTypes {
    SECONDARY = 'secondary',
    SUCCESSS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    GREY = 'grey',
}

export const getColor = (colorType: eColorTypes) => {
    switch (colorType) {
        case eColorTypes.SECONDARY:
            return color.blue;
        case eColorTypes.SUCCESSS:
            return color.green;
        case eColorTypes.WARNING:
            return color.yellow;
        case eColorTypes.DANGER:
            return color.red;
        default:
            return color.grey;
    }
};
