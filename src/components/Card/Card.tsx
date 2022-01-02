import { useEffect, useState } from "react";
import fonts from "../../styles/fonts";
import React from 'react'
import resetCSS from "../../styles/reset";
import styled from "styled-components";
import { iconTypes } from "../Icon/collection";
import Icon from "../Icon/Icon";
import getModuleAnimation from "./Animations/animations";
import { cardStyles } from "./Card.styles";
import { CardProps, Module } from "./types";


const CardStyled = styled.div<Pick<CardProps, "active" | "module">>`
	${resetCSS}
	${fonts.text}
    ${cardStyles.initialStyles}
    ${(p) => (!p.active ? cardStyles.moduleDefaultInactive : "")}
    ${(p) => (p.active && !isComingSoon(p.module) ? cardStyles.selected : "")}
    ${(p) => (isComingSoon(p.module) ? cardStyles.moduleComingSoon : "")}
`;
const CardHeaderStyled = styled.div`
	${resetCSS}
	${fonts.text}
    ${cardStyles.cardHead}
`;

const ContentStyled = styled.div`
	${resetCSS}
	${fonts.text}
    display: flex;
	align-items: center;
	justify-content: center;
`;

const FooterStyled = styled.div`
	${resetCSS}
	${fonts.text}
    text-align: center;
	color: #2e7daf;
	h2 {
		font-weight: bold;
		font-size: 16px;
		margin: 0;
	}
	span {
		font-size: 12px;
		display: inline-block;
	}
	margin-bottom: 10%;
`;

const getDescription = (module: Module | undefined) => {
	if (!module) return undefined;
	switch (module) {
		case "Token":
			return "Standard crypto token or currency";
		case "NFT Marketplace":
			return "Whitelabel marketplace for digital assets";
		case "NFT Collection":
			return "Collection of individual unique NFTs";
		default:
			return "Coming Soon";
	}
};

const isComingSoon = (module: Module | undefined) => {
	if (!module) return true;
	if (module === "Pack" || module === "Lazy NFT" || module === "Bundle")
		return true;
	return false;
};

const Card: React.FC<CardProps> = ({
	id,
	module,
	active,
	title,
	description,
	tooltipText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis vero in ipsum temporibus nesciunt!",
}: CardProps) => {
	const [showTooltip, toggleTooltipText] = useState<boolean | undefined>(false);
	const [showCheckedIcon, toggleChecked] = useState<boolean | undefined>(false);

	useEffect(() => {
		toggleChecked(active);
	}, [active]);

	return (
		<CardStyled
			id={id}
			active={showCheckedIcon}
			module={module}
			onClick={() =>
				!isComingSoon(module) ? toggleChecked(!showCheckedIcon) : null
			}
		>
			<CardHeaderStyled>
				{showCheckedIcon && !isComingSoon(module) && (
					<Icon fill="green" size={24} svg={iconTypes.checkmark} />
				)}
				<svg
					onMouseEnter={() => toggleTooltipText(true)}
					onMouseLeave={() => toggleTooltipText(false)}
					className={`tooltip-icon`}
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10 1.6092C5.36589 1.6092 1.6092 5.36589 1.6092 10C1.6092 14.6341 5.36589 18.3908 10 18.3908C14.6341 18.3908 18.3908 14.6341 18.3908 10C18.3908 5.36589 14.6341 1.6092 10 1.6092ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
						fill="#2E7DAF"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.2568 6.23091C9.80196 6.1529 9.33421 6.23837 8.93637 6.47218C8.53853 6.70599 8.23627 7.07307 8.08314 7.50838C7.93568 7.92756 7.47632 8.14784 7.05713 8.00038C6.63795 7.85292 6.41767 7.39356 6.56513 6.97438C6.84437 6.18057 7.39554 5.51121 8.12102 5.08484C8.84649 4.65847 9.69945 4.50262 10.5288 4.64488C11.3582 4.78714 12.1105 5.21833 12.6524 5.86209C13.1942 6.5057 13.4908 7.32026 13.4897 8.16154C13.4893 9.50787 12.4902 10.4073 11.7521 10.8993C11.3584 11.1618 10.9706 11.3551 10.6842 11.4824C10.5399 11.5465 10.4186 11.5951 10.3314 11.6283C10.2877 11.645 10.2525 11.6578 10.227 11.6669L10.1961 11.6777L10.1865 11.681L10.1832 11.6821L10.1819 11.6825C10.1819 11.6825 10.1809 11.6828 9.92643 10.9195L10.1809 11.6828C9.75931 11.8234 9.30365 11.5955 9.16313 11.174C9.02278 10.7529 9.24987 10.2979 9.67044 10.1567L9.67159 10.1564L9.68787 10.1507C9.70277 10.1454 9.72676 10.1367 9.75853 10.1245C9.82222 10.1003 9.91637 10.0627 10.0307 10.0119C10.2616 9.90924 10.5634 9.75778 10.8594 9.56042C11.5005 9.13305 11.8805 8.65332 11.8805 8.16092L11.8805 8.15972C11.8811 7.69826 11.7185 7.25144 11.4213 6.89841C11.1241 6.54539 10.7116 6.30892 10.2568 6.23091Z"
						fill="#2E7DAF"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.1954 14.5977C9.1954 14.1533 9.55563 13.7931 10 13.7931H10.0092C10.4536 13.7931 10.8138 14.1533 10.8138 14.5977C10.8138 15.0421 10.4536 15.4023 10.0092 15.4023H10C9.55563 15.4023 9.1954 15.0421 9.1954 14.5977Z"
						fill="#2E7DAF"
					/>
				</svg>
				{showTooltip && <div className={`tooltip-text`}>{tooltipText}</div>}
			</CardHeaderStyled>
			<ContentStyled>{getModuleAnimation(module)}</ContentStyled>
			<FooterStyled>
				<h2>
					{title || module}
				</h2>
				<span>
					{description || getDescription(module)}
				</span>
			</FooterStyled>
		</CardStyled>
	);
};
export default Card