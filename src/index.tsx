// import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ReactDOM from 'react-dom';
import { App } from './App';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createRoot(document.querySelector('#root'))
  .render(
    <HashRouter>
      <App />
    </HashRouter>,
  );

/* original code below ⬇
createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
*/