import Card from "../Card/Card";
import React from 'react'
import { CollectionProps } from "./types";


const Collection: React.FC<CollectionProps> = ({
	id,
	nftList = [
		{
			contract_type: "ERC721",
			image: "https://i.postimg.cc/5jNcBV8n/Image.png",
			name: "My NFT Collection",
			token_address: "0x214124",
			token_id: "0",
		},
		{
			contract_type: "ERC721",
			image: "https://i.postimg.cc/z3dspcj5/Image-1.png",
			name: "My NFT Collection",
			token_address: "0x214124",
			token_id: "1",
		},
		{
			contract_type: "ERC721",
			name: "My NFT Collection",
			token_address: "0x214124",
			token_id: "2",
		},
	],
	view = "Card",
}: CollectionProps) => {
	return (
		<div
			id={id}
			style={{
				display: `${view === "Row" ? "grid" : "flex"}`,
				columnGap: "0.5em",
				gap: "0.5em",
			}}
		>
            {view === "Row" &&
            <div style={{display: 'flex'}}>
                <div>
                    #
                </div>
                <div>
                    Image
                </div>
                <div>
                    Name
                </div>
                <div>
                    Actions
                </div>
            </div>
            }
			{nftList?.map((nft) => {
				return (
					<Card
						view={view}
						key={nft?.token_id}
						address={nft?.token_address}
						type={nft?.contract_type}
						imgUrl={nft?.image}
						explorerUrl={"https://etherscan.io/"}
						name={nft?.name}
						tokenId={nft?.token_id}
					/>
				);
			})}
		</div>
	);
};

export default Collection
