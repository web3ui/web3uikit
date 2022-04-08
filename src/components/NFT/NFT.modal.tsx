import React from 'react';
import { Information } from '../Info';
import { Modal } from '../Modal';
import { Typography } from '../Typography';

interface INFTModal {
    /**
     * attributes / traits metadata
     */
    attributes?: { [key: string]: string }[];

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
                <div
                    style={{
                        display: 'flex',
                        gap: '15px',
                        flexWrap: 'wrap',
                        padding: '64px',
                    }}
                >
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
                                        topic={entries[0][1]}
                                        information={entries[1][1]}
                                        key={`attr-${index}`}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <Typography>No attributes found</Typography>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default NFTModal;
