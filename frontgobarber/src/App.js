import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';

import './Config/ReactotronConfig';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
