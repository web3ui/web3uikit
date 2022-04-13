import React, { FC, useContext, useMemo, useReducer } from 'react';
import NotificationContext from './context';
import Notification from './Notification';
import NotificationStyles from './Notification.styles';
import {
    IPosition,
    IToasts,
    NotificationActionType,
    PayloadType,
} from './types';

const { NotificationContainerStyled } = NotificationStyles;

const initialState: PayloadType[] = [];

function reducer(state: PayloadType[], action: NotificationActionType) {
    switch (action.type) {
        case 'add_notification':
            return [...state, { ...action.payload }];
        case 'remove_notification':
            console.log('action', action, 'state', state);
            return state.filter((toast) => toast.id !== action.id);
        case 'clear_notifications':
            return [];
        default:
            return state;
    }
}

const NotificationProvider: FC = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toasts = useMemo(() => {
        const toaster: IToasts = {
            bottomL: [],
            bottomR: [],
            topL: [],
            topR: [],
        };
        state.forEach((toast: PayloadType) =>
            toaster[toast.position].push(toast),
        );

        return (Object.keys(toaster) as IPosition[]).map((pos) => {
            return (
                <NotificationContainerStyled
                    key={`container-${pos}`}
                    position={pos}
                >
                    {toaster?.[pos]?.map((toast: PayloadType) => (
                        <Notification
                            dispatch={dispatch}
                            id={toast.id || String(Date.now())}
                            key={toast.id}
                            {...toast}
                        />
                    ))}
                </NotificationContainerStyled>
            );
        });
    }, [state]);

    return (
        <NotificationContext.Provider value={dispatch}>
            {toasts}
            {props.children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    if (dispatch === undefined) {
        throw new Error(
            'useNotification hook must be used within a NotificationProvider',
        );
    }

    return (props: PayloadType) => {
        // @ts-ignore
        dispatch({
            type: 'add_notification',
            payload: {
                id: String(Date.now()),
                ...props,
            },
        });
    };
};

export default NotificationProvider;
