import React, { FC, useContext, useReducer } from 'react';
import NotificationContext from './context';
import Notification from './Notification';
import { NotificationActionType, PayloadType } from './types';
import NotificationStyles from './Notification.styles';

const { NotificationContainerStyled } = NotificationStyles;

const initialState: PayloadType[] = [];

function reducer(state: PayloadType[], action: NotificationActionType) {
    switch (action.type) {
        case 'add_notification':
            return [...state, { ...action.payload }];
        case 'remove_notification':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

const NotificationProvider: FC = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state', state);

    return (
        <NotificationContext.Provider value={dispatch}>
            <NotificationContainerStyled position="topR">
                {state.map((toast: PayloadType, key: number) => {
                    console.log('toast', toast);
                    return (
                        <Notification
                            key={`toast-${key}`}
                            dispatch={dispatch}
                            {...toast}
                        />
                    );
                })}
            </NotificationContainerStyled>
            {props.children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    console.log('dispatch');

    return (props: PayloadType) => {
        dispatch({
            type: 'add_notification',
            payload: {
                ...props,
                id: String(Date.now()),
            },
        });
    };
};

export default NotificationProvider;
