import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx'
import { AuthProvider } from './context/auth-context.tsx';

import { GlobalStyle } from './index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </AuthProvider>
  </BrowserRouter>
)
