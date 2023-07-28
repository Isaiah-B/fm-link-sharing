import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './index.tsx'
import { AuthProvider } from './context/auth-context.tsx';

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
