import { Button } from '../Button';
import { Loading } from '../Loading';
import { StepperProps } from './types';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import HeaderStyles from './Stepper.styles';
import { useEffect, useRef, useState } from 'react';
import StepperNumbers from './helpers/StepperNumbers';

const {
    DivStyled,
    DivStyledHelper,
    FooterStyled,
    NavStyled,
    SectionStyled,
    HeaderStyled,
} = HeaderStyles;

const Stepper: React.FC<StepperProps> = ({
    step = 0,
    stepData,
    hasNavButtons = true,
    helperContent,
    completeTitle = 'all done, nice!',
    completeMessage = 'You should tell the user what to do next, or use the onComplete function to programmatically fire an event',
    onComplete = () => null,
    onNext,
    onPrev,
    headerWidth,
    orientation = 'horizontal',
    contentPadding = undefined,
    ...props
}) => {
    const [activeStep, setActiveStep] = useState(step);
    const myStepRef = useRef(activeStep);

    useEffect(() => {
        // subscribe event
        document.addEventListener('prev', prevStep);
        document.addEventListener('next', nextStep);
        return () => {
            // unsubscribe event
            document.removeEventListener('prev', prevStep);
            document.removeEventListener('next', nextStep);
        };
    }, []);

    const setStep = (data: number) => {
        myStepRef.current = data;
        setActiveStep(data);
    };

    const prevStep = () => {
        onPrev?.(activeStep);
        if (myStepRef.current <= 1) return;
        setStep(myStepRef.current - 1);
    };

    const nextStep = () => {
        if (activeStep === stepData.length + 1) {
            onComplete();
            return;
        }
        setStep(myStepRef.current + 1);
        onNext && onNext(activeStep);
    };

    const handleContentClick = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as Element;
        if (!target.id) return;
        if (target.id === 'prev') prevStep();
        if (target.id === 'next') nextStep();
        return;
    };

    const renderPreloader = () => (
        <DivStyled orientation={orientation}>
            <Typography
                children={'Just one sec...'}
                data-testid="test-stepper-title"
                variant="h2"
            />

            <Loading size={20} spinnerColor={color.mint40} />
        </DivStyled>
    );

    const renderContent = () => (
        <DivStyled
            id={`step-${activeStep}`}
            orientation={orientation}
            contentPadding={contentPadding}
        >
            <div id="stepper-title" data-testid="test-stepper-title">
                {activeStep <= stepData.length ? (
                    <Typography
                        children={stepData[Number(activeStep - 1)]?.title || ''}
                        variant={'h2'}
                    />
                ) : (
                    <Typography variant={'h2'}>{completeTitle}</Typography>
                )}
            </div>
            <div
                onClick={handleContentClick}
                data-testid="test-stepper-content"
                id="stepper-content"
            >
                {activeStep <= stepData.length ? (
                    <Typography
                        children={stepData[Number(activeStep - 1)]?.content}
                    />
                ) : (
                    completeMessage
                )}
            </div>
        </DivStyled>
    );

    return (
        <>
            <SectionStyled
                data-testid="test-stepper"
                orientation={orientation}
                {...props}
            >
                <HeaderStyled
                    headerWidth={headerWidth}
                    style={{ alignSelf: 'center' }}
                    orientation={orientation}
                >
                    <StepperNumbers
                        stepData={stepData}
                        activeStep={activeStep}
                        orientation={orientation}
                    />
                </HeaderStyled>

                {activeStep === 0 ? renderPreloader() : renderContent()}

                {orientation === 'horizontal' && (
                    <FooterStyled orientation={orientation}>
                        {hasNavButtons && (
                            <NavStyled
                                data-testid="test-stepper-nav"
                                orientation={orientation}
                            >
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={prevStep}
                                    text="Prev"
                                    theme="secondary"
                                    type="button"
                                />
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={nextStep}
                                    text={
                                        activeStep === stepData.length + 1
                                            ? 'Done!'
                                            : 'Next'
                                    }
                                    theme="primary"
                                    type="button"
                                />
                            </NavStyled>
                        )}

                        {helperContent && (
                            <DivStyledHelper data-testid="test-stepper-helper">
                                {helperContent}
                            </DivStyledHelper>
                        )}
                    </FooterStyled>
                )}
            </SectionStyled>
            {orientation === 'vertical' && (
                <FooterStyled orientation={orientation}>
                    {hasNavButtons && (
                        <NavStyled
                            data-testid="test-stepper-nav"
                            orientation={orientation}
                        >
                            <Button
                                disabled={activeStep === 0}
                                onClick={prevStep}
                                text="Prev"
                                theme="secondary"
                                type="button"
                            />
                            <Button
                                disabled={activeStep === 0}
                                onClick={nextStep}
                                text={
                                    activeStep === stepData.length + 1
                                        ? 'Done!'
                                        : 'Next'
                                }
                                theme="primary"
                                type="button"
                            />
                        </NavStyled>
                    )}

                    {helperContent && (
                        <DivStyledHelper data-testid="test-stepper-helper">
                            {helperContent}
                        </DivStyledHelper>
                    )}
                </FooterStyled>
            )}
        </>
    );
};

export default Stepper;
