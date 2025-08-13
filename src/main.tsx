import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './index.css';
import { ResetStyle, GlobalStyle } from './styles/index.ts';
createRoot(document.getElementById('root')!).render(
  <>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </>
);
