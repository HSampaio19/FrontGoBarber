import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rotas from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

import './Config/ReactotronConfig';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Rotas />
        <GlobalStyle />
      </HistoryRouter>
    </Provider>
  );
}

export default App;
