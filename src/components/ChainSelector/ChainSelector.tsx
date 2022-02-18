import React, { FC } from 'react';
import { Select } from '../Select';
import defaultChainList from './defaultChainList';

const ChainSelector: FC = () => {
    return (
        <div>
            <Select
                width="max-content"
                options={defaultChainList}
                onChange={console.log}
            />
        </div>
    );
};

export default ChainSelector;
