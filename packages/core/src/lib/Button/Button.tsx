import { lazy, Suspense } from 'react';
import ButtonBase from './ButtonBase/ButtonBase';
import { ButtonProps } from './types';

const ButtonColored = lazy(() => import('./ButtonColored/ButtonColored'));
const ButtonCustom = lazy(() => import('./ButtonCustom/ButtonCustom'));
const ButtonOutline = lazy(() => import('./ButtonOutline/ButtonOutline'));
const ButtonPrimary = lazy(() => import('./ButtonPrimary/ButtonPrimary'));
const ButtonMoneyPrimary = lazy(() => import('./ButtonMoneyPrimary/ButtonMoneyPrimary'));
const ButtonSecondary = lazy(() => import('./ButtonSecondary/ButtonSecondary'));
const ButtonTranslucent = lazy(
    () => import('./ButtonTranslucent/ButtonTranslucent'),
);

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const BaseButton: React.FC = () => <ButtonBase {...props} />;

    return (
        <>
            <Suspense fallback={BaseButton({ ...props })}>
                {(() => {
                    switch (props.theme) {
                        case 'primary':
                            return <ButtonPrimary {...props} />;
                        case 'moneyPrimary':
                            return <ButtonMoneyPrimary {...props} />;
                        case 'secondary':
                            return <ButtonSecondary {...props} />;
                        case 'outline':
                            return <ButtonOutline {...props} />;
                        case 'translucent':
                            return <ButtonTranslucent {...props} />;
                        case 'colored':
                            return <ButtonColored {...props} />;
                        case 'custom':
                            return (
                                <ButtonCustom
                                    customize={props.customize}
                                    {...props}
                                />
                            );
                        default:
                            return BaseButton({ ...props });
                    }
                })()}
            </Suspense>
        </>
    );
};

export default Button;
