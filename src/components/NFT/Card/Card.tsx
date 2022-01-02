import Icon from '../../Icon/Icon';
import React from 'react';
import fonts from '../../../styles/fonts';
import resetCSS from '../../../styles/reset';
import styled from 'styled-components';
import { NFTProps } from './types';
import { iconTypes } from '../../Icon/collection';

export type Module =
	| 'Bundle'
	| 'Lazy NFT'
	| 'NFT Collection'
	| 'NFT Marketplace'
	| 'Pack'
	| 'Token';

const CardStyled = styled.div`
	${resetCSS}
	${fonts.text}
	background: #ffffff;
	border-radius: 16px;
	height: 245px;
	overflow: hidden;
	width: 25%;
`;

const ImageStyled = styled.img`
	${resetCSS}
	height: 60%;
	width: 100%;
`;

const ContentStyled = styled.div`
	${resetCSS}
	align-items: flex-start;
	border-bottom: 1px solid;
	border-bottom-color: radial-gradient(
		106.45% 108.64% at 32.33% -4.84%,
		#ecf5fc 0.52%,
		#cee4f3 100%
	);
	display: flex;
	flex-direction: column;
	padding: 5px 10px;
`;

const TitleStyled = styled.p`
	${resetCSS}
	${fonts.text}
		color: #041836;
	font-weight: 600;
	font-size: 14px;
`;

const TypeStyled = styled.p`
	${resetCSS}
	${fonts.text}
		color: rgba(104, 115, 141, 1);
	font-size: 12px;
	line-height: 16px;
`;

const ActionsStyled = styled.div`
	${resetCSS}
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 10px 16px;
`;

const Card: React.FC<NFTProps> = ({
	id,
	address,
	explorerUrl,
	name = 'My Collection',
	tokenId = '01',
	type = 'ERC721',
	imgUrl,
	description = 'This is an empty description for a NFT collection it is just a placeholder you can ignore me. Why are you still reading? lol',
	view,
	}: NFTProps) => {
	if (view === 'Card') {
		return (
		<CardStyled id={id}>
			<ImageStyled src={imgUrl || 'https://i.ibb.co/10nfgjS/Image.png'} />
			<ContentStyled>
				<TitleStyled>{`${name} #${tokenId}`}</TitleStyled>
				<TypeStyled>{type}</TypeStyled>
			</ContentStyled>
			<ActionsStyled>
			<a
				href={`${explorerUrl}address/${address}`}
				target="_blank"
				rel="noreferrer"
				style={{ paddingRight: '0.75em' }}
			>
				<Icon fill="#2E7DAF" svg={iconTypes.link} />
			</a>
			<Icon fill="#2E7DAF" svg={iconTypes.chevron_right_X2} />
			</ActionsStyled>
		</CardStyled>
		);
	} else
		return (
		<div
			style={{
			display: 'flex',
			height: 'fit-content',
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'white',
			borderRadius: '15px',
			fontFamily: 'Open Sans, sans-serif',
			fontSize: '16px',
			fontStyle: 'normal',
			fontWeight: '400',
			letterSpacing: '0em',
			lineHeight: '24px',
			}}
		>
			<p style={{ margin: '0.75em' }}>{tokenId}</p>
			<div>
			<img
				src={imgUrl || 'https://i.ibb.co/10nfgjS/Image.png'}
				width={100}
				height={100}
				style={{ borderRadius: '15px', margin: '1em' }}
			/>
			</div>
			<div style={{ padding: '1em' }}>
			<p
				style={{
				margin: '0px',
				color: '#2E7DAF',
				fontSize: '12px',
				fontWeight: '600',
				width: 'fit-content',
				}}
			>
				{type}
			</p>
			<p
				style={{
				margin: '0px',
				color: '#041836',
				fontSize: '16px',
				fontWeight: '600',
				width: 'fit-content',
				}}
			>
				{name}
			</p>
			<span style={{ margin: '0px', color: '#68738D', fontSize: '14px' }}>
				{description}
			</span>
			</div>
			<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				columnGap: '0.25em',
				margin: '1em',
			}}
			>
			<Icon fill="black" svg={iconTypes.chevron_right_X2} />
			<Icon fill="black" svg={iconTypes.moreVert} />
			</div>
		</div>
    );
};
export default Card;
