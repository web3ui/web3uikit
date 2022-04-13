import React from 'react';
import { Information } from '../Info';
import { Modal } from '../Modal';
import { Typography } from '../Typography';
import styles from './NFT.styles';
import { TNFTAttributes } from './types';
const { DivModalStyled } = styles;
interface INFTModal {
    /**
     * attributes / traits metadata
     */
    attributes?: TNFTAttributes;

    /**
     * toggle modal visibility
     */
    setShowModal: (e: boolean) => void;
}

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
                            const entries =
                                typeof attribute !== 'string'
                                    ? Object.entries(attribute)
                                    : null;
                            return (
                                <div key={`${index}-attribute`} id="widget-row">
                                    <Information
                                        topic={
                                            entries
                                                ? entries[0][1]
                                                : `#${index}`
                                        }
                                        information={
                                            entries
                                                ? entries[1][1]
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
