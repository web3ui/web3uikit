import { Button } from '../Button';
import { Check } from '@web3uikit/icons';
import { Loading } from '../Loading';
import { StepperProps } from './types';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import HeaderStyles from './Stepper.styles';
import { useEffect, useRef, useState, Fragment } from 'react';

const {
    DivStyled,
    DivStyledHelper,
    FooterStyled,
    ListItemStyled,
    NavStyled,
    OrderedListStyled,
    SectionStyled,
    SpanStyled,
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
    headerWidth,
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
        <DivStyled>
            <Typography
                children={'Just one sec...'}
                data-testid="test-stepper-title"
                variant="h2"
            />

            <Loading size={20} spinnerColor={color.mint40} />
        </DivStyled>
    );

    const renderContent = () => (
        <DivStyled id={`step-${activeStep}`}>
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

    const renderStepperNumbers = () => (
        <OrderedListStyled data-testid="test-stepper-numbers">
            {stepData.map((step, index) => (
                <Fragment key={`step_${index}`}>
                    <ListItemStyled
                        activeStep={activeStep}
                        aria-label={`step ${Number(index + 1)} ${step.title}`}
                        stepTotal={stepData.length}
                        thisStep={Number(index + 1)}
                    >
                        {activeStep <= Number(index + 1) ? (
                            Number(index + 1)
                        ) : (
                            <Check
                                title="check icon"
                                titleId="stepper check icon"
                                fill={color.mint40}
                                fontSize={15}
                            />
                        )}
                    </ListItemStyled>

                    <SpanStyled
                        activeStep={activeStep}
                        stepTotal={stepData.length}
                        thisStep={Number(index + 1)}
                        aria-hidden="true"
                    />
                </Fragment>
            ))}
        </OrderedListStyled>
    );

    return (
        <SectionStyled data-testid="test-stepper" {...props}>
            <HeaderStyled
                headerWidth={headerWidth}
                style={{ alignSelf: 'center' }}
            >
                {renderStepperNumbers()}
            </HeaderStyled>

            {activeStep === 0 ? renderPreloader() : renderContent()}

            <FooterStyled>
                {hasNavButtons && (
                    <NavStyled data-testid="test-stepper-nav">
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
        </SectionStyled>
    );
};

export default Stepper;
