import Illustration from '../Illustrations/Illustration';
import { CryptoLogoProps } from './types';
import styles from './CryptoLogos.styles';

const { DivStyledCryptoLogo } = styles;

const CryptoLogos: React.FC<CryptoLogoProps> = ({
    chain,
    size = '48px',
    bgColor,
    ...props
}: CryptoLogoProps) => {
    return (
        <DivStyledCryptoLogo
            bgColor={bgColor}
            chain={chain}
            data-testid="test-crypto-logo"
            size={size}
            {...props}
        >
            {
                <Illustration
                    height="90%"
                    logo={chain}
                    width="90%"
                ></Illustration>
            }
        </DivStyledCryptoLogo>
    );
};

export default CryptoLogos;
