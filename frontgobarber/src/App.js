import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rotas from './routes';
import GlobalStyle from './styles/global';

import './Config/ReactotronConfig';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Rotas />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
