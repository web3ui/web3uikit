import React from 'react';
import { IconProps } from '.';
import collection from './collection';

const Icon: React.FC<IconProps> = ({
    fill = 'inherit',
    size = 18,
    svg,
    style,
}) => {
    const getIcon = (
        fill: string,
        size: number,
        svg: string,
        style?: React.CSSProperties,
    ) => {
        switch (svg) {
            case 'arrow circle down':
                return collection?.arrowCircleDownIcon(fill, size, style);
            case 'arrow circle left':
                return collection?.arrowCircleLeftIcon(fill, size, style);
            case 'arrow circle right':
                return collection?.arrowCircleRightIcon(fill, size, style);
            case 'bell':
                return collection?.bellIcon(fill, size, style);
            case 'bin':
                return collection?.binIcon(fill, size, style);
            case 'book':
                return collection?.bookIcon(fill, size, style);
            case 'calendar':
                return collection?.calendarIcon(fill, size, style);
            case 'camera':
                return collection?.cameraIcon(fill, size, style);
            case 'cart':
                return collection?.cartIcon(fill, size, style);
            case 'chart':
                return collection?.chartIcon(fill, size, style);
            case 'check':
                return collection?.checkIcon(fill, size, style);
            case 'checkmark':
                return collection?.checkmarkIcon(fill, size, style);
            case 'chevron up':
                return collection?.chevronUpIcon(fill, size, style);
            case 'chevron down':
                return collection?.chevronDownIcon(fill, size, style);
            case 'chevron left':
                return collection?.chevronLeftIcon(fill, size, style);
            case 'chevron left x2':
                return collection?.chevronLeftX2Icon(fill, size, style);
            case 'chevron right':
                return collection?.chevronRightIcon(fill, size, style);
            case 'chevron right x2':
                return collection?.chevronRightX2Icon(fill, size, style);
            case 'cloud':
                return collection?.cloudIcon(fill, size, style);
            case 'cog':
                return collection?.cogIcon(fill, size, style);
            case 'copy':
                return collection?.copyIcon(fill, size, style);
            case 'credit card':
                return collection?.creditCardIcon(fill, size, style);
            case 'cube':
                return collection?.cubeIcon(fill, size, style);
            case 'discord':
                return collection?.discordIcon(fill, size, style);
            case 'download':
                return collection?.downloadIcon(fill, size, style);
            case 'download cloud':
                return collection?.downloadCloudIcon(fill, size, style);
            case 'edit':
                return collection?.editIcon(fill, size, style);
            case 'exclamation':
                return collection?.exclamationIcon(fill, size, style);
            case 'expand':
                return collection?.expandIcon(fill, size, style);
            case 'external link':
                return collection?.externalLinkIcon(fill, size, style);
            case 'eye':
                return collection?.eyeIcon(fill, size, style);
            case 'eye closed':
                return collection?.eyeClosedIcon(fill, size, style);
            case 'file':
                return collection?.fileIcon(fill, size, style);
            case 'github':
                return collection?.githubIcon(fill, size, style);
            case 'grid':
                return collection?.gridIcon(fill, size, style);
            case 'help circle':
                return collection?.helpCircleIcon(fill, size, style);
            case 'image':
                return collection?.imageIcon(fill, size, style);
            case 'life ring':
                return collection?.lifeRingIcon(fill, size, style);
            case 'link':
                return collection?.linkIcon(fill, size, style);
            case 'linux':
                return collection?.linuxIcon(fill, size, style);
            case 'list':
                return collection?.listIcon(fill, size, style);
            case 'lock closed':
                return collection?.lockClosedIcon(fill, size, style);
            case 'lock open':
                return collection?.lockOpenIcon(fill, size, style);
            case 'log out':
                return collection?.logOutIcon(fill, size, style);
            case 'mail':
                return collection?.mailIcon(fill, size, style);
            case 'mastercard':
                return collection?.mastercardIcon(fill, size, style);
            case 'maximize':
                return collection?.maximizeIcon(fill, size, style);
            case 'message circle':
                return collection?.messageCircleIcon(fill, size, style);
            case 'minimize':
                return collection?.minimizeIcon(fill, size, style);
            case 'minus':
                return collection?.minusIcon(fill, size, style);
            case 'monitor':
                return collection?.monitorIcon(fill, size, style);
            case 'more':
                return collection?.moreIcon(fill, size, style);
            case 'more vert':
                return collection?.moreVertIcon(fill, size, style);
            case 'network':
                return collection?.networkIcon(fill, size, style);
            case 'off':
                return collection?.offIcon(fill, size, style);
            case 'paperclip':
                return collection?.paperclipIcon(fill, size, style);
            case 'pin':
                return collection?.pinIcon(fill, size, style);
            case 'plug':
                return collection?.plugIcon(fill, size, style);
            case 'plus':
                return collection?.plusIcon(fill, size, style);
            case 'pulse':
                return collection?.pulseIcon(fill, size, style);
            case 'reddit':
                return collection?.redditIcon(fill, size, style);
            case 'reload':
                return collection?.reloadIcon(fill, size, style);
            case 'search':
                return collection?.searchIcon(fill, size, style);
            case 'server':
                return collection?.serverIcon(fill, size, style);
            case 'star':
                return collection?.starIcon(fill, size, style);
            case 'stars':
                return collection?.starsIcon(fill, size, style);
            case 'telegram':
                return collection?.telegramIcon(fill, size, style);
            case 'testnet':
                return collection?.testnetIcon(fill, size, style);
            case 'triangle down':
                return collection?.triangleDownIcon(fill, size, style);
            case 'triangle up':
                return collection?.triangleUpIcon(fill, size, style);
            case 'twitter':
                return collection?.twitterIcon(fill, size, style);
            case 'update':
                return collection?.updateIcon(fill, size, style);
            case 'user':
                return collection?.userIcon(fill, size, style);
            case 'visa':
                return collection?.visaIcon(fill, size, style);
            case 'windows':
                return collection?.windowsIcon(fill, size, style);
            case 'x circle':
                return collection?.xCircleIcon(fill, size, style);
            case 'x':
                return collection?.xIcon(fill, size, style);
            case 'youtube':
                return collection?.youtubeIcon(fill, size, style);
            default:
                return collection?.plusIcon(fill, size, style);
        }
    };

    return getIcon(fill, size, svg, style);
};

export default Icon;
