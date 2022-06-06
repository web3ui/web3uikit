import { FC } from 'react';
import { TIconProps } from '../type';
const PlusIcon: FC<TIconProps> = ({ fill = 'inherit', size = 18, style }) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>plus icon</title>
        <path d="M11 6H13V18H11V6Z" fill={fill} />
        <path d="M18 11V13L6 13L6 11L18 11Z" fill={fill} />
    </svg>
);
export default PlusIcon;
