import React from 'react';

// types
import type { ICreditCardProps } from './CreditCard.types';

// styles
import {
  CardStyled as Styled,
  CardLayout as Layout,
} from './CreditCard.styles';

// icons
import { IconCardDelete } from './CreditCard.icons';

export const CreditCard = (props: ICreditCardProps) => {
  const { name, cardNumber, expiryMonth, expiryYear, state } = props;
  const formatExpiryMonth = (expiryMonth < 10 ? '0' : '') + expiryMonth;
  return (
    <Styled.Card {...props}>
      {/* 1st row */}
      <Layout.ContainerFlex>
        <Styled.Radio state={state} />
        <IconCardDelete />
      </Layout.ContainerFlex>

      {/* 2nd row */}
      <Layout.ContainerFlex>
        <Styled.Info.Number>{cardNumber}</Styled.Info.Number>
      </Layout.ContainerFlex>

      {/* 3rd row */}
      <Layout.ContainerFlex>
        <Styled.Info.Name>{name}</Styled.Info.Name>
        <Styled.Info.Expiry state={state}>
          {`${formatExpiryMonth}/${expiryYear}`}
        </Styled.Info.Expiry>
        <Styled.Provider></Styled.Provider>
      </Layout.ContainerFlex>
    </Styled.Card>
  );
};
