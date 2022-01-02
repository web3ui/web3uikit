export interface CollectionProps {
	id?: string;
	view?: "Row" | "Card";
	nftList?: Array<NFT>;
}

interface NFT {
	contract_type: "ERC721" | "ERC1155";
	image?: string;
	name: string;
	token_address: string;
	token_id: string | number;
}