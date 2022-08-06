import CircleArrowLeft from "../../assets/icons/circle-arrow-left.svg";
import Close from "../../assets/icons/close.svg";
import Expand from "../../assets/icons/expand.svg";
import ExpandLight from "../../assets/icons/expand-light.svg";

interface IconProps {
  iconName: string;
  width?: string;
  height?: string;
}

const icons: Record<string, { image: string }> = {
  "arrow-left": {
    image: CircleArrowLeft,
  },
  close: {
    image: Close,
  },
  "expand-light": {
    image: ExpandLight,
  },
  expand: {
    image: Expand,
  },
};

export default function Icon(props: IconProps) {
  const { iconName, height = "auto", width = "auto" } = props;
  return icons[iconName] ? <img height={height} width={width} src={icons[iconName].image} alt={iconName} /> : null;
}
