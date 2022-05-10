import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DOC from './pages/doc';
import Example from './pages/example';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<DOC />} />
        <Route path="/example" element={<Example />} />
      </Route>
    </Routes>
  </HashRouter>,
);
