import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import GlobalStyle from './styles/global';

import './Config/ReactotronConfig';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
