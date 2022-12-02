import React from 'react';
import { ITableNewProps } from '../types';
import { Typography } from '../../Typography';
import { Loading } from '../../Loading';
import styles from './styles';
import { legacyColor } from '@web3uikit/styles';

const { DivSpinnerLoaderParent } = styles;

type TLoaderProps = Pick<ITableNewProps, 'customLoadingContent'>;

const Loader: React.FC<TLoaderProps> = ({ customLoadingContent }) => {
    return (
        <DivSpinnerLoaderParent>
            {customLoadingContent ? (
                customLoadingContent
            ) : (
                <>
                    <Loading
                        spinnerType={'wave'}
                        spinnerColor={legacyColor.greyIcons}
                        size={6}
                    />

                    <Typography
                        weight="400"
                        variant="h3"
                        color={legacyColor.greyIcons}
                    >
                        Loading Content
                    </Typography>
                </>
            )}
        </DivSpinnerLoaderParent>
    );
};

export default Loader;
