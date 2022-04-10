import React from 'react';
import { Information } from '../Info';
import { Modal } from '../Modal';
import { Typography } from '../Typography';
import styles from './NFT.styles';
const { DivModalStyled } = styles;
interface INFTModal {
    /**
     * attributes / traits metadata
     */
    attributes?: ListOfObject | string[];

    /**
     * toggle modal visibility
     */
    setShowModal: (e: boolean) => void;
}

type ListOfObject = { [key: string]: string }[];

const NFTModal: React.FC<INFTModal> = ({ attributes, setShowModal }) => {
    return (
        <Modal
            isVisible
            hasFooter={false}
            headerHasBottomBorder={false}
            title={'Information'}
            onCloseButtonPressed={() => setShowModal(false)}
        >
            <div>
                <Typography variant="h3">Traits</Typography>
                <DivModalStyled>
                    {attributes && attributes.length > 0 ? (
                        attributes.map((attribute, index) => {
                            const entries = Object.entries(attribute);
                            return (
                                <div
                                    style={{
                                        width: '240px',
                                        maxWidth: '300px',
                                    }}
                                >
                                    <Information
                                        topic={
                                            typeof attribute !== 'string'
                                                ? entries[0][1]
                                                : `#${index}`
                                        }
                                        information={
                                            typeof attribute !== 'string'
                                                ? entries[0][1]
                                                : String(attribute)
                                        }
                                        key={`attr-${index}`}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <Typography>No attributes found</Typography>
                    )}
                </DivModalStyled>
            </div>
        </Modal>
    );
};

export default NFTModal;
