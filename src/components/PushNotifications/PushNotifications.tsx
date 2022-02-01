import React, { createContext, useContext, useReducer } from 'react';

const NotifcationContext = createContext({
    dispatch: {},
});

const NotificationProvider = (props: any) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'PUSH':
                return [...state, { ...action.payload }];
            case 'REMOVE':
                return state.filter((el: any) => el.id !== action.id);
        }
    }, []);

    return (
        <NotifcationContext.Provider
            value={{
                dispatch: dispatch,
            }}
        >
            <div>
                <p>Notifications will go here</p>
                {JSON.stringify(state)}
            </div>
            {props.children}
        </NotifcationContext.Provider>
    );
};

export const addNotification = () => {
    const { dispatch } = useContext(NotifcationContext);
    return (props: any) => {
        (dispatch as any)({
            type: 'PUSH',
            payload: {
                id: '123',
                ...props,
            },
        });
    };
};

export default NotificationProvider;
