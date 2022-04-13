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
    attributes?: Array<any>;

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
                            if (typeof attribute === 'string') {
                                return (
                                    <div
                                        key={`${index}-attribute`}
                                        id="widget-row"
                                    >
                                        <Information
                                            topic={`#${index}`}
                                            information={String(attribute)}
                                            key={`attr-${index}`}
                                        />
                                    </div>
                                );
                            }
                            return (
                                <div key={`${index}-attribute`} id="widget-row">
                                    <Information
                                        topic={
                                            attribute.trait_type || `#${index}`
                                        }
                                        information={
                                            attribute.value || `#${index}`
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
