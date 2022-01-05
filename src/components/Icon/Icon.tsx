import React from 'react';
import { IconProps } from '.';
import color from '../../styles/colors';
import collection from './collection';

const Icon: React.FC<IconProps> = ({ fill = color.white, size = 18, svg }) => {
  const getIcon = (fill: string, size: number, svg: string) => {
    switch (svg) {
      case 'arrow circle down':
        return collection?.arrowCircleDownIcon(fill, size);
      case 'arrow circle left':
        return collection?.arrowCircleLeftIcon(fill, size);
      case 'arrow circle right':
        return collection?.arrowCircleRightIcon(fill, size);
      case 'bell':
        return collection?.bellIcon(fill, size);
      case 'bin':
        return collection?.binIcon(fill, size);
      case 'book':
        return collection?.bookIcon(fill, size);
      case 'calendar':
        return collection?.calendarIcon(fill, size);
      case 'camera':
        return collection?.cameraIcon(fill, size);
      case 'cart':
        return collection?.cartIcon(fill, size);
      case 'chart':
        return collection?.chartIcon(fill, size);
      case 'check':
        return collection?.checkIcon(fill, size);
      case 'checkmark':
        return collection?.checkmarkIcon(fill, size);
      case 'chevron up':
        return collection?.chevronUpIcon(fill, size);
      case 'chevron down':
        return collection?.chevronDownIcon(fill, size);
      case 'chevron left':
        return collection?.chevronLeftIcon(fill, size);
      case 'chevron left x2':
        return collection?.chevronLeftX2Icon(fill, size);
      case 'chevron right':
        return collection?.chevronRightIcon(fill, size);
      case 'chevron right x2':
        return collection?.chevronRightX2Icon(fill, size);
      case 'cloud':
        return collection?.cloudIcon(fill, size);
      case 'cog':
        return collection?.cogIcon(fill, size);
      case 'copy':
        return collection?.copyIcon(fill, size);
      case 'credit card':
        return collection?.creditCardIcon(fill, size);
      case 'cube':
        return collection?.cubeIcon(fill, size);
      case 'discord':
        return collection?.discordIcon(fill, size);
      case 'download':
        return collection?.downloadIcon(fill, size);
      case 'download cloud':
        return collection?.downloadCloudIcon(fill, size);
      case 'edit':
        return collection?.editIcon(fill, size);
      case 'exclamation':
        return collection?.exclamationIcon(fill, size);
      case 'expand':
        return collection?.expandIcon(fill, size);
      case 'external link':
        return collection?.externalLinkIcon(fill, size);
      case 'eye':
        return collection?.eyeIcon(fill, size);
      case 'eye closed':
        return collection?.eyeClosedIcon(fill, size);
      case 'file':
        return collection?.fileIcon(fill, size);
      case 'grid':
        return collection?.gridIcon(fill, size);
      case 'help circle':
        return collection?.helpCircleIcon(fill, size);
      case 'image':
        return collection?.imageIcon(fill, size);
      case 'life ring':
        return collection?.lifeRingIcon(fill, size);
      case 'link':
        return collection?.linkIcon(fill, size);
      case 'linux':
        return collection?.linuxIcon(fill, size);
      case 'list':
        return collection?.listIcon(fill, size);
      case 'lock closed':
        return collection?.lockClosedIcon(fill, size);
      case 'lock open':
        return collection?.lockOpenIcon(fill, size);
      case 'log out':
        return collection?.logOutIcon(fill, size);
      case 'mail':
        return collection?.mailIcon(fill, size);
      case 'maximize':
        return collection?.maximizeIcon(fill, size);
      case 'message circle':
        return collection?.messageCircleIcon(fill, size);
      case 'minimize':
        return collection?.minimizeIcon(fill, size);
      case 'minus':
        return collection?.minusIcon(fill, size);
      case 'monitor':
        return collection?.monitorIcon(fill, size);
      case 'more':
        return collection?.moreIcon(fill, size);
      case 'more vert':
        return collection?.moreVertIcon(fill, size);
      case 'network':
        return collection?.networkIcon(fill, size);
      case 'off':
        return collection?.offIcon(fill, size);
      case 'paperclip':
        return collection?.paperclipIcon(fill, size);
      case 'pin':
        return collection?.pinIcon(fill, size);
      case 'plug':
        return collection?.plugIcon(fill, size);
      case 'plus':
        return collection?.plusIcon(fill, size);
      case 'pulse':
        return collection?.pulseIcon(fill, size);
      case 'reload':
        return collection?.reloadIcon(fill, size);
      case 'search':
        return collection?.searchIcon(fill, size);
      case 'server':
        return collection?.serverIcon(fill, size);
      case 'star':
        return collection?.starIcon(fill, size);
      case 'stars':
        return collection?.starsIcon(fill, size);
      case 'testnet':
        return collection?.testnetIcon(fill, size);
      case 'triangle down':
        return collection?.triangleDownIcon(fill, size);
      case 'triangle up':
        return collection?.triangleUpIcon(fill, size);
      case 'update':
        return collection?.updateIcon(fill, size);
      case 'user':
        return collection?.userIcon(fill, size);
      case 'windows':
        return collection?.windowsIcon(fill, size);
      case 'x circle':
        return collection?.xCircleIcon(fill, size);
      case 'x':
        return collection?.xIcon(fill, size);
      case 'youtube':
        return collection?.youtubeIcon(fill, size);
      default:
        return collection?.plusIcon(fill, size);
    }
  };

  return getIcon(fill, size, svg);
};

export default Icon;
