"use client";
import store from '@/store/store';
import React, { ReactNode, useEffect, useState } from 'react'
import { Provider } from 'react-redux';
import { Persistor } from "redux-persist"
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const ClientProvider = ({children}: {children:ReactNode}) => {

  const [persisor, setPersistor] = useState<Persistor | null>(null)

  useEffect(() => {
    const clientPersistor = persistStore(store);
    setPersistor(clientPersistor);
  }, []);

  if (!persisor) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisor}>
        {children}
      </PersistGate>
    </Provider>

  )
}

export default ClientProvider
