import color from '../../styles/colors';

export interface IHideButtonProps {
    /**
     * The color of hide icon
     */
    iconColor?: string | typeof color;

    /**
     * The size of hide icon
     */
    iconSize?: number;

    /**
     * The hidden state info
     */
    isHidden?: boolean;

    /**
     * Callback on toggle
     */
    onToggle: () => void;
}
