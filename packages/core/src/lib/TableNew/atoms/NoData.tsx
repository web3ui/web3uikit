import React from 'react';
import { ITableNewProps } from '../types';
import styles from './styles';
import getModuleAnimation from '../../Card/Animations/animations';

type TNoDataProps = Pick<
    ITableNewProps,
    'customNoDataComponent' | 'customNoDataText'
>;
const { NoDataStyle } = styles;
const NoData: React.FC<TNoDataProps> = ({
    customNoDataComponent,
    customNoDataText,
}) => {
    if (customNoDataComponent) {
        return <NoDataStyle>{customNoDataComponent}</NoDataStyle>;
    }
    return (
        <NoDataStyle>
            <div>
                {getModuleAnimation(undefined)}
                <p>{customNoDataText}</p>
            </div>
        </NoDataStyle>
    );
};

export default NoData;
