// @ts-nocheck
import React, { createContext, useContext, useReducer, useState } from 'react';
import Notification from './Notification';

const NotificationContext = createContext();

const NotificationManager = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ADD_NOTIFICATION':
                return [...state, { ...action.payload }];
            case 'REMOVE_NOTIFICATION':
                return state.filter((el) => el.id !== action.id);
            default:
                return state;
        }
    }, []);

    return (
        <NotificationContext.Provider value={dispatch}>
            <div className={'notification-wrapper'}>
                {state.map((note) => {
                    return (
                        <>Hello</>
                        // <Notification
                        //     dispatch={dispatch}
                        //     key={note.id}
                        //     {...note}
                        // />
                    );
                })}
            </div>
            {props.children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    return (props) => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: {
                id: String(Date.now()),
                ...props,
            },
        });
    };
};

export default NotificationManager;
