export interface NFTProps {
	id?: string;
	imgUrl?: string;
	address?: string;
	name?: string;
	explorerUrl?: string;
	tokenId?: string | number;
	type?: "ERC721" | "ERC1155";
	variant?: "Buyable" | "Ownable" | "Unlistable";
	description?: string;
	view: "Row" | "Card";
}