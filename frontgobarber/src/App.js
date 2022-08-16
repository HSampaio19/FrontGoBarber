import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Rotas from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

import './Config/ReactotronConfig';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HistoryRouter history={history}>
          <Rotas />
          <GlobalStyle />
          <ToastContainer />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
