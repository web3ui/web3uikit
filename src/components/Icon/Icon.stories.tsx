import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./Icon";
import { iconTypes } from "./collection";
import color from "../../styles/colors";

export default {
	title: "UI/Icon",
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
	<div>
		<Icon {...args} />
	</div>
);

export const Example = Template.bind({});
Example.args = {
	svg: iconTypes.mail,
	fill: "black",
};

export const Size16 = Template.bind({});
Size16.args = {
	svg: iconTypes.mail,
	size: 16,
	fill: "black",
};

export const Size32 = Template.bind({});
Size32.args = {
	svg: iconTypes.mail,
	size: 32,
	fill: "black",
};

export const Size64 = Template.bind({});
Size64.args = {
	svg: iconTypes.mail,
	size: 64,
	fill: "black",
};

export const ColorBlue = Template.bind({});
ColorBlue.args = {
	svg: iconTypes.mail,
	size: 24,
	fill: color.blue,
};

export const ColorRed = Template.bind({});
ColorRed.args = {
	svg: iconTypes.mail,
	size: 24,
	fill: color.red,
};

export const ColorGreen = Template.bind({});
ColorGreen.args = {
	svg: iconTypes.mail,
	size: 24,
	fill: color.green,
};

export const ArrowCircleDown = Template.bind({});
ArrowCircleDown.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.arrow_circle_down,
};

export const ArrowCircleLeft = Template.bind({});
ArrowCircleLeft.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.arrow_circle_left,
};

export const ArrowCircleRight = Template.bind({});
ArrowCircleRight.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.arrow_circle_right,
};

export const Bell = Template.bind({});
Bell.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.bell,
};

export const Bin = Template.bind({});
Bin.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.bin,
};

export const Book = Template.bind({});
Book.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.book,
};

export const Calendar = Template.bind({});
Calendar.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.calendar,
};

export const Camera = Template.bind({});
Camera.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.camera,
};

export const Cart = Template.bind({});
Cart.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.cart,
};

export const Chart = Template.bind({});
Chart.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.chart,
};

export const Check = Template.bind({});
Check.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.check,
};

export const Checkmark = Template.bind({});
Checkmark.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.checkmark,
};

export const ChevronDown = Template.bind({});
ChevronDown.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.chevron_down,
};

export const ChevronLeft = Template.bind({});
ChevronLeft.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.chevron_left,
};

export const ChevronLeftX2 = Template.bind({});
ChevronLeftX2.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.chevron_left_X2,
};

export const ChevronRight = Template.bind({});
ChevronRight.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.chevron_right,
};

export const ChevronRightX2 = Template.bind({});
ChevronRightX2.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.chevron_right_X2,
};

export const ChevronUp = Template.bind({});
ChevronUp.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.chevron_up,
};

export const Cloud = Template.bind({});
Cloud.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.cloud,
};

export const Cog = Template.bind({});
Cog.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.cog,
};

export const Copy = Template.bind({});
Copy.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.copy,
};

export const CreditCard = Template.bind({});
CreditCard.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.creditCard,
};

export const Cube = Template.bind({});
Cube.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.cube,
};

export const Discord = Template.bind({});
Discord.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.discord,
};

export const DownloadCloud = Template.bind({});
DownloadCloud.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.downloadCloud,
};

export const Download = Template.bind({});
Download.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.download,
};

export const Edit = Template.bind({});
Edit.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.edit,
};

export const Exclamation = Template.bind({});
Exclamation.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.exclamation,
};

export const Expand = Template.bind({});
Expand.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.expand,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.externalLink,
};

export const EyeClosed = Template.bind({});
EyeClosed.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.eyeClosed,
};

export const Eye = Template.bind({});
Eye.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.eye,
};

export const File = Template.bind({});
File.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.file,
};

export const Grid = Template.bind({});
Grid.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.grid,
};

export const HelpCircle = Template.bind({});
HelpCircle.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.helpCircle,
};

export const Image = Template.bind({});
Image.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.image,
};

export const LifeRing = Template.bind({});
LifeRing.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.lifeRing,
};

export const Link = Template.bind({});
Link.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.link,
};

export const Linux = Template.bind({});
Linux.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.linux,
};

export const List = Template.bind({});
List.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.list,
};

export const LockClosed = Template.bind({});
LockClosed.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.lockClosed,
};

export const LockOpen = Template.bind({});
LockOpen.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.lockOpen,
};

export const LogOut = Template.bind({});
LogOut.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.logOut,
};

export const Mail = Template.bind({});
Mail.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.mail,
};

export const Maximize = Template.bind({});
Maximize.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.maximize,
};

export const MessageCircle = Template.bind({});
MessageCircle.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.messageCircle,
};

export const Minimize = Template.bind({});
Minimize.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.minimize,
};

export const Minus = Template.bind({});
Minus.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.minus,
};

export const Monitor = Template.bind({});
Monitor.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.monitor,
};

export const MoreVert = Template.bind({});
MoreVert.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.moreVert,
};

export const More = Template.bind({});
More.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.more,
};

export const Network = Template.bind({});
Network.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.network,
};

export const Off = Template.bind({});
Off.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.off,
};

export const PaperClip = Template.bind({});
PaperClip.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.paperclip,
};

export const Pin = Template.bind({});
Pin.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.pin,
};

export const Plug = Template.bind({});
Plug.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.plug,
};

export const Plus = Template.bind({});
Plus.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.plus,
};

export const Pulse = Template.bind({});
Pulse.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.pulse,
};

export const Reload = Template.bind({});
Reload.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.reload,
};

export const Search = Template.bind({});
Search.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.search,
};

export const Server = Template.bind({});
Server.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.server,
};

export const Star = Template.bind({});
Star.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.star,
};

export const Stars = Template.bind({});
Stars.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.stars,
};

export const Testnet = Template.bind({});
Testnet.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.testnet,
};

export const TriangleDown = Template.bind({});
TriangleDown.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.triangleDown,
};

export const TriangleUp = Template.bind({});
TriangleUp.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.triangleUp,
};

export const Update = Template.bind({});
Update.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.update,
};

export const User = Template.bind({});
User.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.user,
};

export const Windows = Template.bind({});
Windows.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.windows,
};

export const XIcon = Template.bind({});
XIcon.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.x,
};

export const XIconCircle = Template.bind({});
XIconCircle.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.xCircle,
};

export const Youtube = Template.bind({});
Youtube.args = {
	fill: "black",
	size: 32,
	svg: iconTypes.youtube,
};
