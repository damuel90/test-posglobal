import React, { createContext, useReducer } from 'react';
import { Layout } from 'antd';
import reducers from './reducers';
export const Context = createContext();

const Provider = ({ children }) => {
    const store = useReducer(reducers, {}, reducers);
    return (
        <Layout>
            <Context.Provider value={store}>
                {children}
            </Context.Provider>
        </Layout>
    )
};

export default Provider;
