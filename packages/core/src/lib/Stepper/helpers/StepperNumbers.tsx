import { Check } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import React, { Fragment } from 'react';
import { Typography } from '../../Typography';
import styles from './StepperNumbers.styles';
import { IStepperNumberProps } from '../types';

const {
    DivStyledOLContainer,
    OrderedListStyled,
    ListItemStyled,
    SpanStyled,
    SpanStyledStepContainer,
    SpanStyledStep,
} = styles;

const StepperNumbers: React.FC<IStepperNumberProps> = ({
    stepData = [],
    activeStep,
    orientation = 'horizontal',
}) => {
    return orientation === 'horizontal' ? (
        <OrderedListStyled
            data-testid="test-stepper-numbers"
            orientation={orientation}
        >
            {stepData.map((step, index) => (
                <Fragment key={`step_${index}`}>
                    <ListItemStyled
                        activeStep={activeStep}
                        aria-label={`step ${Number(index + 1)} ${step.title}`}
                        stepTotal={stepData.length}
                        thisStep={Number(index + 1)}
                        orientation={orientation}
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
                        orientation={orientation}
                    />
                </Fragment>
            ))}
        </OrderedListStyled>
    ) : (
        <DivStyledOLContainer>
            <OrderedListStyled
                data-testid="test-stepper-numbers"
                orientation={orientation}
            >
                {stepData.map((step, index) => (
                    <Fragment key={`step_${index}`}>
                        <SpanStyledStepContainer>
                            <SpanStyledStep>
                                <ListItemStyled
                                    activeStep={activeStep}
                                    aria-label={`step ${Number(index + 1)} ${
                                        step.title
                                    }`}
                                    stepTotal={stepData.length}
                                    thisStep={Number(index + 1)}
                                    orientation={orientation}
                                >
                                    {activeStep <= Number(index + 1) ? (
                                        Number(index + 1)
                                    ) : (
                                        <Check
                                            title="check icon"
                                            titleId="stepper check icon"
                                            fill={color.mint40}
                                            fontSize={22}
                                        />
                                    )}
                                </ListItemStyled>
                                {index !== stepData.length - 1 && (
                                    <SpanStyled
                                        activeStep={activeStep}
                                        stepTotal={stepData.length}
                                        thisStep={Number(index + 1)}
                                        aria-hidden="true"
                                        orientation={orientation}
                                    />
                                )}
                            </SpanStyledStep>
                            <span className="step-title">
                                <Typography
                                    variant="body16"
                                    weight="550"
                                    fontSize="16px"
                                    style={{
                                        opacity:
                                            activeStep - 1 === index ? 1 : 0.5,
                                    }}
                                >
                                    {stepData[index]?.stepTitle}
                                </Typography>
                            </span>
                        </SpanStyledStepContainer>
                    </Fragment>
                ))}
            </OrderedListStyled>
        </DivStyledOLContainer>
    );
};

export default StepperNumbers;
