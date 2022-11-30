import React from 'react';
import { ITableNewProps } from '../types';
import { Typography } from '../../Typography';
import { Loading } from '../../Loading';
import styles from './styles';

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
                        spinnerColor={'#B0B5BF'}
                        size={6}
                    />

                    <Typography weight="400" variant="h3" color={'#B0B5BF'}>
                        Loading Content
                    </Typography>
                </>
            )}
        </DivSpinnerLoaderParent>
    );
};

export default Loader;
